import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../../state/actions';

const Basic = ({ counter, incrementCounter }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={incrementCounter}>Increment</button>
  </div>
);

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basic);
