import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
 import {shallow} from 'enzyme'
import VolunteerTask from '../../Home/VolunteerTask'


describe("VolunteerTask", () => {
 
  it("should render ", () => {
    const wrapper = shallow(<VolunteerTask/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  });