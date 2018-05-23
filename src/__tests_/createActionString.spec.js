import createActionString from '../createActionString';

// <Company>/<Type>/<Domain>/<ACTION>

describe(`createActionString`, () => {
  it(`should create a correct action string with the provided parameters`, () => {
    expect(
      createActionString({
        company: 'teamleader',
        application: 'Calendar',
        type: 'application',
        domain: 'routing/week',
        action: 'goto_today',
      }),
    ).toEqual('Teamleader/Calendar/Application/Routing/Week/GOTO_TODAY');

    expect(
      createActionString({
        company: 'TeamLeader',
        type: 'Application',
        domain: 'routing/WeeK',
        action: 'GOTO_TODAY',
      }),
    ).toEqual('Teamleader/Application/Routing/Week/GOTO_TODAY');
  });
});
