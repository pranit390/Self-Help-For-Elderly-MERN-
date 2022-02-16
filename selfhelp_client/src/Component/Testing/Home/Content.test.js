import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';
import Content from '../../Home/Content';




describe("Content", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Content/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });

   
  });