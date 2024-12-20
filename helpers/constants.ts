/**
 * Constants File
 *
 * This file contains a collection of reusable constants for:
 * - **Regex Patterns**: Predefined regular expressions for validating inputs 
 *     such as alphanumeric strings, usernames, passwords, and dollar values.
 * - **Date and Time Formats**: Standard formats for date pickers and time pickers.
 * - **Currency Information**: Data for various currencies, including values, roll sizes, and coin or note classification.
 * - **State List**: A comprehensive list of U.S. states with their abbreviations and labels for forms or dropdowns.
 *
 * Designed to ensure consistency, reduce hardcoding, and streamline repetitive tasks across the application.
 */


/* Regex constants */
export const regexAlphenumeric = /^[a-zA-Z0-9]+$/;
export const regexAlphenumericWithSpaces = /^[A-Za-z0-9 ]*$/;
export const regexAlphenumericWithDashesAndSpaces = /^[A-Za-z0-9- ]*$/;
export const regexUsername = /^[a-zA-Z0-9.]+$/;
export const cognitoUserNamesRegex = /^[A-Za-záéíóúñÁÉÍÓÚÑ\s'-]{1,40}$/;
export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])[A-Za-z0-9^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ]{8,256}$/;
export const dollarValueRegex = /^-?(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{1,2})?$/;
export const commaSeparationRegex = /\B(?=(\d{3})+(?!\d))/g;
export const datePickerFormat = 'MM/dd/yyyy';
export const dollarValueGreaterThanZeroRegex = /^(?!0+$)([1-9][0-9]{0,2})(,\d{3})*(.\d{1,2})?$/;
export const ENTER_KEYCODE = 13;
export const regexLeadingZero = /^(-?)(0+)(?=.)/;
export const regexPositiveDigit = /^\d+$/;
export const regexPositiveNonRequiredDigit = /^\d*$/;
export const regexAnyDigit = /^-?\d+$/;
export const regexDigitOrMinus = /^-?\d*$/;
export const regexPositiveDigitOrFloatPoint = /^(?:0|[1-9]\d*)(?:\.\d+)?$/;
export const regexDigitDuringInput = /^\d*(\.\d*)?$/;
export const regexWithOrWithoutDecimalPlaces = /^\d*(\.\d{1,2})?$/;

/* Date constants */
export const timePickerFormat = '00:00';

/* Currency constants */
export const currencyValuesData = [
  { currency: 'Penny', currencyPerRoll: 50, currencyValue: 0.01, rollValue: 0.5, isCoin: true },
  { currency: 'Nickel', currencyPerRoll: 40, currencyValue: 0.05, rollValue: 2, isCoin: true },
  { currency: 'Dime', currencyPerRoll: 50, currencyValue: 0.1, rollValue: 5, isCoin: true },
  { currency: 'Quarter', currencyPerRoll: 40, currencyValue: 0.25, rollValue: 10, isCoin: true },
  { currency: 'Half-Dollar', currencyPerRoll: 20, currencyValue: 0.5, rollValue: 10, isCoin: true },
  { currency: 'Dollar', currencyPerRoll: 25, currencyValue: 1, rollValue: 25, isCoin: true },
  { currency: 'Two', currencyPerRoll: 100, currencyValue: 2, rollValue: 200, isCoin: false },
  { currency: 'Five', currencyPerRoll: 100, currencyValue: 5, rollValue: 500, isCoin: false },
  { currency: 'Ten', currencyPerRoll: 100, currencyValue: 10, rollValue: 1000, isCoin: false },
  { currency: 'Twenty', currencyPerRoll: 100, currencyValue: 20, rollValue: 2000, isCoin: false },
  { currency: 'Fifty', currencyPerRoll: 100, currencyValue: 50, rollValue: 5000, isCoin: false },
  {
    currency: 'Hundred', currencyPerRoll: 100, currencyValue: 100, rollValue: 10000, isCoin: false,
  },
];

/* State constants */
export const states = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];