import styled from 'styled-components';

const TodoInput = styled.input`
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #5d0cff;
    outline: none;
    width: 270px;
    background: transparent;
    color: #fff;
    margin-bottom: 25px;

    &::placeholder {
    color: #e2e2e2;
  }
`;

export default TodoInput;