import styled from 'styled-components';

const TodoList = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto 5px auto;
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(255, 118, 20, 1) 0%,
      rgba(255, 84, 17, 1) 100%
    );
    border-radius: 5px;
    width: 85%;
`;

export default TodoList;