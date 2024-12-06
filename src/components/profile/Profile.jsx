import {
    container,
    userProfile,
    userAvatar,
    userName,
    userTag,
    userLocation,
    statsList,
    statsItem,
    statsValue,
} from "./Profile.module.css";

function Profile({
    username,
    tag,
    location,
    avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats,
}) {
    return (
        <div className={container}>
            <div className={userProfile}>
                <img
                    className={userAvatar}
                    src={avatar}
                    alt={userName + " " + "avatar"}
                />
                <p className={userName}>{username}</p>
                <p className={userTag}>&#64;{tag}</p>
                <p className={userLocation}>{location}</p>
            </div>

            <ul className={statsList}>
                <li className={statsItem}>
                    <span>Followers</span>
                    <span className={statsValue}>{stats.followers}</span>
                </li>
                <li className={statsItem}>
                    <span>Views</span>
                    <span className={statsValue}>{stats.views}</span>
                </li>
                <li className={statsItem}>
                    <span>Likes</span>
                    <span className={statsValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
