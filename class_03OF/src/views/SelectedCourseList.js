import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { style_01 } from '../styles/style_01';
import { removeCourseAction } from '../components/actions/TaskAction';

const SelectedCourseList = ({ selectedCourses }) => {
  const dispatch = useDispatch();
  
  return (
    <View style={{ ...style_01.body, backgroundColor: 'lightgreen' }}>
      {selectedCourses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={style_01.taskText}
          onPress={() => dispatch(removeCourseAction(course))}>
          <Text style={style_01.text}>{course}</Text>

          

        </TouchableOpacity>
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  selectedCourses: state.Tasks.selectedCourses,
});

export default connect(mapStateToProps)(SelectedCourseList);
