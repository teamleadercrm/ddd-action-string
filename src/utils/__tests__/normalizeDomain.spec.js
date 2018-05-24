import normalizeDomain from '../normalizeDomain';

describe(`normalizeDomain`, () => {
  it(`should normalize the domain`, () => {
    expect(normalizeDomain('calendars/WEEK')).toEqual('Calendars/Week');
    expect(normalizeDomain('CALENDARS/week')).toEqual('Calendars/Week');
    expect(normalizeDomain('Calendars/Week')).toEqual('Calendars/Week');
    expect(normalizeDomain('calendars')).toEqual('Calendars');
    expect(normalizeDomain('CALENDars')).toEqual('Calendars');
  });
});
