// @flow

import createDomainActionString from './createDomainActionString';

type options = {
  organisation: string,
  domain: string,
  action: string,
};

export default (params: options): string[] =>
  ['REQUEST', 'SUCCESS', 'FAILURE'].map(suffix =>
    createDomainActionString({ ...params, action: `${params.action}_${suffix}` }),
  );
