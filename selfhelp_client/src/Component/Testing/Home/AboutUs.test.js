
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import {Aboutus} from '../../Home/AboutUs';

describe("AboutUs", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Aboutus/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });


