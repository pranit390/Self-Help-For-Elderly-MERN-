import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'
import {Description} from '../../Home/Description'

describe("Description", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Description/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });