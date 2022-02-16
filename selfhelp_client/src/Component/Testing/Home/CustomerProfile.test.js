import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
 import {shallow} from 'enzyme'
import {CustomerProfile} from '../../Home/CustomerProfile'


describe("CustomerProfile", () => {
 
  it("should render ", () => {
    const wrapper = shallow(<CustomerProfile/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  });