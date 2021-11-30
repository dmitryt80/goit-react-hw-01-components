import PropTypes from 'prop-types'
import s from './FriendList.module.css'
import FriendItem from '../FriendItem/FriendItem'

function FriendList({ friendlist = [] }) {
  return (
    <ul className={s.list}>
      {friendlist.map((el) => (
        <FriendItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          key={el.id}
        />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friendlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
}

export default FriendList