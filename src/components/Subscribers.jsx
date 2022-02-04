import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux/index';

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <p>구독자 수 : {count}</p>
      <button onClick={() => addSubscriber()}>구독하기</button>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
    count_two: subscribers.count_two,
  };
};

// const mapStateToProps = (state) => {
//   return {
//     count: state.subscribers.count,
//     count_two: state.subscribers.count_two,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

const mapDispatchToProps = {
  addSubscriber,
};
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
