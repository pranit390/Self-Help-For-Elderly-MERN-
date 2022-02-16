import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow,mount} from 'enzyme'

import RegisterVolunteer from '../../SignUp/RegisterVolunteer';

describe("register Volunteer", () => {
    it("should render my component", () => {
      const wrapper = shallow(<RegisterVolunteer/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
     

    
    
  });