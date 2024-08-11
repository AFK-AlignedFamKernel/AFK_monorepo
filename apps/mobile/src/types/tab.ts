export enum SelectedTab {
  TIPS,
  MESSAGES,
  CHANNELS,
  NOTES,
  CREATE_NOTE,
  CREATE_CHANNEL,
  CREATE_TOKEN,
  LAUNCH_TOKEN,
  LAUNCH_TOKEN_UNRUGGABLE,
  VIEW_KEYS_MARKETPLACE,
}

export const TABS_LIST: {screen?: string; title: string; tab: SelectedTab}[] = [
  {
    title: 'Tips',
    screen: 'Tips',
    tab: SelectedTab.TIPS,
  },
  {
    title: 'Channels',
    screen: 'ChannelsFeed',
    tab: SelectedTab.CHANNELS,
  },
  // {
  //   title: 'Messages',
  //   screen: "ChannelsFeed",
  //   tab: SelectedTab.MESSAGES

  // },
];

export const TABS_LIST_SEARCH: {screen?: string; title: string; tab: SelectedTab}[] = [
  {
    title: 'Notes',
    screen: 'Feed',
    tab: SelectedTab.NOTES,
  },
  {
    title: 'Tips',
    screen: 'Tips',
    tab: SelectedTab.TIPS,
  },
  {
    title: 'Channels',
    screen: 'ChannelsFeed',
    tab: SelectedTab.CHANNELS,
  },
  // {
  //   title: 'Messages',
  //   screen: "ChannelsFeed",
  //   tab: SelectedTab.MESSAGES

  // },
];

export const TABS_FORM_CREATE: {screen?: string; title: string; tab: SelectedTab}[] = [
  {
    title: 'Notes',
    screen: 'PostCreate',
    tab: SelectedTab.CREATE_NOTE,
  },
  {
    title: 'Channel',
    screen: 'CreateChannel',
    tab: SelectedTab.CREATE_CHANNEL,
  },
  {
    title: 'Token',
    screen: 'LaunchToken',
    tab: SelectedTab.LAUNCH_TOKEN,
  },

  // {
  //   title: 'Messages',
  //   screen: "ChannelsFeed",
  //   tab: SelectedTab.MESSAGES

  // },
];


export const TABS_MENU: {screen?: string; title: string; tab: SelectedTab}[] = [
  {
    title: 'Keys',
    screen: 'KeysMarketplace',
    tab: SelectedTab.VIEW_KEYS_MARKETPLACE,
  },
  {
    title: '?',
    screen: '?',
    tab: SelectedTab.LAUNCH_TOKEN_UNRUGGABLE,
  },
  {
    title: '?!',
    screen: '?!',
    tab: SelectedTab.LAUNCH_TOKEN_UNRUGGABLE,
  },
  // {
  //   title: 'Channel',
  //   screen: 'CreateChannel',
  //   tab: SelectedTab.CREATE_CHANNEL,
  // },
  // {
  //   title: 'Token',
  //   screen: 'LaunchToken',
  //   tab: SelectedTab.LAUNCH_TOKEN,
  // },
  // {
  //   title: 'Messages',
  //   screen: "ChannelsFeed",
  //   tab: SelectedTab.MESSAGES

  // },
];