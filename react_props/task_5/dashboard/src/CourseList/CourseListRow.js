import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const content = isHeader ? (
    textSecondCell === null ? (
      <th colSpan="2">{textFirstCell}</th>
    ) : (
      <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </>
    )
  ) : (
    <>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </>
  );

  return <tr>{content}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};
