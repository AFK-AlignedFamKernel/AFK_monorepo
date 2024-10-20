import {ThemedStyleSheet} from '../../styles';

export default ThemedStyleSheet((theme) => ({
  container: {
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',

  },
  swapCard: {
    backgroundColor: theme.colors.swap_surface,
    borderRadius: 16,
    padding: 16,
    width: '100%',

    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  inputContainer: {
    backgroundColor: theme.colors.swap_cardBackground,
    borderRadius: 12,
    padding: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: theme.colors.swap_text,
  },
  label_dim: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: theme.colors.swap_text_dim,
  },
  balance: {
    fontSize: 14,
    color: theme.colors.swap_textSecondary,
    marginLeft: 'auto',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"100%"
  },
  balanceEstimate: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    height: 48,
    color: theme.colors.swap_inputText,
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'bold',
    // Remove focus styles
    borderWidth: 0,
    outlineWidth: 0,
    padding: 0,
    margin: 0,
    borderColor: 'transparent',
    width:"100%"
  },
  tokenSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    height: 34,
    borderRadius: 20,
    marginLeft: 'auto',
    backgroundColor: theme.colors.swap_inputBackground,
  },
  tokenSelectText: {
    color: theme.colors.swap_text,
    fontWeight: 'bold',
    marginRight: 8,
  },
  estimate: {
    fontSize: 14,
    color: theme.colors.swap_textSecondary,
  },
  reverseButton: {
    // borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    marginVertical: -12,
    backgroundColor: theme.colors.swap_surface,
    width: 28,
    height: 28,
    zIndex: 9,
    // marginVertical: 4,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    color: theme.colors.swap_textSecondary,
    fontSize: 14,
  },
  infoValue: {
    color: theme.colors.swap_text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoSecondary: {
    color: theme.colors.swap_textSecondary,
    fontSize: 12,
    textAlign: 'right',
  },
  swapButton: {
    backgroundColor: theme.colors.swap_buttonBackground,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  swapButtonText: {
    color: theme.colors.swap_buttonText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: theme.colors.swap_surface,
    width: '100%',
    maxWidth: 400,
    margin: 'auto',
    borderRadius: 20,
    // borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.swap_text,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: theme.colors.swap_inputBorder,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: theme.colors.swap_inputText,
    backgroundColor: theme.colors.swap_inputBackground,
  },
  tokenItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.swap_divider,
  },
  tokenInfo: {
    flex: 1,
  },
  tokenName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.swap_text,
  },
  tokenSymbol: {
    fontSize: 14,
    color: theme.colors.swap_textSecondary,
  },
  tokenBalance: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.swap_text,
  },
  tokenDecimals: {
    fontSize: 14,
    color: theme.colors.swap_text,
  },
  tokenLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 15,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: theme.colors.text,
  },
}));
