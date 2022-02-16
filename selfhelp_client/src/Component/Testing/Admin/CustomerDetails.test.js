import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import CustomerDetails from '../../Admin/CustomerDetails';

describe("All customer Details", () => {
    it("should render my component", () => {
      const wrapper = shallow(<CustomerDetails/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });