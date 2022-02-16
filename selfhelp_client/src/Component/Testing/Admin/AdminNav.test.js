import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import AdminNav from '../../Admin/AdminNav.js';

describe("Admin NavBar", () => {
    it("should render my component", () => {
      const wrapper = shallow(<AdminNav/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });