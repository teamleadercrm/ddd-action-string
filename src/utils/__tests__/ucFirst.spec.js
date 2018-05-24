import ucFirst from '../ucFirst';

describe(`ucFirst`, () => {
  it(`should uppercase first letter`, () => {
    expect(ucFirst('hello')).toEqual('Hello');
    expect(ucFirst('Hello')).toEqual('Hello');
  });
});
