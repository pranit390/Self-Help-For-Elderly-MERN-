import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import Volunteer_Login from '../../Login/Volunteer_Login.js';

describe("Volunteer login", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Volunteer_Login/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });