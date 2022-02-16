import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import ResetPasswordScreen from '../../PasswordReset/ResetPassword.js';

describe("Reset password ", () => {
    it("should render my component", () => {
      const wrapper = shallow(<ResetPasswordScreen/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });