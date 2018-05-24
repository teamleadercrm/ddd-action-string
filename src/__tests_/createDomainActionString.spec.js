import createDomainActionString from '../createDomainActionString';

// <Organisation>/Domain/<Domain>/<ACTION>

describe(`createDomainActionString`, () => {
  it(`should create a correct domain action string with the provided parameters`, () => {
    expect(
      createDomainActionString({
        organisation: 'teamleader',
        domain: 'events',
        application: 'calendar',
        action: 'list_request',
      }),
    ).toEqual('Teamleader/Domains/Events/LIST_REQUEST');

    expect(
      createDomainActionString({
        organisation: 'teamleader',
        domain: 'Events',
        application: 'calendar',
        action: 'lIST_request',
      }),
    ).toEqual('Teamleader/Domains/Events/LIST_REQUEST');

    expect(
      createDomainActionString({
        organisation: 'Teamleader',
        domain: 'events',
        action: 'list_REQUEST',
      }),
    ).toEqual('Teamleader/Domains/Events/LIST_REQUEST');
  });
});
