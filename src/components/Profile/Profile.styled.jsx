import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
width: 300px;
margin: 30px auto;
padding: 20px;
background-color: #f3f6f9;
`;

export const ProfileDiscription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
`;

export const ProfileImage = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #fff;
`;

export const ProfileName = styled.p`
font-size: 20px;
font-weight: bold;
color: #000000;
`;

export const ProfileStats = styled.ul`
margin-top: 20px;
display: flex;
justify-content: center;
gap: 10px;
list-style-type: none;
padding: 0;
`;

export const ProfileStatsListItem = styled.li`
width: 33.333%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
`;
