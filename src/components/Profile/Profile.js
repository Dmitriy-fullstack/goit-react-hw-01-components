import PropTypes from 'prop-types';
import './Profile.css';
export default function Profile(props) {
  const { avatar, name, tag, location, followers, views, likes } = props;
  return (
    <div className="Profile__container">
      <div className="Profile__wrap">
        <img className="Profile__img" src={avatar} alt={name} />
      </div>
      <div>
        <p className="Profile__name">{name}</p>
        <p className="Profile__data">{tag}</p>
        <p className="Profile__data">{location}</p>
      </div>

      <ul className="Profile__list">
        <li className="Profile__item">
          <span className="Profile__item-title">Followers</span>
          <span className="Profile__item-value">{followers}</span>
        </li>
        <li className="Profile__item">
          <span className="Profile__item-title">Views</span>
          <span className="Profile__item-value">{views}</span>
        </li>
        <li className="Profile__item">
          <span className="Profile__item-title">Likes</span>
          <span className="Profile__item-value">{likes}</span>
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
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
