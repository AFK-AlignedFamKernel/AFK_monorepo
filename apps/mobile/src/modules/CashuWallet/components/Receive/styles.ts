import {Spacing, ThemedStyleSheet} from '../../../../styles';

export default ThemedStyleSheet((theme) => ({
  modalTabsMainContainer: {
    backgroundColor: theme.colors.background,
    width: '100%',
    alignItems: 'center',
    maxWidth: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  tabContainer: {
    flexDirection: 'column',
    width: '80%',
    marginBottom: 30,
  },
  modalTabsTitle: {
    padding: 20,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.inputText,
  },
  tab: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    flex: 1,
    padding: 10,
    marginBottom: 10,
  },
  tabText: {
    fontSize: 18,
    color: theme.colors.white,
    textAlign: 'center',
    fontWeight: 'medium',
  },
  modalTabContentContainer: {
    backgroundColor: theme.colors.surface,
    width: '100%',
    alignItems: 'center',
    maxWidth: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    maxHeight: '95%',
    overflow: 'scroll',
    paddingBottom: 20,
    position: 'relative',
  },
  modalTabContentTitle: {
    padding: 20,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.inputText,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.inputBorder,
    flex: 1,
    height: 80,
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: theme.colors.inputText,
    backgroundColor: theme.colors.inputBackground,
    fontSize: 15,
    marginBottom: 15,
    width: '80%',
    marginHorizontal: 20,
  },
  modalActionButton: {
    marginBottom: 20,
    marginTop: Spacing.small,
    backgroundColor: theme.colors.primary,
  },
  modalActionButtonText: {
    color: theme.colors.white,
  },
  text: {
    color: theme.colors.text,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pasteButton: {
    backgroundColor: 'transparant',
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingHorizontal: Spacing.medium,
    paddingVertical: Spacing.xsmall,
  },
  pasteButtonText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  qrButton: {
    backgroundColor: 'transparent',
    marginTop: Spacing.small,
    marginBottom: Spacing.small,
  },
}));
