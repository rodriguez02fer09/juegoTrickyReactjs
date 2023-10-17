import '../style/desktop.scss'

const ComponentLetters = ({value, size}) => {
  const defaultClass = `component-letter`
  return (
    <div
      className={`${defaultClass} ${defaultClass}--${value} ${defaultClass}--${value}__${size}`}
    ></div>
  )
}

export default ComponentLetters
