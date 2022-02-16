import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';
import {CustomerDashboard} from '../../Home/Cusdashboard';




describe("CustomerDashboard", () => {
    it("should render my component", () => {
      const wrapper = shallow(<CustomerDashboard/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });

   
  });