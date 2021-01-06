import PropTypes from 'prop-types';
import defaultImg from './default-img.jpg';
import './friendList.css';

export default function FriendsListItem(props) {
  const { avatar = defaultImg, name, isOnline, id } = props;
  return (
    <li className="friend_item" key={id}>
      <span className={isOnline ? 'status_true' : 'status_false'}></span>
      <img className="friend_ava" src={avatar} alt={name}></img>
      <p className="friend_name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
