import { ADD_COURSE, REMOVE_COURSE } from '../actions/TaskActionTypes';

const INITIAL_STATE = {
  availableCourses: ['DESARROLLO DE APLICACIONES PARA DISPOSITIVOS MÓVILES II ', 
  'CALCULO Y ALGEBRA LINEAL II', 'MÉTODOS DE INVESTIGACIÓN',
   'PRINCIPIOS DE SEGURIDAD DE TI', 'DISENO DE REDES'],
  selectedCourses: [],
};

const TaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        availableCourses: state.availableCourses.filter(course => course !== action.payload),
        selectedCourses: [...state.selectedCourses, action.payload],
      };
    case REMOVE_COURSE:
      return {
        ...state,
        availableCourses: [...state.availableCourses, action.payload],
        selectedCourses: state.selectedCourses.filter(course => course !== action.payload),
      };
    default:
      return state;
  }
};

export default TaskReducer;
