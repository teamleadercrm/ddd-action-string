import createRequestActionStrings from '../createRequestActionStrings';

// <Company>/Domain/<Domain>/<ACTION>_REQUEST,
// <Company>/Domain/<Domain>/<ACTION>_SUCCESS,
// <Company>/Domain/<Domain>/<ACTION>_FAIL,

describe(`createRequestActionStrings`, () => {
  it(`should create a correct request action string with the provided parameters`, () => {
    expect(
      createRequestActionStrings({
        company: 'teamleader',
        domain: 'events',
        action: 'list',
      }),
    ).toEqual([
      'Teamleader/Domains/Events/LIST_REQUEST',
      'Teamleader/Domains/Events/LIST_SUCCESS',
      'Teamleader/Domains/Events/LIST_FAIL',
    ]);
  });
});
