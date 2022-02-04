import React from 'react';
import { connect } from 'react-redux';

const Display = (props) => {
  return (
    <div>
      <p>구독자 수 : {props.count}</p>
      <p>조회수 : {props.sCount}</p>
    </div>
  );
};

const mapStateToProps = ({ subscribers, views }) => {
  return {
    count: subscribers.count,
    sCount: views.count,
  };
};

export default connect(mapStateToProps)(Display);
