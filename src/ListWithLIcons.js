import React from "react";

const ListWithIcons = ({ HighLight }) => {
  return (
    <p className='text-paragraph d-flex align-items-center'>
      <span className='material-symbols-outlined me-3 golden-color'>
        {HighLight.iconName}
      </span>
      {HighLight.point}
    </p>
  );
};

export default ListWithIcons;
