import { Profile } from "./Profile/Profile";
import  user  from "./Json/user.json"
import { Statistics } from "./Statistics/Statistics"
import data from "./Json/data.json"

// console.log (user)
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
    </div>
  );
};