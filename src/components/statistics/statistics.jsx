import PropTypes from 'prop-types'
import s from './Statistics.module.css'

function Statistics({ title = '', stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map((el) => {
          return (
            <li
              key={el.id}
              className={s.item}
              style={{
                backgroundColor: `#${Math.random().toString(16).slice(2, 8)}`,
              }}
            >
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          )
        })}
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
    }),
  ),
}

export default Statistics