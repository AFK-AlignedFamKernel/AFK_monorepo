import {BarcodeScanningResult, CameraView, useCameraPermissions} from 'expo-camera';
import React, {useState} from 'react';
import {Clipboard, Modal, Text, TouchableOpacity, View} from 'react-native';

import {Button} from '../../../components';
import {useStyles, useTheme} from '../../../hooks';
import {useToast} from '../../../hooks/modals';
import {usePayment} from '../../../hooks/usePayment';
import stylesheet from './styles';

interface ScanCashuQRCodeProps {
  onClose: () => void;
}

const ScanCashuQRCode: React.FC<ScanCashuQRCodeProps> = ({onClose}) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const {handlePayInvoice, handleGenerateEcash} = usePayment();
  const {showToast} = useToast();
  const {theme} = useTheme();
  const styles = useStyles(stylesheet);

  const handleScannedCode = ({data}: BarcodeScanningResult) => {
    console.log('Scanned data:', data);
    if (!data) {
      showToast({title: 'Invalid QR code', type: 'error'});
      return;
    }
    setScanned(true);
    setScannedData(data);
    setModalVisible(true);
  };

  const handlePay = async () => {
    if (scannedData) {
      await handlePayInvoice(scannedData);
      showToast({title: 'Invoice paid successfully', type: 'success'});
      setModalVisible(false);
      onClose();
    }
  };

  const handleReceive = async () => {
    if (scannedData) {
      await handleGenerateEcash(Number(scannedData.replace('cashu', '')));
      showToast({title: 'eCash received successfully', type: 'success'});
      setModalVisible(false);
      onClose();
    }
  };

  const handleCopyToClipboard = () => {
    if (scannedData) {
      Clipboard.setString(scannedData);
      showToast({title: 'Copied to clipboard', type: 'success'});
    }
  };

  if (!permission) {
    return (
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.grantPermissionMainContainer}>
          <View style={styles.grantPermissionContent}>
            <Text style={styles.grantPermissionText}>Requesting camera permission</Text>
            <Button
              style={styles.modalActionButton}
              textStyle={styles.modalActionButtonText}
              onPress={onClose}
            >
              Cancel
            </Button>
          </View>
        </View>
      </Modal>
    );
  }

  if (!permission.granted) {
    return (
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.grantPermissionMainContainer}>
          <View style={styles.grantPermissionContent}>
            <Text style={styles.grantPermissionText}>
              We need your permission to use the camera
            </Text>
            <View style={styles.grantModalButtonsContainer}>
              <Button
                style={[styles.grantActionButton, styles.grantCancelButton]}
                textStyle={styles.grantCancelButtonText}
                onPress={onClose}
              >
                Cancel
              </Button>
              <Button
                style={[styles.grantActionButton, styles.grantAcceptButton]}
                textStyle={styles.grantAcceptButtonText}
                onPress={requestPermission}
              >
                Grant Permission
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, {color: theme.colors.text}]}>Scan QR Code</Text>
      </View>
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          onBarcodeScanned={(scanningResult) => console.log(scanningResult)}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
          mirror
        />
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              {scannedData?.startsWith('lnbc') ? 'Pay this invoice?' : 'Receive this eCash?'}
            </Text>
            <Button onPress={scannedData?.startsWith('lnbc') ? handlePay : handleReceive}>
              {scannedData?.startsWith('lnbc') ? 'Pay Invoice' : 'Receive eCash'}
            </Button>
            <Button onPress={() => setModalVisible(false)}>Cancel</Button>
          </View>
        </View>
      </Modal>
      {scannedData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Scanned Data: {scannedData}</Text>
          <Button onPress={handleCopyToClipboard}>Copy to Clipboard</Button>
        </View>
      )}
      {scanned && <Button onPress={() => setScanned(false)}>Tap to Scan Again</Button>}
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.cancelText}>Close Scanner</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanCashuQRCode;
