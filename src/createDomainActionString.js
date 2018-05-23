// @flow

import createActionString from './createActionString';

type options = {
  company: string,
  domain: string,
  action: string,
};

// <Company>/Application/<Domain>/<Action>
export default (params: options): string => createActionString({ ...params, type: 'domains', application: '' });
