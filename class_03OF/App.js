import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ConfigureStore from './src/components/Store';
import CourseList from './src/views/CourseList';
import SelectedCourseList from './src/views/SelectedCourseList';

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <CourseList />
        <SelectedCourseList />
      </View>
    </Provider>
  );
};

export default App;
