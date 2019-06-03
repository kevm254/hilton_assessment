import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from'enzyme-adapter-react-16';

import RoomDisplay from './RoomDisplay';

configure({ adapter: new Adapter() });

describe('RoomDisplay component', () => {
   it('Component should render', () => {
       const wrapper = shallow(<RoomDisplay />);
       expect(wrapper).toBeTruthy();
   });

   it('Component should not initially be disabled', () => {
      const wrapper = shallow(<RoomDisplay />);
      const select = wrapper.find('select').first();
      expect(select.props()['disabled'].toBe('true'))
   });

   it('When disabled, the background of the component should be gray', () => {
       const wrapper = shallow(<RoomDisplay />);
       console.log(wrapper.debug());
       const select = wrapper.find('select');
       console.debug(select.debug());
   })
});