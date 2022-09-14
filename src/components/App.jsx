import { Profile } from "./Profile/Profile";
import  user  from "./Json/user.json"
import { Statistics } from "./Statistics/Statistics"
import data from "./Json/data.json"
// import { FriendList } from "./Friends/Friends"
// import friends from "./Json/friends.json"
// import {TransactionHistory} from "./Transactions/TransactionHistory"
// import transactions from "./Json/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats" 
        stats={data} 
      />
      {/* <FriendList 
        friends={friends} />
        <TransactionHistory 
        items={transactions} /> */}
    </div>
  );
};