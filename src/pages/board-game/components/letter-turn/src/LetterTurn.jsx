import '../styles/desktop.scss'

const LetterTurn = ({value}) => {
  const defaultClass = `turn-letter`
  return <div className={`${defaultClass} ${defaultClass}__${value} `}></div>
}

export default LetterTurn
