import createRequestActionStrings from '../createRequestActionStrings';

// <Organisation>/Domain/<Domain>/<ACTION>_REQUEST,
// <Organisation>/Domain/<Domain>/<ACTION>_SUCCESS,
// <Organisation>/Domain/<Domain>/<ACTION>FAILURE,

describe(`createRequestActionStrings`, () => {
  it(`should create a correct request action string with the provided parameters`, () => {
    expect(
      createRequestActionStrings({
        organisation: 'teamleader',
        domain: 'events',
        action: 'list',
      }),
    ).toEqual([
      'Teamleader/Domains/Events/LIST_REQUEST',
      'Teamleader/Domains/Events/LIST_SUCCESS',
      'Teamleader/Domains/Events/LIST_FAILURE',
    ]);
  });
});
