// @flow

import createDomainActionString from './createDomainActionString';

type options = {
  company: string,
  domain: string,
  action: string,
};

export default (params: options): string[] =>
  ['REQUEST', 'SUCCESS', 'FAIL'].map(suffix =>
    createDomainActionString({ ...params, action: `${params.action}_${suffix}` }),
  );
