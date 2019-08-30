import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const GET_POSTS = gql`
  {
    User {
      firstname
      lastname
    }
  }
`;

const mockData = [
  { firstname: "paul", lastname: "boon" },
  { firstname: "roe", lastname: "aberin" }
];

class AccountsList extends Component {
  render() {
    return (
      <div>
        <Query query={GET_POSTS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;

            const linksToRender = data.users;
            //Change mockData to linksToRender after deployed BE
            return (
              <div>
                {mockData.map(user => {
                  return <div>{user.firstname}</div>;
                })}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default AccountsList;

//   /*
// const withPosts = Component => props => {
//   return (
//     <Query query={GET_POSTS}>
//       {({ loading, error, data }) => {
//         return (
//           <div>
//             <Component
//               postsLoading={loading}
//               posts={data && data.User}
//               {...props}
//             />
//             <h1>{console.log(data)}</h1>
//           </div>
//         );
//       }}
//     </Query>
//   );
// };

// export default withPosts; */
// }
