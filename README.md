# @teamleader/ddd-action-string [![npm version](https://badge.fury.io/js/%40teamleader%2Fddd-action-string.svg)](https://badge.fury.io/js/%40teamleader%2Fddd-action-string)

Helpers to create domain-driven design (DDD) inspired action strings for Redux

## Installation

NPM

```bash
npm i @teamleader/ddd-action-string
```

Yarn

```bash
yarn add @teamleader/ddd-action-string
```

## Usage Example

```js
import {
  createApplicationActionString,
  createDomainActionString,
  createRequestActionStrings,
} from '@teamleader/ddd-action-string';

createApplicationActionString({
  organisation: 'teamleader',
  application: 'calendar',
  domain: 'routing/calendars',
  action: 'goto_today',
});

// 'Teamleader/Calendar/Application/Routing/Calendars/GOTO_TODAY'

createDomainActionString({
  organisation: 'teamleader',
  domain: 'events',
  action: 'initialize',
});

// 'Teamleader/Domain/Events/INITIALIZE'

createRequestActionStrings({
  organisation: 'teamleader',
  domain: 'events',
  action: 'list',
});

/*
  [
    'Teamleader/Domain/Events/LIST_REQUEST',
    'Teamleader/Domain/Events/LIST_SUCCESS',
    'Teamleader/Domain/Events/LIST_FAILURE'
  ]
*/
```

[MIT](LICENSE)
