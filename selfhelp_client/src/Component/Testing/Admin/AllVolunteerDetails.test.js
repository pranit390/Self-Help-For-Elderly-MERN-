import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import AllVolunteersDetails from '../../Admin/AllVolunteersDetails.js';

describe("All volunteer details", () => {
    it("should render my component", () => {
      const wrapper = shallow(<AllVolunteersDetails/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });