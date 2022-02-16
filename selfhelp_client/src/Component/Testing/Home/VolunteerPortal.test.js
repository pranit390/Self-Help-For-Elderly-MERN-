import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
 import {shallow} from 'enzyme'
import VolunteerPortal  from '../../Home/VolunteerPortal'


describe("volunteerPortal", () => {
 
  it("should render ", () => {
    const wrapper = shallow(<VolunteerPortal/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  });