import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils, css } from 'aphrodite';
import CourseListRow, { styles }  from './CourseListRow';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow', () => {

  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    const th = wrapper.find('th');
    expect(th.length).toBe(1);
    expect(th.props().colSpan).toBe("2");
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Test2" />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test2" />);
    expect(wrapper.find('td').length).toBe(2);
  });

  it('have a correct style to header row', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    expect(wrapper.find(`.${css(styles.colSpan2)}`).length).toBe(1);
  });

  it('have a correct style to regular row', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" />);
    expect(wrapper.find(`.${css(styles.rowStyle)}`).length).toBe(1);
  });
});
