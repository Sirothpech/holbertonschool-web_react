import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
// import { bindActionCreators } from 'redux';

const selectCourse = (index) => {
  return { type: SELECT_COURSE, index };
};

const unSelectCourse = (index) => {
  return { type: UNSELECT_COURSE, index };
};

export { selectCourse, unSelectCourse };

// const bounceSelectCourse = (dispatch) = bindActionCreators(selectCourse, dispatch);
// const bounceUnSelectCourse = (dispatch) = bindActionCreators(unSelectCourse, dispatch);

// export { bounceSelectCourse, bounceUnSelectCourse};