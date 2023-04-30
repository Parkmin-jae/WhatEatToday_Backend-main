import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createComment(reviewId: Int!, payload: String!): MutationResponse!
  }
`;
