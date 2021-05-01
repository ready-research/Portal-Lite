import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CompletedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }
  span {
    margin-left: 5px;
  }
  .show-list {
    cursor: pointer;
  }
`;

const CompletedList = (props) => {
  const [collapse, setCollapse] = useState('Show');
  useEffect(() => {
    console.log(props.completedCount);
  });

  function completeShow() {
    console.log('ada');
    setCollapse('Hide');
  }

  return (
    <CompletedWrapper>
      <div className="completed-item">
        <p>
          {props.completedCount}
          <span>Completed</span>
        </p>
      </div>
      <div className="completed-item">
        <p className="show-list" onClick={completeShow}>
          {collapse}
        </p>
      </div>
    </CompletedWrapper>
  );
};

export default CompletedList;
