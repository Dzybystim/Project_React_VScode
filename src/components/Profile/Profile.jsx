import {
    ProfileContainer, 
    ProfileImage, 
    ProfileDiscription, 
    ProfileName,
    ProfileStats,
    ProfileStatsListItem} from './Profile.styled.jsx';


function Profile({username, tag, location, avatar, stats}) {
    

  return (
    <ProfileContainer>
  <ProfileDiscription>
    <ProfileImage
      src={avatar}
      alt="User avatar"
    />
    <ProfileName>{username}</ProfileName>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </ProfileDiscription>

  <ProfileStats>
    <ProfileStatsListItem>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </ProfileStatsListItem>
    <ProfileStatsListItem>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </ProfileStatsListItem>
    <ProfileStatsListItem>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </ProfileStatsListItem>
  </ProfileStats>
</ProfileContainer>
  )

}

export default Profile;