import PropTypes from 'prop-types';
import './friendList.css';
import FriendsListItem from './FriendsListItem';

export default function FriendList(props) {
  const { friends } = props;
  return <ul className="friend__list">{friends.map(FriendsListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
