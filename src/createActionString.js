// @flow

import createActionRoot from './utils/createActionRoot';
import normalizeDomain from './utils/normalizeDomain';

type options = {
  company: string,
  type: string,
  application?: string,
  domain: string,
  action: string,
};

// <Company>/<Type>/<Application?>/<Domain>/<ACTION>

export default ({ company, type, application, domain, action }: options = {}): string =>
  `${createActionRoot({ company, application, type })}/${normalizeDomain(domain)}/${action.toUpperCase()}`;
