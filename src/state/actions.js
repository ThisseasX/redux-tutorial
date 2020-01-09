import { createAction } from 'redux-actions';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

const incrementCounter = createAction(INCREMENT_COUNTER);

export { incrementCounter };
