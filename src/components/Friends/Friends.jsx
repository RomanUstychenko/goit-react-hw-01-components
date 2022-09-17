import clsx from "clsx";
import css from "./Friends.module.css"
import {FriendListItem} from "./FriendsItem"

export const FriendList = ({ friends }) => {
    return (
        <ul className={clsx(css.friendList)}>
              {
                friends.map(friend => (
                  <FriendListItem
                    id={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                  />
                ))
            }
        </ul>
    )
}