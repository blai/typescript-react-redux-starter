const createLogger = require('redux-logger');
import immutableToJS from '../utils/immutableToJS';


const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    return immutableToJS(state);
  },
  predicate: (getState, { type }) => {
    return type !== 'redux-form/BLUR' &&
           type !== 'redux-form/CHANGE' &&
           type !== 'redux-form/FOCUS' &&
           type !== 'redux-form/TOUCH';
  },
});


export default logger;
