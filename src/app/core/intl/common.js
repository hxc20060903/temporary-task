import { defineMessages } from 'react-intl';

const COMMON_TEXT_TITLE = 'common.textTitle';
const COMMON_ACTION = 'common.action';

export const CommonTextTitles = defineMessages({
  appName: {
    id: `${COMMON_TEXT_TITLE}.appName`,
    defaultMessage: 'FIN Platform',
  },
});

export const CommonActions = defineMessages({
  save: {
    id: `${COMMON_ACTION}.save`,
    defaultMessage: 'Save',
  },
  reset: {
    id: `${COMMON_ACTION}.reset`,
    defaultMessage: 'Reset',
  },
  previousPage: {
    id: `${COMMON_ACTION}.previousPage`,
    defaultMessage: 'Previous Page',
  },
  nextPage: {
    id: `${COMMON_ACTION}.nextPage`,
    defaultMessage: 'Next Page',
  },
});
