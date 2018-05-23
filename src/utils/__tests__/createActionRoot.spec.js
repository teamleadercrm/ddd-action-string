import createActionRoot from '../createActionRoot';

describe(`createActionRoot`, () => {
  it(`should create the root of the action`, () => {
    expect(createActionRoot({ company: 'teamleader', type: 'domain' })).toEqual('Teamleader/Domain');
    expect(createActionRoot({ company: 'teamleader', type: 'application' })).toEqual('Teamleader/Application');
  });
});
