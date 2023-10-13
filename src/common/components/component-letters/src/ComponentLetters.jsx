import '../style/desktop.scss'

const ComponentLetters = ({value, size}) => {
  const defaultClass = `component-letters`
  return (
    <div
      className={`${defaultClass} ${defaultClass}--${value} ${defaultClass}--${value}__${size}`}
    ></div>
  )
}

export default ComponentLetters
