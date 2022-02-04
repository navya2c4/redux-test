import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addview } from '../redux/index';

const Views = ({ count, addview }) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="items">
      <p>조회수 : {count}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => addview(number)}>조회하기</button>
    </div>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
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
  addview: (number) => addview(number),
};
export default connect(mapStateToProps, mapDispatchToProps)(Views);
