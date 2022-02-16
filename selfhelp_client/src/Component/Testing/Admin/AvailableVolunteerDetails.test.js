import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import AvailableVolunteersDetails from '../../Admin/AvailableVolunteersDetails';

describe("Available volunteer details", () => {
    it("should render my component", () => {
      const wrapper = shallow(<AvailableVolunteersDetails/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });