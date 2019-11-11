
import gql from 'graphql-tag.macro';





export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

export default function PrivateRoute({ children }) {





    return (
              children
            
          )
  }