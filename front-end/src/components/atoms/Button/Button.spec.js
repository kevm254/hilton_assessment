import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Button from './Button';
const fs = require('fs');


Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Button component', () => {
   test('it should exist', () => {
      const button = shallow(<Button />);
      console.log(button.debug());
      expect(button).toBeTruthy();
   });
});