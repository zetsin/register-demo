import React from 'react';
import { shallow } from 'enzyme';
import Comp from './index';

it('renders without crashing', () => {
  shallow(<Comp />);
});
