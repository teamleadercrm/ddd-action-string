import createActionString from '../createActionString';

// <Organisation>/<Type>/<Domain>/<ACTION>

describe(`createActionString`, () => {
  it(`should create a correct action string with the provided parameters`, () => {
    expect(
      createActionString({
        organisation: 'teamleader',
        application: 'Calendar',
        type: 'application',
        domain: 'routing/week',
        action: 'goto_today',
      }),
    ).toEqual('Teamleader/Calendar/Application/Routing/Week/GOTO_TODAY');

    expect(
      createActionString({
        organisation: 'TeamLeader',
        type: 'Application',
        domain: 'routing/WeeK',
        action: 'GOTO_TODAY',
      }),
    ).toEqual('Teamleader/Application/Routing/Week/GOTO_TODAY');
  });
});
