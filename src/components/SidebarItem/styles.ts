import styled from 'styled-components';

export const Container = styled.div`
    margin: 1.87rem 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 1.25rem;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 0.31rem;
    font-size: 0.93rem;
    color: rgb(102, 66, 11);
`;

export const Description = styled.div`
    text-align: right;
    font-size: 0.81rem;
    color: rgb(102, 66, 11);
`;

export const IconArea = styled.div<{active: boolean;}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? 'orange' : 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 1.87rem;
    height: 1.87rem;
`;

export const Point = styled.div<{active: boolean;}>`
    width: 16px;
    height: 16px;
    border: 2px solid rgb(102, 66, 11);
    border-radius: 50%;
    margin-left: 1.87rem;
    margin-right: -0.50rem;
    background-color: ${props => props.active ? 'orange' : 'rgb(102, 66, 11)'};
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;