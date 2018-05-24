import createApplicationActionString from '../createApplicationActionString';

// <Organisation>/Application/<Domain>/<ACTION>

describe(`createApplicationActionString`, () => {
  it(`should create a correct domain action string with the provided parameters`, () => {
    expect(
      createApplicationActionString({
        organisation: 'teamleader',
        application: 'calendar',
        domain: 'routing/calendars',
        action: 'goto_today',
      }),
    ).toEqual('Teamleader/Calendar/Application/Routing/Calendars/GOTO_TODAY');

    expect(
      createApplicationActionString({
        organisation: 'teamleader',
        application: 'calendar',
        domain: 'routing/calendars',
        action: 'WEEK',
      }),
    ).toEqual('Teamleader/Calendar/Application/Routing/Calendars/WEEK');
  });
});
