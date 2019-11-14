import React from "react";
import renderer from 'react-test-renderer';
import { MockedProvider } from "@apollo/react-testing";
import Enzyme, { mount,shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharactersPageComponent from './characters.page.component.jsx'
import ALL_CHAR_QUERY from '../../client/queries-gql.js'
import LoaderComponent from '../../components/loader.component.jsx';

Enzyme.configure({ adapter: new Adapter() });

const mocks = [
    {
      request: {
        query: ALL_CHAR_QUERY,
        variables: {
            first: 1,
            after:"",
        },
      },
      result: {
        data: {
            edges: [
                { node: {id: 1,name:'OBI-WAN',image:'imglink'}, pageInfo: {hasNextPage: true, endCursor:'aa'},totalCount:1},
               
              ]
        },
      },
    },
  ];
  

  it('renders without error', () => {
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CharactersPageComponent first={1} after='' />
      </MockedProvider>,
    );
  });

it('load button not rendered on empty fetch',()=>{

    const wrapper=shallow(
      
        <CharactersPageComponent mocks={mocks} first={1} after='' />
      
    );  
    wrapper.find('[id="buttonLoadCharacters"]').simulate('click');
});

  


