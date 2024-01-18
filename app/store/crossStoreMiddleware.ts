// import {incrementChild} from '../reducers/childSlice'; // Import actions from the child store
// import {incrementParent} from '../reducers/parentSlice';

// const crossStoreMiddleware = store => next => action => {
//   // Intercept actions and dispatch corresponding actions to the other store
//   console.log('action.type', action.type);

//   switch (action.type) {
//     case 'parent/incremenChild':
//       // Dispatch the corresponding action to the child store
//       store.dispatch(incrementParent());
//       break;

//     default:
//       break;
//   }

//   return next(action);
// };

// export default crossStoreMiddleware;
