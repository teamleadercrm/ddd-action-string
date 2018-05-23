// @flow

import ucFirst from './ucFirst';

type options = {
  company: string,
  type: string,
  application?: string,
};

// <Company>/<Application?>/<Type>

export default ({ company, application = '', type }: options): string =>
  `${ucFirst(company)}/${application ? `${ucFirst(application)}/` : ''}${ucFirst(type)}`;
