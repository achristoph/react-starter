import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NavBar from '../app/navbar.jsx';

describe('NavBar', () => {
  it('should...', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<NavBar />);
    const output = renderer.getRenderOutput();
    expect(output.props['className']).toEqual('navbar');
  });
});
