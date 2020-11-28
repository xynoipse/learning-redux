import configureStore from '../configureStore';
import { loadBugs, assignBugToUser } from './store/bugs';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log('store changed', store.getState());
});

// UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 5)), 2000);

// unsubscribe();
