import styled from '@emotion/styled'

export const StatisticsContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 300px;
margin: 0 auto;
margin-bottom: 30px;
padding: 20px;
background-color: #f3f6f9;
`;

export const StatisticsTitle = styled.h2`
width: 100%;
font-size: 20px;
text-transform: uppercase;
text-align: center;
padding-top: 10px;
padding-bottom: 10px;
background-color: #fff;
`;

export const StatisticsListContainer = styled.ul`
width: 100%;
display: flex;
justify-content: center;
list-style-type: none;
padding: 0;
`;

export const StatisticsItem = styled.li`
width: 20%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #${() => Math.floor(Math.random() * 16777215).toString(16)};
`;

export const StatisticsText = styled.span`
color: #fff;
`;