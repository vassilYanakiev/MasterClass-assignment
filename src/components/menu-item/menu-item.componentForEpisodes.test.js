import {shallow} from 'enzyme';
import React from 'react';
import MenuItemForEpisodes from './menu-item.component.jsx';


it('expected to render component',()=>{

    expect(shallow(<MenuItemForEpisodes/>)).toMatchSnapshot();
})