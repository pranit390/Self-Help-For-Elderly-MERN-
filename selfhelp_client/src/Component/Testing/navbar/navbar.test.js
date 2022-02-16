import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import NavigationBar from '../../navbar/navbar';

describe("Navigation", () => {
    it("should render my component", () => {
      const wrapper = shallow(<NavigationBar/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });

});