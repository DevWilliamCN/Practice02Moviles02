import {combineReducers, createStore} from 'redux';
		import TaskReducer from './reducers/TaskReducer';

		const ConfigureStore = () => {
			const reducers = combineReducers({Tasks: TaskReducer});
			const store = createStore(reducers);
			return store;
		};

        export default ConfigureStore;