import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import Facilities from '../../Admin/Facilities.js';

describe("All Facility", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Facilities/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });