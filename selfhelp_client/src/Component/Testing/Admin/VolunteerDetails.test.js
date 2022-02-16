import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import VolunteerDetails from '../../Admin/VolunteerDetails.js';

describe("Volunteer Details", () => {
    it("should render my component", () => {
      const wrapper = shallow(<VolunteerDetails/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });