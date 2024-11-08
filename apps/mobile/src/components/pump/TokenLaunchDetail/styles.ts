import {Spacing, ThemedStyleSheet} from '../../../styles';

export default ThemedStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.surface,
    padding: Spacing.normal,
    borderRadius: 16,
    gap: Spacing.medium,
  },
  detailCard: {
    backgroundColor: theme.colors.messageCard,
    borderRadius: 12,
    padding: Spacing.normal,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.small,
    flexWrap: 'wrap',
    gap: Spacing.xsmall,
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    minWidth: 100,
  },
  value: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  addressValue: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.divider,
    marginVertical: Spacing.small,
  },
  toggleButton: {
    alignSelf: 'center',
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
    borderRadius: 20,
    backgroundColor: theme.colors.messageCard,
    marginTop: Spacing.small,
  },
  toggleText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: Spacing.small,
  }
}));
