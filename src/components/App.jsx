import userData from "./profile/userData.json";
import friends from "./friends/friends.json";
import transactions from "./transactions/transactions.json";

import Profile from "./profile/Profile";
import FriendsList from "./friends/FriendList/FriendsList";
import TransactionHistory from "./transactions/TransactionHistory";

function App() {
    return (
        <>
            <Profile
                username={userData.username}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
            <FriendsList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
}

export default App;
