import React, { useState } from 'react';
import styled from 'styled-components';
import { TransitionGroup, Transition } from 'react-transition-group';
import ListItem from './ListItem';
import AddAction from './AddAction';
import CompletedList from './CompletedList';

const NoteContent = styled.div`
  overflow: auto;
  .list-bg {
    background: #d2691e;
    p {
      color: #fff;
    }
  }
`;

const duration = 200;
let defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'translate(0,100px)'
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1, transform: 'translate(0,0)' },
  exiting: { opacity: 0 },
  exited: { opacity: 0, transform: 'translate(0,100px)' }
};

const Note = () => {
  const [counter, setCounter] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addTask = () => {
    let objItem = { nameTask: '', hideTask: true, done: false };
    taskList.push(objItem);
    setTaskList(taskList);
    setCounter(counter + 1);
  };

  // 添加文本
  const changeInputVal = (val, index) => {
    const middleArr = taskList.slice();
    middleArr[index].nameTask = val;
    return setTaskList(middleArr);
  };

  const handleCompleted = ({ type, index }) => {
    console.log(type, index, completedList, setCompletedList);
    const transfer = taskList.slice();
    if (transfer[index].nameTask) {
      if (type === 'completed') {
        transfer[index].done = !transfer[index].done;
        transfer[index].hideTask = false;
        return setTaskList(transfer);
      }
      //
    }
  };

  return (
    <NoteContent>
      <AddAction info={counter} add={addTask}></AddAction>
      <CompletedList completedCount={10}></CompletedList>
      <TransitionGroup>
        {taskList.map((todo, index) => {
          return (
            <Transition appear in={true} timeout={duration} key={index}>
              {(state) => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                    transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
                    transitionDuration: `800ms`,
                    transitionDelay: `${(index + 1) * 0.15}s`
                  }}
                >
                  <ListItem
                    key={index}
                    todo={{ todo, index }}
                    changeInput={changeInputVal}
                    completed={() => handleCompleted({ type: 'completed', index })}
                  />
                </div>
              )}
            </Transition>
          );
        })}
      </TransitionGroup>
    </NoteContent>
  );
};

export default Note;
