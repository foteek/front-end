// import React, { Component } from "react";
// import { gql } from "apollo-boost";
// import { graphql } from "react-apollo";

// const getUsersQuery = gql`
//   {
//     users {
//       firstname
//       lastname
//     }
//   }
// `;
// class User extends Component {
//   displayUsers() {
//     var data = this.props.data;
//     if (data.loading) {
//       return <div>Loading Users...</div>;
//     } else {
//       return data.users.map(a => {
//         return <li key={Math.random()}>{a.firstname}</li>;
//       });
//     }
//   }

//   render() {
//     return <div>{this.displayUsers()}</div>;
//   }
// }
// export default graphql(getUsersQuery)(User);
