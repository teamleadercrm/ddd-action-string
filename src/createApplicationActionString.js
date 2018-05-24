// @flow

import createActionString from './createActionString';

type options = {
  organisation: string,
  application: string,
  domain: string,
  action: string,
};

// <Organisation>/Application/<Application>/<Domain>/<Action>

export default (params: options): string => createActionString({ ...params, type: 'application' });
