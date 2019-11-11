import {shallow} from 'enzyme';
import React from 'react';
import MenuItem from './menu-item.component.jsx';


it('expected to render component',()=>{

    expect(shallow(<MenuItem/>)).toMatchSnapshot();
})