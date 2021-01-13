import PropTypes from 'prop-types';
import defaultImg from '../FriendList/default-img.jpg';
import './Profile.css';

export default function Profile(props) {
  const { avatar = defaultImg, name, tag, location, stats } = props;
  return (
    <div className="Profile__container">
      <div>
        <img className="Profile__img" src={avatar} alt={name} />
        <p className="Profile__name">{name}</p>
        <p className="Profile__data">{tag}</p>
        <p className="Profile__data">{location}</p>
      </div>

      <ul className="Profile__list">
        <li className="Profile__item">
          <span className="Profile__item-title">Followers</span>
          <span className="Profile__item-value">{stats.followers}</span>
        </li>
        <li className="Profile__item">
          <span className="Profile__item-title">Views</span>
          <span className="Profile__item-value">{stats.views}</span>
        </li>
        <li className="Profile__item">
          <span className="Profile__item-title">Likes</span>
          <span className="Profile__item-value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.string,
};
