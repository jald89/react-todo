import styled from "styled-components"

export const Item = styled.li`
    background: #f2f2f2;
    padding: 8px 10px;
    margin-bottom: 5px;
`

export const WrapperTodoDetails = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    b {
        display: block;
        margin-bottom: 3px;
    }
    small {
        color: #222;
        display: block;
    }
`
