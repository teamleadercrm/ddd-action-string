// @flow

import createActionRoot from './utils/createActionRoot';
import normalizeDomain from './utils/normalizeDomain';

type options = {
  organisation: string,
  type: string,
  application?: string,
  domain: string,
  action: string,
};

// <Organisation>/<Type>/<Application?>/<Domain>/<ACTION>

export default ({ organisation, type, application, domain, action }: options = {}): string =>
  `${createActionRoot({ organisation, application, type })}/${normalizeDomain(domain)}/${action.toUpperCase()}`;
