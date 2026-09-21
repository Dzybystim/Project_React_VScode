import styled from '@emotion/styled'

export const FriendListContainer = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 300px;
margin: 0 auto;
margin-bottom: 30px;
padding: 20px;
background-color: #f3f6f9;
list-style-type: none;
gap: 5px;
`;

export const FriendListItem = styled.li`
display: flex;
width: 50%;
align-items: center;
justify-content: center;
gap: 5px;
padding: 10px;
border: 1px solid #e4e9f0;
background-color: #fff;
`;

export const StatusIndicator = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  
  background-color: ${(props) => (
    props.$isOnline ? '#4caf50' : '#f44336')}
`;
