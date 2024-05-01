import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  describe('With CourseList Empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders two rows', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(2);
    });

    it('renders the header row with default text', () => {
      const headerRow = wrapper.find(CourseListRow).at(0);
      expect(headerRow.prop('isHeader')).toBe(true);
      expect(headerRow.prop('textFirstCell')).toBe('Available courses');
      expect(headerRow.prop('textSecondCell')).toBe(null);
    });

    it('renders the second row with default text', () => {
      const secondRow = wrapper.find(CourseListRow).at(1);
      expect(secondRow.prop('isHeader')).toBe(true);
      expect(secondRow.prop('textFirstCell')).toBe('Course name');
      expect(secondRow.prop('textSecondCell')).toBe('Credit');
    });
  });

  describe('With CourseList containing elements', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct number of rows', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(courses.length + 1);
    });

    it('renders the header row with default text', () => {
      const headerRow = wrapper.find(CourseListRow).at(0);
      expect(headerRow.prop('isHeader')).toBe(true);
      expect(headerRow.prop('textFirstCell')).toBe('Available courses');
      expect(headerRow.prop('textSecondCell')).toBe(null);
    });

    it('renders the course rows with correct text', () => {
      courses.forEach((course, index) => {
        const courseRow = wrapper.find(CourseListRow).at(index + 1);
        expect(courseRow.prop('isHeader')).toBe(false);
        expect(courseRow.prop('textFirstCell')).toBe(course.name);
        expect(courseRow.prop('textSecondCell')).toBe(course.credit.toString());
      });
    });
  });
});
