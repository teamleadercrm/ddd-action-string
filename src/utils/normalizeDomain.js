// @flow

import ucFirst from './ucFirst';

// calendars/WEEK -> Calendars/Week

export default (domain: string): string =>
  domain
    .split('/')
    .map(ucFirst)
    .join('/');
