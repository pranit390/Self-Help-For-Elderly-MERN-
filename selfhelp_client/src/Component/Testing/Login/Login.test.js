import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import Login from '../../Login/Login.js';

describe("customer Login", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });