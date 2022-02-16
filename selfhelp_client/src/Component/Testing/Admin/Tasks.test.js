import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import Tasks from '../../Admin/Tasks';

describe("All Tasks", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Tasks/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });