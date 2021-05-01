import React, { useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  overflow: auto;
  .check-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border-radius: 50%;
    border: 1px solid #ffad86;
    cursor: pointer;
  }
  .check-box_choose {
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
  .check-box_choose--color {
    background: #00bb00;
  }
  p {
    font-size: 16px;
  }
  .text-color {
    text-decoration: line-through;
  }
  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid #f4f4f4;
    font-size: 16px;
    background: #fff;
    padding-left: 10px;
    &::placeholder {
      font-size: 12px !important;
    }
  }
`;

const ListItem = (props) => {
  const { index } = props.todo;
  const { nameTask, hideTask, done } = props.todo.todo;

  useEffect(() => {
    console.log('props', props);
  });

  const handleInputChange = (e) => {
    const { value } = e.target;
    props.changeInput(value, index);
  };

  return (
    <div>
      {hideTask ? (
        <Content>
          <div className="check-box" onClick={props.completed}>
            <div className={`check-box_choose ${done ? 'check-box_choose--color' : ''}`}>
              {done}
            </div>
          </div>
          <input
            placeholder="请输入文字"
            value={nameTask}
            onChange={handleInputChange}
            className={`${done ? 'text-color' : ''}`}
            readOnly={done}
          />
        </Content>
      ) : (
        ''
      )}
    </div>
  );
};

export default ListItem;
