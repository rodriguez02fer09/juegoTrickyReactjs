import '../styles/selectPlayer.scss'
import ComponentLetters from '../../../../../common/components/component-letters'
import ContainPickPlayers from '../../contain-pick-players'
import Button from '../../../../../common/components/button'
import {Link} from 'react-router-dom'

const SelectPlayer = ({type, label, players}) => {
  return (
    <div className="select-player">
      <div className="contain-letters">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="32"
          viewBox="0 0 72 32"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
            fill="#31C3BD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M71.9704 15.8706C71.9704 7.10551 64.8649 0 56.0998 0C47.3348 0 40.2292 7.10551 40.2292 15.8706C40.2292 24.6357 47.3348 31.7412 56.0998 31.7412C64.8649 31.7412 71.9704 24.6357 71.9704 15.8706ZM49.634 15.8706C49.634 12.2996 52.5289 9.4048 56.0998 9.4048C59.6708 9.4048 62.5656 12.2996 62.5656 15.8706C62.5656 19.4416 59.6708 22.3364 56.0998 22.3364C52.5289 22.3364 49.634 19.4416 49.634 15.8706Z"
            fill="#F2B137"
          />
        </svg>
      </div>
      <ContainPickPlayers players={players} />
      <Link to="/gameBoard">
        <Button type="large-yellow" label="NEW GAME (VS CPU)" />
      </Link>
      <Link to="/gameBoard">
        <Button type="large-blue" label="NEW GAME (VS PLAYER)" />
      </Link>
    </div>
  )
}

export default SelectPlayer
