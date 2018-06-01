import React from 'react';
import { shallow } from 'enzyme';
import { UCLoginPage } from '../../components/LoginPage';

let startLogin;
let wrapper;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<UCLoginPage startLogin={startLogin} />);
});

test('should correctly render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
