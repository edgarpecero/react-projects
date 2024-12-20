/**
 * Utils File
 *
 * This file contains a collection of reusable utility functions for:
 * - Formatting dates, prices, and percentages.
 * - Data manipulation, including merging, filtering, and summing values.
 * - React-specific helpers, such as accessibility props for components.
 * - Miscellaneous helpers like enum conversion and permissions checks.
 *
 * Designed to streamline common operations across the application.
 */

import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { currencyValuesData, datePickerFormat } from './constants';
import { GridRenderCellParams, GridRowParams, GridSortModel } from '@mui/x-data-grid';
import { CSSProperties } from 'react';
import format from 'date-fns/format';

export const dateFormatter = (value: string | undefined): string => {
  if (!value) return '';
  const date = new Date(value);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const datetimeFormatter = (value: string | undefined): string => {
  if (!value) return '';

  const date = new Date(value);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${formattedDate} ${hours}:${minutes}`;
};

export const allyProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

export const roleNameToDescription = (roleName: string) => {
  roleName = roleName.replace(/-/g, ' ');
  const words = roleName.split(' ');

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};

export const removeEmptyKeys = (objeto: any) => {
  Object.keys(objeto).forEach((clave) => {
    if (objeto[clave] === '') {
      delete objeto[clave];
    }
  });
  return objeto;
};

export const onSubmitNestedForm = (
  handleSubmit: UseFormHandleSubmit<any>,
  onSubmit: (data: any) => void,
  event: React.FormEvent<HTMLFormElement>,
) => {
  event.preventDefault();
  event.stopPropagation();
  return handleSubmit((data) => onSubmit(data))(event);
};

export const createMockRows = (row: any, count: number) =>
  Array.from({ length: count }, (_: any, index: number) => ({
    ...row,
    id: (index + 1).toString(),
  }));

export const updateModifiedItems = (
  prevModifiedItems: any[],
  newModifiedItem: any,
  property = 'id',
) => {
  const updatedRows = [
    ...prevModifiedItems.filter(
      (prevModifiedItem: any) => prevModifiedItem[property] !== newModifiedItem[property],
    ),
    newModifiedItem,
  ];
  return updatedRows;
};

export const mergeWith = (defaultData: any, newData: any, property = 'id') => {
  const mergedData = defaultData.map((existingObj: any) => {
    const newObj = newData.find((obj: any) => existingObj[property] === obj[property]);
    return newObj ? { ...existingObj, ...newObj } : existingObj;
  });

  newData.forEach((obj: any) => {
    const exists = defaultData.some((existingObj: any) => existingObj[property] === obj[property]);
    if (!exists) {
      mergedData.push(obj);
    }
  });

  return mergedData;
};

export const addDynamicTotalRow = (rowData: any[] = [], columnName = 'total') => {
  const data = rowData.filter((row) => row[columnName] !== 'Total');
  const result: any = data.reduce((total: any, row: any) => {
    Object.keys(row).forEach((key) => {
      const value = row[key];

      if (typeof value === 'string' && value.startsWith('$')) {
        const numericValue = parseFloat(value.replace('$', '')) || 0;
        total[key] = `$${(total[key] || 0) + numericValue.toFixed(2)}`;
      } else if (typeof value === 'number') {
        total[key] = (total[key] || 0) + value;
      } else {
        total[key] = value;
      }
    });

    return total;
  }, {});

  const totalRow = {
    ...result,
    tableIndex: data.length + 1,
    id: data.length + 1,
    [columnName]: 'Total',
    editable: false,
  };

  return [...data, totalRow];
};

export const objectToSearchParams = (paramsObject: { [key: string]: any } = {}): string =>
  Object.entries(paramsObject ?? {})
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

export const hasDifferentProperties = (array1: any[], array2: any[]): boolean => {
  if (array1.length !== array2.length) return true;

  return array1.some((obj, index) => {
    return Object.entries(obj).some(([key, value]) => {
      return array2[index][key] !== value;
    });
  });
};

export const sumTrayValues = (trays?: { currency: string; amount: number; rolls: number }[]) => {
  if (!trays || !trays.length) return 0;
  let totalValue = 0;

  trays.forEach((item) => {
    const currencyData = currencyValuesData.find((currency) => currency.currency === item.currency);

    if (currencyData) {
      const value = item.amount * currencyData.currencyValue + item.rolls * currencyData.rollValue;
      totalValue += value;
    }
  });

  return parseFloat(totalValue.toFixed(2));
};

export const sumValues = (...values: (number | string)[]): number => {
  const total = values.reduce((total: number, currentValue) => {
    const parsedValue =
      typeof currentValue === 'string' ? parseFloat(currentValue.replace(/,/g, '')) : currentValue;
    return isNaN(parsedValue) ? total : total + parsedValue;
  }, 0);
  return Number(total.toFixed(2));
};

export const sumPropertyValues = (array: any[], property: string): number => {
  const total = array.reduce((total: number, currentValue) => total + currentValue[property], 0);
  return isNaN(total) ? 0 : Number(total.toFixed(2));
};

export const parseNumericValue = (value: string | number): number => {
  if (typeof value === 'string') return parseFloat(value.replace(/,/g, ''));
  return typeof value === 'number' ? value : 0;
};

export const multiplyValues = (...values: (number | string)[]): number => {
  const total = values.reduce((total: number, currentValue) => {
    const parsedValue =
      typeof currentValue === 'string' ? parseFloat(currentValue.replace(/,/g, '')) : currentValue;
    return isNaN(parsedValue) ? total : total * parsedValue;
  }, 1);
  return Number(total.toFixed(2));
};

export const removeNullFields = (obj: Record<string, any>) =>
  Object.entries(obj)
    .filter(([_, v]) => v != null)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

export const formatUSD = (value?: number | string): string => {
  // Recommended for MUI inputs

  // Format value as price with 2 decimal places
  // (e.g., "123.45")

  if (!value) return '0.00';
  return value.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const extractNumberFromString = (str: string) => {
  // Regular expression to match a number (including decimal numbers)
  const regex = /-?\d+(\.\d+)?/;
  const match = str.match(regex);

  // If a match is found, convert it to a number and return
  // If no match is found, return 0
  return match ? Number(match[0]) : 0;
};

export const formatToPrice = (value?: number | string): string => {
  // Display the price with the "$" symbol added.
  // Use as valueFormatter function for DataGrid.

  if (value === '') return '';

  // Format value as price: "$" + {price with 2 decimal places}
  // (e.g., "$123.45")
  const numValue = typeof value === 'string' ? extractNumberFromString(value) : Number(value) || 0;

  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(numValue);
};

export const formatToPercentage = (value?: number | string): string => {
  if (value === '') return '';

  const numValue = typeof value === 'string' ? parseFloat(value) : Number(value) || 0;

  return (numValue * 100).toFixed(0) + '%';
};

export const parseStringToNumber = (value?: string): number => {
  if (!value) return 0;
  return parseFloat(value.replace(/,/g, ''));
};

export const enumToArrayOfObjects = <T extends string>(
  enumeration: Record<T, string>,
): { value: T; label: string }[] => {
  const arrayOfObjects: { value: T; label: string }[] = [];

  for (const key in enumeration) {
    if (Object.prototype.hasOwnProperty.call(enumeration, key)) {
      const value = key as T;
      const label = enumeration[key];
      arrayOfObjects.push({ value, label });
    }
  }

  // Converts an enum to an array of objects with "value" and "label" properties.
  return arrayOfObjects;
};

export const convertToEpochTime = (dateString: string): number => {
  const dateObj = new Date(dateString);
  const epochTimeInSeconds = Math.floor(dateObj.getTime() / 1000);
  return epochTimeInSeconds;
};

export const onSortModelChange = (sortModel: GridSortModel, columns: Map<string, string>) => {
  const newSort = sortModel.length > 0 ? sortModel[0] : null;
  const sortByName = columns.get(newSort?.field || '') || '';
  if (sortByName) {
    const sortDirection = newSort?.sort === 'desc' ? '_desc' : '';
    return { sortBy: sortByName + sortDirection };
  }
};

export const getPermissionsMatches = <T extends { permissions?: string[] }>(
  permissions: string[],
  option: T,
) => {
  if (permissions.length)
    return (
      !option.permissions ||
      Boolean(
        option.permissions?.find((optionPermission) => permissions?.includes(optionPermission)),
      )
    );
  return false;
};

export const filterByPermissions = <T extends { permission?: string }>(
  permissions: string[],
  options: T[],
) => {
  if (permissions.length)
    return options.filter(
      (option) => !option.permission || permissions?.includes(option.permission),
    );
  return [];
};

export const getOptionsFromEnum = <T extends Record<string, string>>(enumObject: T) =>
  (Object.keys(enumObject) as Array<keyof T>).map((key) => ({
    label: enumObject[key],
    value: key,
  }));

export const formatIfEmpty = ({ value }: Partial<GridRenderCellParams>) => value || '-';
export const formatIfPrimitiveEmpty = (value?: string | number) => (value ? String(value) : '-');

export const formatStatusLabel = (value: string): string => (!value ? '' : value.toUpperCase());

export const removeNullEmptyStringFields = (obj: Record<string, any>) =>
  Object.entries(obj)
    .filter(([_, v]) => v != null && v !== '')
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

export const addIdToItems = (items: any) =>
  (items || []).map((item: any, index: number) => ({ ...item, id: index }));

export const setTimeToEndOfDayOrCurrentTime = (inputDateStr: string) => {
  const inputDate = new Date(inputDateStr);
  const currentDate = new Date();

  // Check if the input date is today. If it's today, return the current date and time
  if (inputDate?.toDateString() === currentDate.toDateString()) {
    return currentDate;
  } else {
    // If it's not today, set the time to the end of the input date
    inputDate.setHours(23, 59, 59, 999);
    return inputDate;
  }
};

export const convertToFilterIDItem = <T extends { id: string | number; name: string; code: string }>(
  items: T[]
) => items.map(({ id, name, code }) => ({ label: `${code} - ${name}`, value: id }));


export const isCheckedValue = (value: any): boolean => {
  if (!value || (typeof value === 'string' && value.toLowerCase() === 'false')) {
    return false;
  }
  return true;
};

export const fullHeightColumnStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

export const getKeyByEnumValue = <T extends Record<string, string>>(
  enumObj: T,
  value: T[keyof T],
): keyof T | null => {
  return Object.keys(enumObj).find((key) => enumObj[key as keyof T] === value) as keyof T | null;
};

export const replaceNullWithDefaultValue = (object: FieldValues, defaultValues: FieldValues) => {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = object[key] === null ? defaultValues[key] : object[key];
    return acc;
  }, {} as FieldValues);
};

export const getRowId = (row: GridRowParams) => row.id;

export const formatToDateAndTimeWithSec = (date?: string): string => {
  const dateObj = new Date(date || new Date());

  const padZero = (num: number): string => num.toString().padStart(2, '0');

  const month = padZero(dateObj.getMonth() + 1);
  const day = padZero(dateObj.getDate());
  const year = dateObj.getFullYear();
  const hours = padZero(dateObj.getHours());
  const minutes = padZero(dateObj.getMinutes());
  const seconds = padZero(dateObj.getSeconds());

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
};

export const formatToDate = (date?: string | number) => {
  if (!date) return '';

  const formattedDate =
    typeof date === 'number'
      ? format(new Date(date), datePickerFormat)
      : format(new Date(String(date)), datePickerFormat);

  return formattedDate;
};

export const formatToTime = (date?: string) => {
  if (!date) return '';

  const formattedDate = format(new Date(date), 'hh:mm:ss a');

  return formattedDate;
};

export const updateSuccessMessage = (entityName: string) =>
  `${entityName} has been successfully updated!`;


type SingleSelectItem = {
  value: number | string;
  label: string | JSX.Element;
};
export const formatToSingleSelectItems = <T extends { id: string; name?: string }>({
  array,
  valueKey = 'id',
  labelKey = 'name',
}: {
  array?: T[];
  valueKey?: keyof T;
  labelKey?: keyof T;
}): SingleSelectItem[] =>
  array
    ? array.map((item) => ({ value: String(item[valueKey]), label: String(item[labelKey]) }))
    : [];

export const capitalizeFirstLetter = (str?: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';

