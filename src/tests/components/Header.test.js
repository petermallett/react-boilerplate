import React from 'react';
import { shallow } from 'enzyme';
import { UCHeader } from '../../components/Header';

let startLogout;
let wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<UCHeader startLogout={startLogout} />);
});

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
