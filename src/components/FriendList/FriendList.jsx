import {
    FriendListContainer,
    FriendListItem,
    StatusIndicator
} from './FriendList.styled.jsx'

function FriendList({friends}) {

return (
<>
<FriendListContainer>
  {friends.map(friend => (
    <FriendListItem className="item" key={friend.id}>
      <StatusIndicator $isOnline={friend.isOnline} />
      <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
      <p className="name">{friend.name}</p>
    </FriendListItem>
  ))}
</FriendListContainer>
</>
)}

export default FriendList;