import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import {useSendNote, useSendVideo} from 'afk_nostr_sdk';
import * as ImagePicker from 'expo-image-picker';
import {useRef, useState} from 'react';
import {Image, KeyboardAvoidingView, Pressable, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as FileSystem from 'expo-file-system';
import { Video, AVPlaybackStatus } from 'expo-av';

import {GalleryIcon, SendIconContained} from '../../../assets/icons';
import {useNostrAuth, useStyles, useTheme} from '../../../hooks';
import {useFileUpload} from '../../../hooks/api';
import {useToast} from '../../../hooks/modals';
import {MainStackNavigationProps} from '../../../types';
import {SelectedTab} from '../../../types/tab';
import {getImageRatio} from '../../../utils/helpers';
import stylesheet from './styles';
import { NDKKind } from '@nostr-dev-kit/ndk';
// import {useSendNote} from "afk_nostr_sdk/hooks"

export const FormCreatePost: React.FC = () => {
  const {theme} = useTheme();
  const styles = useStyles(stylesheet);
  const fileUpload = useFileUpload();
  const sendNote = useSendNote();
  const queryClient = useQueryClient();
  const {showToast} = useToast();
  const [note, setNote] = useState<string | undefined>();
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | undefined>();
  const [selectedTab, setSelectedTab] = useState<SelectedTab | undefined>(SelectedTab.NOTES);
  const navigation = useNavigation<MainStackNavigationProps>();
  const {handleCheckNostrAndSendConnectDialog} = useNostrAuth();

  const [tags, setTags] = useState<string[][]>([]);
  const inputRef = useRef<TextInput>(null);
  const [video, setVideo] = useState<ImagePicker.ImagePickerAsset | undefined>();
  const sendVideo = useSendVideo();
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDuration, setVideoDuration] = useState<number | undefined>();

  const onGalleryPress = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      allowsMultipleSelection: false,
      selectionLimit: 1,
      exif: false,
      quality: 0.75,
    });

    if (pickerResult.canceled || !pickerResult.assets.length) return;
    const asset = pickerResult.assets[0];
    if (asset.type === 'video') {
      setVideo(asset);
      setImage(undefined);
    } else {
      setImage(asset);
      setVideo(undefined);
    }
  };

  const handleSendNote = async () => {
    if (!note && !video && !image) {
      showToast({type: 'error', title: 'Please add content to your post'});
      return;
    }

    await handleCheckNostrAndSendConnectDialog();
    try {
      if (video) {
        // Get video duration
        const videoRef = new Video({ source: { uri: video.uri } });
        const status = await videoRef.getStatusAsync();
        const duration = status.isLoaded && 'durationMillis' in status && status.durationMillis !== undefined
          ? status.durationMillis / 1000
          : undefined;

        sendVideo.mutate(
          {
            content: note || '',
            videoUri: video.uri,
            kind: NDKKind.VerticalVideo,
            title: videoTitle || 'Untitled Video',
            duration: duration,
            alt: note, // Using the note as alt text, adjust if needed
            contentWarning: undefined, // Add logic to set this if needed
            additionalTags: tags,
          },
          {
            onSuccess() {
              showToast({type: 'success', title: 'Video posted successfully'});
              queryClient.invalidateQueries({queryKey: ['getVideos']});
              navigation.goBack();
            },
            onError(e) {
              console.log('error', e);
              showToast({
                type: 'error',
                title: 'Error! Video could not be posted. Please try again later.',
              });
            },
          }
        );
      } else {
        let imageUrl: string | undefined;
        if (image) {
          const response = await fileUpload.mutateAsync(image);
          imageUrl = response.data.url; // Adjust this based on the actual response structure
        }

        sendNote.mutate(
          {
            content: note ?? '',
            tags: [
              ...tags,
              ...(image && imageUrl ? [['image', imageUrl, `${image.width}x${image.height}`]] : []),
            ],
          },
          {
            onSuccess() {
              showToast({type: 'success', title: 'Note sent successfully'});
              queryClient.invalidateQueries({queryKey: ['rootNotes']});
              navigation.goBack();
            },
            onError(e) {
              console.log('error', e);
              showToast({
                type: 'error',
                title: 'Error! Note could not be sent. Please try again later.',
              });
            },
          }
        );
      }
    } catch (e) {
      console.log('sendNote/sendVideo error', e);
    }
  };

  const handleTabSelected = (tab: string | SelectedTab, screen?: string) => {
    setSelectedTab(tab as any);
    if (screen) {
      navigation.navigate(screen as any);
    }
  };

  const handleTextChange = (text: string) => {
    setNote(text);

    // Extract hashtags from the text
    const hashtags = text.match(/#\w+/g) || [];

    // Convert hashtags to the required format and update tags state
    const newTags = hashtags.map((tag) => ['t', tag.slice(1)]);
    setTags(newTags);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.content}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              value={note}
              ref={inputRef}
              onChangeText={handleTextChange}
              autoFocus
              multiline={true}
              placeholder="Make a post"
              placeholderTextColor={theme.colors.inputPlaceholder}
            />

            {image && (
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: image.uri}}
                  style={[styles.image, {aspectRatio: getImageRatio(image.width, image.height)}]}
                />
              </View>
            )}
          </View>

          <View style={styles.buttons}>
            <View style={styles.mediaButtons}>
              <Pressable onPress={onGalleryPress}>
                <GalleryIcon width="24" height="24" color={theme.colors.red} />
              </Pressable>
            </View>

            <Pressable style={styles.sendButton} onPress={handleSendNote}>
              <SendIconContained width="56" height="56" color={theme.colors.primary} />
            </Pressable>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};
