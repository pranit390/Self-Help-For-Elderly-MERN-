import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
 import {shallow} from 'enzyme'
import CustomerDashBoard_Task from '../../Home/CustomerDashBoard_Task'


describe("CustomerDashboard_Task", () => {
 
  it("should render ", () => {
    const wrapper = shallow(<CustomerDashBoard_Task/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  });


  