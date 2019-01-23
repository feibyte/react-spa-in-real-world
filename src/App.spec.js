// @flow

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render content correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('React SPA');
    expect(wrapper.find('.app').exists()).toBe(true);
  });
});
