// @flow

import createActionString from './createActionString';

type options = {
  company: string,
  application: string,
  domain: string,
  action: string,
};

// <Company>/Application/<Application>/<Domain>/<Action>

export default (params: options): string => createActionString({ ...params, type: 'application' });
