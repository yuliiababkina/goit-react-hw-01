import FriendListItem from "../FriendListItem/FriendListItem";
import { friendsList, friendsItem } from "./FriendsList.module.css";

function FriendsList({ friends }) {
    return (
        <ul className={friendsList}>
            {friends.map((friend) => (
                <li className={friendsItem} key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            ))}
        </ul>
    );
}

export default FriendsList;
