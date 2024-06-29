import styled from 'styled-components';

export const StyledList = styled.div `
    background-color: #ffffff;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;

    margin: 40px auto;

    form {
        display: flex;
        justify-content: space-between;
        input{
            flex-grow: 1;
            height: 54px;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            padding:10px;
            }
        }
        
        button{
            width:105px;
            height: 54px;
            border-radius: 5px;
            background-color: #fefe;
            border: none;
            margin-left: 10px;
            cursor: pointer;

            &:hover{
                background-color: #f0f0f0;
            }

            &:disabled{
                background-color: #141228;
                color: #ffffff;
            }
        }
`
