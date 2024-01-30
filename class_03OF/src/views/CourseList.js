import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { style_01 } from '../styles/style_01';
import { addCourseAction } from '../components/actions/TaskAction';

const CourseList = ({ availableCourses }) => {
  const dispatch = useDispatch();
  
  return (
    <View style={{ ...style_01.body, backgroundColor: 'lightblue' }}>
   
            <Text style={style_01.title}>Estudiante</Text>
						<Text style={style_01.title}>Seleccione los cursos a matricular:</Text>
				
      {availableCourses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={style_01.taskText}
          onPress={() => dispatch(addCourseAction(course))}>
          <Text style={style_01.text}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  availableCourses: state.Tasks.availableCourses,
});

export default connect(mapStateToProps)(CourseList);
