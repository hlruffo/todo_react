import styled from 'styled-components'; 

export const StyledTask = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;  
    border-bottom: 1px solid #ccc;
    color: #666666;    

    button{
        background-color: transparent;
        color: #ff5555;
        border: none;
        padding: 10px;
        font-size: 25px;
        cursor: pointer;

        &:hover{
            color: #ff0000;
    }
`