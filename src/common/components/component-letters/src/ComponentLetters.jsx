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
      {value === '' && playerTurn === 'x' && (
        <>
          <svg
            className={`${defaultClass} ${
              value === '' ? `${defaultClass}--empty__x` : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
          >
            <g filter="url(#filter0_i_0_1840)">
              <rect width="140" height="140" rx="15" fill="#1F3641" />
            </g>
            <mask id="path-2-inside-1_0_1840" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M91.2406 39.1474C90.0691 37.9758 88.1696 37.9759 86.998 39.1474L70 56.1454L53.002 39.1474C51.8304 37.9758 49.9309 37.9759 48.7594 39.1474L39.1474 48.7594C37.9759 49.9309 37.9759 51.8304 39.1474 53.002L56.1454 70L39.1474 86.998C37.9758 88.1696 37.9759 90.0691 39.1474 91.2406L48.7594 100.853C49.9309 102.024 51.8304 102.024 53.002 100.853L70 83.8546L86.998 100.853C88.1696 102.024 90.0691 102.024 91.2406 100.853L100.853 91.2406C102.024 90.0691 102.024 88.1696 100.853 86.998L83.8546 70L100.853 53.002C102.024 51.8304 102.024 49.9309 100.853 48.7594L91.2406 39.1474Z"
              />
            </mask>
            <path
              d="M86.998 39.1474L85.5838 37.7332L85.5838 37.7332L86.998 39.1474ZM91.2406 39.1474L89.8264 40.5616V40.5616L91.2406 39.1474ZM70 56.1454L68.5858 57.5596L70 58.9738L71.4142 57.5596L70 56.1454ZM53.002 39.1474L51.5878 40.5616L51.5878 40.5616L53.002 39.1474ZM48.7594 39.1474L50.1736 40.5616H50.1736L48.7594 39.1474ZM39.1474 48.7594L40.5616 50.1736V50.1736L39.1474 48.7594ZM39.1474 53.002L37.7332 54.4162L37.7332 54.4162L39.1474 53.002ZM56.1454 70L57.5596 71.4142L58.9738 70L57.5596 68.5858L56.1454 70ZM39.1474 86.998L37.7332 85.5838L37.7332 85.5838L39.1474 86.998ZM39.1474 91.2406L40.5616 89.8264H40.5616L39.1474 91.2406ZM48.7594 100.853L47.3451 102.267H47.3451L48.7594 100.853ZM53.002 100.853L54.4162 102.267H54.4162L53.002 100.853ZM70 83.8546L71.4142 82.4404L70 81.0262L68.5858 82.4404L70 83.8546ZM86.998 100.853L88.4122 99.4384V99.4384L86.998 100.853ZM91.2406 100.853L92.6549 102.267H92.6549L91.2406 100.853ZM100.853 91.2406L99.4384 89.8264H99.4384L100.853 91.2406ZM100.853 86.998L102.267 85.5838V85.5838L100.853 86.998ZM83.8546 70L82.4404 68.5858L81.0262 70L82.4404 71.4142L83.8546 70ZM100.853 53.002L99.4384 51.5878L99.4384 51.5878L100.853 53.002ZM100.853 48.7594L102.267 47.3451V47.3451L100.853 48.7594ZM88.4122 40.5616C88.8027 40.1711 89.4359 40.1711 89.8264 40.5616L92.6549 37.7332C90.7022 35.7806 87.5364 35.7806 85.5838 37.7332L88.4122 40.5616ZM71.4142 57.5596L88.4122 40.5616L85.5838 37.7332L68.5858 54.7312L71.4142 57.5596ZM51.5878 40.5616L68.5858 57.5596L71.4142 54.7312L54.4162 37.7332L51.5878 40.5616ZM50.1736 40.5616C50.5641 40.1711 51.1973 40.1711 51.5878 40.5616L54.4162 37.7332C52.4636 35.7806 49.2978 35.7806 47.3451 37.7332L50.1736 40.5616ZM40.5616 50.1736L50.1736 40.5616L47.3451 37.7332L37.7332 47.3451L40.5616 50.1736ZM40.5616 51.5878C40.1711 51.1973 40.1711 50.5641 40.5616 50.1736L37.7332 47.3451C35.7806 49.2978 35.7806 52.4636 37.7332 54.4162L40.5616 51.5878ZM57.5596 68.5858L40.5616 51.5878L37.7332 54.4162L54.7312 71.4142L57.5596 68.5858ZM40.5616 88.4122L57.5596 71.4142L54.7312 68.5858L37.7332 85.5838L40.5616 88.4122ZM40.5616 89.8264C40.1711 89.4359 40.1711 88.8027 40.5616 88.4122L37.7332 85.5838C35.7806 87.5364 35.7806 90.7022 37.7332 92.6549L40.5616 89.8264ZM50.1736 99.4384L40.5616 89.8264L37.7332 92.6549L47.3451 102.267L50.1736 99.4384ZM51.5878 99.4384C51.1973 99.8289 50.5641 99.8289 50.1736 99.4384L47.3451 102.267C49.2978 104.219 52.4636 104.219 54.4162 102.267L51.5878 99.4384ZM68.5858 82.4404L51.5878 99.4384L54.4162 102.267L71.4142 85.2688L68.5858 82.4404ZM88.4122 99.4384L71.4142 82.4404L68.5858 85.2688L85.5838 102.267L88.4122 99.4384ZM89.8264 99.4384C89.4359 99.8289 88.8027 99.8289 88.4122 99.4384L85.5838 102.267C87.5364 104.219 90.7022 104.219 92.6549 102.267L89.8264 99.4384ZM99.4384 89.8264L89.8264 99.4384L92.6549 102.267L102.267 92.6549L99.4384 89.8264ZM99.4384 88.4122C99.8289 88.8027 99.8289 89.4359 99.4384 89.8264L102.267 92.6549C104.219 90.7022 104.219 87.5364 102.267 85.5838L99.4384 88.4122ZM82.4404 71.4142L99.4384 88.4122L102.267 85.5838L85.2688 68.5858L82.4404 71.4142ZM99.4384 51.5878L82.4404 68.5858L85.2688 71.4142L102.267 54.4162L99.4384 51.5878ZM99.4384 50.1736C99.8289 50.5641 99.8289 51.1973 99.4384 51.5878L102.267 54.4162C104.219 52.4636 104.219 49.2978 102.267 47.3451L99.4384 50.1736ZM89.8264 40.5616L99.4384 50.1736L102.267 47.3451L92.6549 37.7332L89.8264 40.5616Z"
              fill="#31C3BD"
              mask="url(#path-2-inside-1_0_1840)"
            />
            <defs>
              <filter
                id="filter0_i_0_1840"
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
                  result="effect1_innerShadow_0_1840"
                />
              </filter>
            </defs>
          </svg>
        </>
      )}
      {value === '' && playerTurn === 'o' && (
        <>
          <svg
            className={`${defaultClass} ${
              value === '' ? `${defaultClass}--empty__o` : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
          >
            <g filter="url(#filter0_i_0_1747)">
              <rect width="140" height="140" rx="15" fill="#1F3641" />
            </g>
            <path
              d="M70 39C87.1208 39 101 52.8792 101 70H103C103 51.7746 88.2254 37 70 37V39ZM39 70C39 52.8792 52.8792 39 70 39V37C51.7746 37 37 51.7746 37 70H39ZM70 101C52.8792 101 39 87.1208 39 70H37C37 88.2254 51.7746 103 70 103V101ZM101 70C101 87.1208 87.1208 101 70 101V103C88.2254 103 103 88.2254 103 70H101ZM70 55.963C62.2476 55.963 55.963 62.2476 55.963 70H57.963C57.963 63.3521 63.3521 57.963 70 57.963V55.963ZM84.037 70C84.037 62.2476 77.7524 55.963 70 55.963V57.963C76.6479 57.963 82.037 63.3521 82.037 70H84.037ZM70 84.037C77.7524 84.037 84.037 77.7524 84.037 70H82.037C82.037 76.6479 76.6479 82.037 70 82.037V84.037ZM55.963 70C55.963 77.7524 62.2476 84.037 70 84.037V82.037C63.3521 82.037 57.963 76.6479 57.963 70H55.963Z"
              fill="#F2B137"
            />
            <defs>
              <filter
                id="filter0_i_0_1747"
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
                  result="effect1_innerShadow_0_1747"
                />
              </filter>
            </defs>
          </svg>
        </>
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
