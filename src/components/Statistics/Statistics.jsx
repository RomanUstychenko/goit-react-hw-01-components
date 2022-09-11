// import PropTypes from 'prop-types'


export const Statistics = ({ title, stats }) => {
    const statsItems = stats.map(({ id, label, percentage }) => (
        <ul className="stat-list">
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        {/* <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li> */}
      </ul>
    ));
    return (
        <section className="statistics">
     <h2 className="title">Upload stats</h2>
        {statsItems}
   </section> 
    )
    }
// export const Statistics = (data) => {
//     const { title, stats } = data;
//     return <section class="statistics">
//     <h2 class="title">Upload stats</h2>

//   </section> 

// }