import PropTypes from 'prop-types'
import clsx from "clsx";
import css from "./Friends.module.css"

const Green =  <span className={clsx(css.statusGreen)}></span>;

export const FriendList = ({ friends }) => {
    const FriendListItem = friends.map(({ avatar, name, isOnline, id }) => (
        <li className={clsx(css.item)} key={id}>
          {isOnline ? <span className={clsx(css.status)}>{Green}</span> : <span className={clsx(css.status + ' ' + css.statusOffline)}>Offline</span> }
{/* <span className={clsx(css.statusGreen)}></span> */}
 <img className={clsx(css.avatar)} src={avatar} alt="User avatar" width="48" /> 
 <p className={clsx(css.name)}>{name}</p>
</li>
    ));
    return (
        <ul className={clsx(css.friendList)}>
            {FriendListItem}
        </ul>
    )
    }
    FriendList.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
          })
        ).isRequired,
      };
