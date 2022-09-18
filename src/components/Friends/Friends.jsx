import PropTypes from 'prop-types'
import clsx from "clsx";
import css from "./Friends.module.css"
import {FriendListItem} from "./FriendsItem"

export const FriendList = ({ friends }) => {

    return (
        <ul className={clsx(css.friendList)}>
              {
                friends.map(friend => (
                  <li className={clsx(css.item)} key={friend.id}>
                  <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                  />
                  </li>
                ))
            }
        </ul>
    )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
      }),
)}
