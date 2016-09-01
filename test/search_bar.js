import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SearchBar from '../app/components/search_bar.jsx';

describe('NavBar', () => {
  it('should...', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<SearchBar />);
    const output = renderer.getRenderOutput();
  });
});
