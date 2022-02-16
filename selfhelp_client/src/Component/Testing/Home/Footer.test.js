import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'
import {Footer} from '../../Home/Footer'

describe("Footer", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Footer/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });