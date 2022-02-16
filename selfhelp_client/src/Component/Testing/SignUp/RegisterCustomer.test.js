import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow,mount} from 'enzyme'

import RegisterCustomer from '../../SignUp/RegisterCustomer';

describe("register customer", () => {
    it("should render my component", () => {
      const wrapper = shallow(<RegisterCustomer/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
     

    // it("should render", () => {
    //     const wrapper = shallow(<RegisterCustomer/>);
    //   const button=wrapper.find(input).at(15);
    //   const form=wrapper.find(form);
    //   button.simulate('Click');
    //   expect(form.prop('onSubmit')).toBeTruthy();
    //   });
    
  });