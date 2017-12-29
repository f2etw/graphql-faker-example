import React from 'react';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import { withData } from 'graphql-tower-apollo';

class Component extends React.Component {
  componentWillMount() {
    this.props.data.subscribeToMore({
      document: gql`subscription { onNewMessage }`,
      updateQuery: (prev, { subscriptionData }) => {
        console.log(subscriptionData.data);
      }
    });
  }

  render () {
    const { data } = this.props;

    return (
      <div>
        {data.me && data.me.email}
      </div>
    );
  }
};

export default compose(
  withData({
    httpUri: 'http://localhost:9002/graphql',
    wsUri: 'ws://localhost:9002/graphql',
  }),
  graphql(gql`query { me { id name email } members { id name email } }`),
)(Component);
