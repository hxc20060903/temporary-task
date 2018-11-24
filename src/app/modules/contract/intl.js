import { defineMessages } from 'react-intl';

const DOMAIN = 'contract';
const TEXT_TITLE = `${DOMAIN}.textTitle`;
const DATA_TITLE = `${DOMAIN}.dataTitle`;
const TEXT_ERROR = `${DOMAIN}.textError`;

export const TextTitles = defineMessages({
  contractListPageTitle: {
    id: `${TEXT_TITLE}.contractListPageTitle`,
    defaultMessage: 'Contract List',
  },
  createContractPageTitle: {
    id: `${TEXT_TITLE}.createContractPageTitle`,
    defaultMessage: 'New Contract',
  },
  updateContractPageTitle: {
    id: `${TEXT_TITLE}.contractListPageTitle`,
    defaultMessage: 'Edit Contract',
  },
});

export const DataTitles = defineMessages({
  amountInUsd: {
    id: `${DATA_TITLE}.amountInUsd`,
    defaultMessage: 'Amount in USD$',
  },
  currenncy: {
    id: `${DATA_TITLE}.currenncy`,
    defaultMessage: 'Currency',
  },
  date: {
    id: `${DATA_TITLE}.date`,
    defaultMessage: 'Date',
  },
  userName: {
    id: `${DATA_TITLE}.userName`,
    defaultMessage: 'Username',
  },
  userSurname: {
    id: `${DATA_TITLE}.userSurname`,
    defaultMessage: 'Surname',
  },
});

export const textErrors = defineMessages({
  invalidSurname: {
    id: `${TEXT_ERROR}.invalidSurname`,
    defaultMessage: 'Your surname cannot be empty~',
  },
  invalidUsername: {
    id: `${TEXT_ERROR}.invalidUsername`,
    defaultMessage: 'Please pick a concret user-name you like~',
  },
  invalidAmount: {
    id: `${TEXT_ERROR}.invalidAmount`,
    defaultMessage: 'Should be a positive number~',
  },
  invalidCurrency: {
    id: `${TEXT_ERROR}.invalidCurrency`,
    defaultMessage: 'Sorry that this currency cannot be recongized or is not yet supported',
  },
});
