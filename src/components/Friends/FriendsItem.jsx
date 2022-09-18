import PropTypes from 'prop-types'
import clsx from "clsx";
import css from "./Friends.module.css"

const Green =  <span className={clsx(css.statusGreen)}></span>;
const Red =  <span className={clsx(css.statusRed)}></span>;

    export const FriendListItem = (({ avatar, name, isOnline }) => 
    {return (
        <>
          {isOnline ? <span className={clsx(css.status)}>{Green}</span> : <span className={clsx(css.status)}>{Red}</span> }
 <img className={clsx(css.avatar)} src={avatar} alt="User avatar"/> 
 <p className={clsx(css.name)}>{name}</p>
</>
    )});

    FriendListItem.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          })
        ).isRequired,
      };