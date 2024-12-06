import {
    friendsAvatar,
    friendsName,
    isOnline,
    isOffline,
} from "./FriendListItem.module.css";

function FriendListItem({ friend: { avatar, name, isOnline: isTrue } }) {
    return (
        <>
            <img
                className={friendsAvatar}
                src={avatar}
                alt="Avatar"
                width="48"
            />
            <p className={friendsName}>{name}</p>
            <p className={isTrue ? isOnline : isOffline}>
                {isTrue ? "Online" : "Offline"}
            </p>
        </>
    );
}

export default FriendListItem;
