import '../style/desktop.scss'

const PlayersSelect = ({player}) => {
  const {value, selected} = player
  const defaultClass = `select-player`
  const selectedValue = selected ? 'active' : ''
  return (
    <div
      className={`${defaultClass} ${defaultClass}__${value} ${defaultClass}--${selectedValue}`}
    ></div>
  )
}

export default PlayersSelect
