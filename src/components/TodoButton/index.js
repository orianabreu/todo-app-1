import styled from 'styled-components';

const TodoButton = styled.button`
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
        90deg,
        rgba(93, 12, 255, 1) 0%,
        rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
`;

export default TodoButton;