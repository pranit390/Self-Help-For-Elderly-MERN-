import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import AdminHome from '../../Admin/AdminHome.js';

describe("Admin Home", () => {
    it("should render my component", () => {
      const wrapper = shallow(<AdminHome/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });