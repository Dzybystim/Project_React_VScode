import './App.css'
import Profile from '../Profile/Profile.jsx'
import Statistics from '../Statistics/Statistics.jsx'
import FriendList from '../FriendList/FriendList.jsx'
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx'

import baza from '../../baza/user.json'
import data from '../../baza/data.json'
import friends from '../../baza/friends.json'
import transactions from '../../baza/transactions.json'

function App() {

  return (
    <>
    <Profile 
    username={baza.username} 
    tag={baza.tag} 
    location={baza.location} 
    avatar={baza.avatar} 
    stats={baza.stats} />

    <Statistics 
    title="Tarsus" 
    stats={data} />

    <FriendList 
    friends={friends}/>

    <TransactionHistory 
    transactions={transactions}/>
    </>
  )
}

export default App
