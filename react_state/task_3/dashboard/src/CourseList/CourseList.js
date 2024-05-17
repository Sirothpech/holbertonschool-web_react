import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    margin: '2rem auto',
    borderCollapse: 'collapse',
    border: 'solid 1px #c0c0c0',
  }
});

function CourseList({listCourses}) {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
          ) : (
            listCourses.map(course => (
              <CourseListRow 
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
              />
            ))
          )
        }
      </tbody>
    </table>
  ); 
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: []
}

export default CourseList;