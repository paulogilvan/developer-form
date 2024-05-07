import styled from 'styled-components';

export const Container = styled.div<{selected: boolean;}>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#196459': 'rgb(102, 66, 11)'};
    border-radius: 0.62rem;
    padding: 1.25rem;
    margin-bottom: 0.93rem;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid #CCC;
    }
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgb(102, 66, 11);
    font-size: 1.56rem;
`;

export const Info = styled.div`
    margin-left: 1.25rem;
    flex: 1;
`;

export const Title = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.43rem;
`;

export const Description = styled.div`
    font-size: 0.87rem;
    color: #8888d4;
`;