import createDomainActionString from '../createDomainActionString';

// <Company>/Domain/<Domain>/<ACTION>

describe(`createDomainActionString`, () => {
  it(`should create a correct domain action string with the provided parameters`, () => {
    expect(
      createDomainActionString({
        company: 'teamleader',
        domain: 'events',
        application: 'calendar',
        action: 'list_request',
      }),
    ).toEqual('Teamleader/Domains/Events/LIST_REQUEST');

    expect(
      createDomainActionString({
        company: 'teamleader',
        domain: 'Events',
        application: 'calendar',
        action: 'lIST_request',
      }),
    ).toEqual('Teamleader/Domains/Events/LIST_REQUEST');

    expect(
      createDomainActionString({
        company: 'Teamleader',
        domain: 'events',
        action: 'list_REQUEST',
      }),
    ).toEqual('Teamleader/Domains/Events/LIST_REQUEST');
  });
});
