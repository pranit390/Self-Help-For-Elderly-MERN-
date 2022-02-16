import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import CompletedTasks from '../../Admin/CompletedTasks';

describe("Completed Task", () => {
    it("should render my component", () => {
      const wrapper = shallow(<CompletedTasks/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });