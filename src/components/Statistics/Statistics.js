import PropTypes from 'prop-types';
import './Statistic.css';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className="stat__section">
      {title && <h2 className="stat__title">{title}</h2>}
      <ul className="stat__list">
        {stats.map(stat => (
          <li className="stat__item" key={stat.id}>
            <span className="stat__item-label">{stat.label}</span>
            <span className="stat__item-persent">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
