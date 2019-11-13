import {shallow} from 'enzyme';
import React from 'react';
import EmptyOnGraphqlFetch from './graphql-data-empty.component.jsx' ;


it('expected to render component',()=>{

    expect(shallow(<EmptyOnGraphqlFetch/>)).toMatchSnapshot();
})