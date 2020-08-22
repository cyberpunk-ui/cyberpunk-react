import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../index';

describe('button test', () => {
  it('button is div', () => {
    const json = renderer.create(<Button/>).toJSON();
    expect(json).toMatchSnapshot();
  });
});
