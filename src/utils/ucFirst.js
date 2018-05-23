// @flow

export default (value: string): string => `${value.charAt(0).toUpperCase()}${value.substr(1).toLowerCase()}`;
