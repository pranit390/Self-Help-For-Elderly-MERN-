import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import OngoingTasks from '../../Admin/OngoingTasks';

describe("All ongoing task", () => {
    it("should render my component", () => {
      const wrapper = shallow(<OngoingTasks/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });