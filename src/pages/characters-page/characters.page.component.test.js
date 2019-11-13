import React from "react";
import renderer from 'react-test-renderer';
import { MockedProvider } from "@apollo/react-testing";
import Enzyme, { mount } from "enzyme";
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
  const wait = require('waait');
  it('should render loading state initially', async () => {
    
    const component = renderer.create(
      <MockedProvider mocks={[]}>
        <CharactersPageComponent />
      </MockedProvider>,
    );
  
    await wait(0); // wait for response

    const h1 = component.root.findByType('h1');
    expect(h1.children).toContain('OBI-WAN');
  });