import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import Volnavbar from '../../navbar/Volnavbar';

describe("register customer", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Volnavbar/>);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
     

    
    
  });