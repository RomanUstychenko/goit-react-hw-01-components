import PropTypes from 'prop-types'
import clsx from "clsx";
import css from "./Statistics.module.css"

export const Statistics = ({ title, stats }) => {
    const statsItems = stats.map(({ id, label, percentage }) => (
        
        <li className={clsx(css.item)} key={id}>
          <span className={clsx(css.label)}>{label}</span>
          <span className={clsx(css.percentage)}>{percentage}</span>
        </li>
    ));
    return (
        <section className={clsx(css.statistics)}>
          {title ? <h2 className={clsx(css.title)}>{title}</h2> : ''}
     <ul className={clsx(css.statList)}>
        {statsItems}
        </ul>
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