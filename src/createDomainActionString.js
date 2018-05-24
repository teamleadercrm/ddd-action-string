// @flow

import createActionString from './createActionString';

type options = {
  organisation: string,
  domain: string,
  action: string,
};

// <Organisation>/Application/<Domain>/<Action>
export default (params: options): string => createActionString({ ...params, type: 'domains', application: '' });
