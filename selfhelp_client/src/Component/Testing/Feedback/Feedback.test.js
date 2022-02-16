import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import Feedback from '../../Feedback/Feedback.js';

describe("customer Feedback", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Feedback/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });