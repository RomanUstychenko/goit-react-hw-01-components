import PropTypes from 'prop-types'


export const Statistics = ({ title, stats }) => {
    const statsItems = stats.map(({ id, label, percentage }) => (
        <ul className="stat-list">
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    ));
    return (
        <section className="statistics">
     <h2 className="title">Upload stats</h2>
        {statsItems}
   </section> 
    )
    }

    Statistics.propTypes = {
      title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })).isRequired,
    }