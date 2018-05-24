// @flow

import ucFirst from './ucFirst';

type options = {
  organisation: string,
  type: string,
  application?: string,
};

// <Organisation>/<Application?>/<Type>

export default ({ organisation, application = '', type }: options): string =>
  `${ucFirst(organisation)}/${application ? `${ucFirst(application)}/` : ''}${ucFirst(type)}`;
