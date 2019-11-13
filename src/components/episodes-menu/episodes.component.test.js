import {shallow} from 'enzyme';
import React from 'react';
import EpisodesItem from './episodes.component.jsx' ;


it('expected to render component',()=>{

    expect(shallow(<EpisodesItem/>)).toMatchSnapshot();
})