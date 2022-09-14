import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => {
    console.log(friends)
    const FriendListItem = friends.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
 <span className="status">{isOnline}</span>
 <img className="avatar" src={avatar} alt="User avatar" width="48" /> 
 <p className="name">{name}</p>
</li>
    ));
    return (
        <ul className="friend-list">
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
