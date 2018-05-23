# ddd-action-string

> helpers to generate domain-driven design inspired action strings

## Example

```js

import {
  createApplicationActionString,
  createDomainActionString,
  createRequestActionStrings
} from '@teamleader/ddd-action-string';

createApplicationActionString({
  company: 'teamleader',
  application: 'calendar',
  domain: 'routing/calendars',
  action: 'goto_today',
});

// 'Teamleader/Calendar/Application/Routing/Calendars/GOTO_TODAY'


createApplicationActionString({
  company: 'teamleader',
  domain: 'events',
  action: 'initialize',
});

// 'Teamleader/Domain/Events/INITIALIZE'


createRequestActionStrings({
  company: 'teamleader',
  domain: 'events',
  action: 'list',
});

/*
  [
    'Teamleader/Domain/Events/LIST_REQUEST',
    'Teamleader/Domain/Events/LIST_SUCCESS',
    'Teamleader/Domain/Events/LIST_FAIL'
  ]
*/


```