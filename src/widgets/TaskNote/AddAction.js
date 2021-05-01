import React, { useEffect } from 'react';
import Styled from 'styled-components';

const AddWrapper = Styled.div`
  .add {
    align-items: center;
    font-size: 15px;
    text-align: right;
    margin-top: 20px;
    cursor: pointer;
  }
  .prompt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 16px;
      color: #ed9121;
      padding: 20px 0;
    }
  }
`;

const AddAction = (props) => {
  useEffect(() => {
    console.log(props);
  });

  return (
    <AddWrapper>
      <div className="add" onClick={props.add}>
        添加
      </div>
      <div className="prompt">
        <div>
          <p>新建列表</p>
        </div>
        <div>
          <p>{props.info}</p>
        </div>
      </div>
    </AddWrapper>
  );
};

export default AddAction;
