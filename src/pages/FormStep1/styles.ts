import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid rgb(102, 66, 11);
    border-radius: 1.87rem;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    p {
        font-size: 0.81rem;
        color: rgb(102, 66, 11);
    }
    h1 {
        font-size: 1.62rem;
        /* color: rgb(102, 66, 11); */
        color: orange;
    }
    hr {
        height: 1px;
        background-color: rgb(102, 66, 11);
        border: 0;
        margin: 30px 0;
    }
    label {
        font-size: 0.81rem;

        span {
            color: orange;
        }

        input {
            display: block;
            margin-top: 0.43rem;
            width: 100%;
            padding: 1.25rem 0.62rem;
            border: 2px solid #CCC;
            border-radius: 0.62rem;
            color: rgb(102, 66, 11);
            font-size: 0.93rem;
            background-color: #EEE;

            &:focus {
                border-color: rgb(102, 66, 11);
            }
        }        
    }
    button {
            background-color: #CCC;
            color: rgb(102, 66, 11);
            font-weight: bold;
            padding: 1.25rem 2.5rem;
            border: none;
            border-radius: 1.87rem;
            margin-top: 1.87rem;
            cursor: pointer;
            transition: .4s;

            &:hover {
                background-color: rgb(102, 66, 11);
                color: #EEE;
            }
        }
`;