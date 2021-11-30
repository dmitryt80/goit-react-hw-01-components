import PropTypes from 'prop-types'
import s from './FriendItem.module.css'

function FriendItem({ avatar, name, isOnline = false }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusOn : s.statusOff}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="100" />
      <p className={s.text}>{name}</p>
    </li>
  )
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
}

export default FriendItem