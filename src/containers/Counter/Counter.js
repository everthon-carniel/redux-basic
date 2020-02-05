import _ from 'lodash';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import * as actionTypes from '../../actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const [results, setResults] = useState([]);

  const {
    onIncrementCounter,
    onDecrementCounter,
    onAddCounter,
    onSubtractCounter,
    onStoreResult,
    onDeleteResult,
    storedResults,
    ctr,
  } = props;

  useEffect(() => {
    setCounter(ctr);
  }, [ctr]);

  useEffect(() => {
    setResults(storedResults);
  }, [storedResults]);

  const handleDeleteResult = (id) => {
    const _results = _.cloneDeep(results);
    const delIdIndex = _results.findIndex((result) => result.id === id);
    _results[delIdIndex].status = false;
    onDeleteResult(_results);
  };

  const handleStoreResult = () => {
    onStoreResult({ id: `id${results.length}`, value: counter, status: true });
  };

  return (
    <div>
      <CounterOutput value={ctr} />
      <CounterControl label="Increment" clicked={onIncrementCounter} />
      <CounterControl label="Decrement" clicked={onDecrementCounter} />
      <CounterControl label="Add 5" clicked={onAddCounter} />
      <CounterControl label="Subtract 5" clicked={onSubtractCounter} />
      <hr />
      <button onClick={handleStoreResult}>Store Result</button>
      <ul>
        {storedResults.filter((obj) => obj.status).map((result) => (
          <li key={result.id} onClick={() => handleDeleteResult(result.id)}>
            {result.id} - {result.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

Counter.propTypes = {
  onIncrementCounter: T.func.isRequired,
  onDecrementCounter: T.func.isRequired,
  onAddCounter: T.func.isRequired,
  onSubtractCounter: T.func.isRequired,
  onStoreResult: T.func.isRequired,
  onDeleteResult: T.func.isRequired,
  storedResults: T.isRequired,
  ctr: T.number.isRequired,
};

const mapStateToProps = (state) => ({
  ctr: state.ctr.counter,
  storedResults: state.res.results,
});

const mapDispatchToProps = (dispatch) => {
  const {
    INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT,
  } = actionTypes;

  return {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    onAddCounter: () => dispatch({ type: ADD, value: 5 }),
    onSubtractCounter: () => dispatch({ type: SUBTRACT, value: 5 }),
    onStoreResult: (result) => dispatch({ type: STORE_RESULT, element: result }),
    onDeleteResult: (resList) => dispatch({ type: DELETE_RESULT, list: resList }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
