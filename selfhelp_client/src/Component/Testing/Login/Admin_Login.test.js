import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import Admin_Login from '../../Login/Admin_Login';

describe("Admin Home", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Admin_Login/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });