import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import UnavailableVolunteersDetails from '../../Admin/UnavailableVolunteersDetails';

describe("All unavailable volunteer details", () => {
    it("should render my component", () => {
      const wrapper = shallow(<UnavailableVolunteersDetails/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });