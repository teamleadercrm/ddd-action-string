import createActionRoot from '../createActionRoot';

describe(`createActionRoot`, () => {
  it(`should create the root of the action`, () => {
    expect(createActionRoot({ organisation: 'teamleader', type: 'domain' })).toEqual('Teamleader/Domain');
    expect(createActionRoot({ organisation: 'teamleader', type: 'application' })).toEqual('Teamleader/Application');
  });
});
