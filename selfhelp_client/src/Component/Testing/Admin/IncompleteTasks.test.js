import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import IncompleteTasks from '../../Admin/IncompleteTasks.js';

describe("Incompleted Task", () => {
    it("should render my component", () => {
      const wrapper = shallow(<IncompleteTasks/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });