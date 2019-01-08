import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

it('renders without crashing', function() {
  shallow(<App />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<App />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
