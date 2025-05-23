import '../style/desktop.scss'
import {useContext} from 'react'
import {TrickyContext} from '../../../../Context'

const ComponentLetters = ({value, winner}) => {
  const {getPlayerSelect} = useContext(TrickyContext)
  const playerTurn = getPlayerSelect()
  const defaultClass = `component-letter`

  return (
    <>
      {value === 'x' && !winner && (
        <svg
          className={`${defaultClass}`}
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
        >
          <g filter="url(#filter0_i_0_2269)">
            <rect width="140" height="140" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M91.2406 39.1474C90.0691 37.9758 88.1696 37.9759 86.998 39.1474L70 56.1454L53.002 39.1474C51.8304 37.9758 49.9309 37.9759 48.7594 39.1474L39.1474 48.7594C37.9759 49.9309 37.9759 51.8304 39.1474 53.002L56.1454 70L39.1474 86.998C37.9758 88.1696 37.9759 90.0691 39.1474 91.2406L48.7594 100.853C49.9309 102.024 51.8304 102.024 53.002 100.853L70 83.8546L86.998 100.853C88.1696 102.024 90.0691 102.024 91.2406 100.853L100.853 91.2406C102.024 90.0691 102.024 88.1696 100.853 86.998L83.8546 70L100.853 53.002C102.024 51.8304 102.024 49.9309 100.853 48.7594L91.2406 39.1474Z"
            fill="#31C3BD"
          />
          <defs>
            <filter
              id="filter0_i_0_2269"
              x="0"
              y="0"
              width="140"
              height="140"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-8" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.129412 0 0 0 0 0.164706 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_2269"
              />
            </filter>
          </defs>
        </svg>
      )}
      {value === 'o' && !winner && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
        >
          <g filter="url(#filter0_i_0_1850)">
            <rect width="140" height="140" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M102 70C102 52.3269 87.6731 38 70 38C52.3269 38 38 52.3269 38 70C38 87.6731 52.3269 102 70 102C87.6731 102 102 87.6731 102 70ZM56.963 70C56.963 62.7998 62.7998 56.963 70 56.963C77.2002 56.963 83.037 62.7998 83.037 70C83.037 77.2002 77.2002 83.037 70 83.037C62.7998 83.037 56.963 77.2002 56.963 70Z"
            fill="#F2B137"
          />
          <defs>
            <filter
              id="filter0_i_0_1850"
              x="0"
              y="0"
              width="140"
              height="140"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-8" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.129412 0 0 0 0 0.164706 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_1850"
              />
            </filter>
          </defs>
        </svg>
      )}

      {winner && value === 'x' && (
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_0_2082)">
            <rect width="140" height="140" rx="15" fill="#31C3BD" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M91.2406 39.1474C90.0691 37.9758 88.1696 37.9759 86.998 39.1474L70 56.1454L53.002 39.1474C51.8304 37.9758 49.9309 37.9759 48.7594 39.1474L39.1474 48.7594C37.9759 49.9309 37.9759 51.8304 39.1474 53.002L56.1454 70L39.1474 86.998C37.9758 88.1696 37.9759 90.0691 39.1474 91.2406L48.7594 100.853C49.9309 102.024 51.8304 102.024 53.002 100.853L70 83.8546L86.998 100.853C88.1696 102.024 90.0691 102.024 91.2406 100.853L100.853 91.2406C102.024 90.0691 102.024 88.1696 100.853 86.998L83.8546 70L100.853 53.002C102.024 51.8304 102.024 49.9309 100.853 48.7594L91.2406 39.1474Z"
            fill="#1F3641"
          />
          <defs>
            <filter
              id="filter0_i_0_2082"
              x="0"
              y="0"
              width="140"
              height="140"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-8" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0666667 0 0 0 0 0.54902 0 0 0 0 0.529412 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_2082"
              />
            </filter>
          </defs>
        </svg>
      )}
      {winner && value === 'o' && (
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_0_2196)">
            <rect width="140" height="140" rx="15" fill="#F2B137" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M102 70C102 52.3269 87.6731 38 70 38C52.3269 38 38 52.3269 38 70C38 87.6731 52.3269 102 70 102C87.6731 102 102 87.6731 102 70ZM56.963 70C56.963 62.7998 62.7998 56.963 70 56.963C77.2002 56.963 83.037 62.7998 83.037 70C83.037 77.2002 77.2002 83.037 70 83.037C62.7998 83.037 56.963 77.2002 56.963 70Z"
            fill="#1F3641"
          />
          <defs>
            <filter
              id="filter0_i_0_2196"
              x="0"
              y="0"
              width="140"
              height="140"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-8" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.8 0 0 0 0 0.545098 0 0 0 0 0.0745098 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_2196"
              />
            </filter>
          </defs>
        </svg>
      )}
    </>
  )
}

export default ComponentLetters
