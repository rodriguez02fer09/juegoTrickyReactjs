import '../style/desktop.scss'
import {useContext} from 'react'
import {TrickyContext} from '../../../../Context'

const ComponentLetters = ({value, winner, playerTurn}) => {
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
      {value === '' && playerTurn === 'x' && !winner && (
        <svg
          className={`${defaultClass} ${defaultClass}--empty__x`}
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Combined Shape Copy 2">
            <mask id="path-1-inside-1_0_1844" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M53.2406 1.14742C52.0691 -0.0241513 50.1696 -0.0241497 48.998 1.14742L32 18.1454L15.002 1.14742C13.8304 -0.0241506 11.9309 -0.0241496 10.7594 1.14742L1.14742 10.7594C-0.0241499 11.9309 -0.0241481 13.8304 1.14742 15.002L18.1454 32L1.14742 48.998C-0.0241506 50.1696 -0.0241496 52.0691 1.14742 53.2406L10.7594 62.8526C11.9309 64.0241 13.8304 64.0241 15.002 62.8526L32 45.8546L48.998 62.8526C50.1696 64.0242 52.0691 64.0241 53.2406 62.8526L62.8526 53.2406C64.0242 52.0691 64.0241 50.1696 62.8526 48.998L45.8546 32L62.8526 15.002C64.0242 13.8304 64.0241 11.9309 62.8526 10.7594L53.2406 1.14742Z"
              />
            </mask>
            <path
              d="M48.998 1.14742L47.5838 -0.266791L47.5838 -0.26679L48.998 1.14742ZM53.2406 1.14742L51.8264 2.56163V2.56164L53.2406 1.14742ZM32 18.1454L30.5858 19.5596L32 20.9738L33.4142 19.5596L32 18.1454ZM15.002 1.14742L13.5878 2.56164L13.5878 2.56164L15.002 1.14742ZM10.7594 1.14742L12.1736 2.56164H12.1736L10.7594 1.14742ZM1.14742 10.7594L2.56164 12.1736V12.1736L1.14742 10.7594ZM1.14742 15.002L-0.266789 16.4162L-0.266789 16.4162L1.14742 15.002ZM18.1454 32L19.5596 33.4142L20.9738 32L19.5596 30.5858L18.1454 32ZM1.14742 48.998L-0.266791 47.5838L-0.266792 47.5838L1.14742 48.998ZM1.14742 53.2406L2.56164 51.8264H2.56164L1.14742 53.2406ZM10.7594 62.8526L9.34515 64.2668H9.34515L10.7594 62.8526ZM15.002 62.8526L16.4162 64.2668H16.4162L15.002 62.8526ZM32 45.8546L33.4142 44.4404L32 43.0262L30.5858 44.4404L32 45.8546ZM48.998 62.8526L50.4122 61.4384V61.4384L48.998 62.8526ZM53.2406 62.8526L54.6549 64.2668H54.6549L53.2406 62.8526ZM62.8526 53.2406L61.4384 51.8264H61.4384L62.8526 53.2406ZM62.8526 48.998L64.2668 47.5838V47.5838L62.8526 48.998ZM45.8546 32L44.4404 30.5858L43.0262 32L44.4404 33.4142L45.8546 32ZM62.8526 15.002L61.4384 13.5878L61.4384 13.5878L62.8526 15.002ZM62.8526 10.7594L64.2668 9.34515V9.34515L62.8526 10.7594ZM50.4122 2.56164C50.8027 2.17111 51.4359 2.17111 51.8264 2.56163L54.6549 -0.26679C52.7022 -2.21942 49.5364 -2.21941 47.5838 -0.266791L50.4122 2.56164ZM33.4142 19.5596L50.4122 2.56164L47.5838 -0.26679L30.5858 16.7312L33.4142 19.5596ZM13.5878 2.56164L30.5858 19.5596L33.4142 16.7312L16.4162 -0.266791L13.5878 2.56164ZM12.1736 2.56164C12.5641 2.17111 13.1973 2.17111 13.5878 2.56164L16.4162 -0.266791C14.4636 -2.21941 11.2978 -2.21941 9.34515 -0.26679L12.1736 2.56164ZM2.56164 12.1736L12.1736 2.56164L9.34515 -0.26679L-0.266791 9.34515L2.56164 12.1736ZM2.56164 13.5878C2.17111 13.1973 2.17111 12.5641 2.56164 12.1736L-0.266791 9.34515C-2.21941 11.2978 -2.21941 14.4636 -0.266789 16.4162L2.56164 13.5878ZM19.5596 30.5858L2.56164 13.5878L-0.266789 16.4162L16.7312 33.4142L19.5596 30.5858ZM2.56164 50.4122L19.5596 33.4142L16.7312 30.5858L-0.266791 47.5838L2.56164 50.4122ZM2.56164 51.8264C2.17111 51.4359 2.17111 50.8027 2.56164 50.4122L-0.266792 47.5838C-2.21941 49.5364 -2.21941 52.7022 -0.266788 54.6549L2.56164 51.8264ZM12.1736 61.4384L2.56164 51.8264L-0.26679 54.6549L9.34515 64.2668L12.1736 61.4384ZM13.5878 61.4384C13.1973 61.8289 12.5641 61.8289 12.1736 61.4384L9.34515 64.2668C11.2978 66.2194 14.4636 66.2194 16.4162 64.2668L13.5878 61.4384ZM30.5858 44.4404L13.5878 61.4384L16.4162 64.2668L33.4142 47.2688L30.5858 44.4404ZM50.4122 61.4384L33.4142 44.4404L30.5858 47.2688L47.5838 64.2668L50.4122 61.4384ZM51.8264 61.4384C51.4359 61.8289 50.8027 61.8289 50.4122 61.4384L47.5838 64.2668C49.5364 66.2194 52.7022 66.2194 54.6549 64.2668L51.8264 61.4384ZM61.4384 51.8264L51.8264 61.4384L54.6549 64.2668L64.2668 54.6549L61.4384 51.8264ZM61.4384 50.4122C61.8289 50.8027 61.8289 51.4359 61.4384 51.8264L64.2668 54.6549C66.2194 52.7022 66.2194 49.5364 64.2668 47.5838L61.4384 50.4122ZM44.4404 33.4142L61.4384 50.4122L64.2668 47.5838L47.2688 30.5858L44.4404 33.4142ZM61.4384 13.5878L44.4404 30.5858L47.2688 33.4142L64.2668 16.4162L61.4384 13.5878ZM61.4384 12.1736C61.8289 12.5641 61.8289 13.1973 61.4384 13.5878L64.2668 16.4162C66.2194 14.4636 66.2194 11.2978 64.2668 9.34515L61.4384 12.1736ZM51.8264 2.56164L61.4384 12.1736L64.2668 9.34515L54.6549 -0.266792L51.8264 2.56164Z"
              fill="#31C3BD"
              mask="url(#path-1-inside-1_0_1844)"
            />
          </g>
        </svg>
      )}
      {value === '' && playerTurn === 'o' && !winner && (
        <svg
          className={`${defaultClass} ${defaultClass}--empty__o`}
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Oval Copy"
            d="M33 2C50.1208 2 64 15.8792 64 33H66C66 14.7746 51.2254 0 33 0V2ZM2 33C2 15.8792 15.8792 2 33 2V0C14.7746 0 0 14.7746 0 33H2ZM33 64C15.8792 64 2 50.1208 2 33H0C0 51.2254 14.7746 66 33 66V64ZM64 33C64 50.1208 50.1208 64 33 64V66C51.2254 66 66 51.2254 66 33H64ZM33 18.963C25.2476 18.963 18.963 25.2476 18.963 33H20.963C20.963 26.3521 26.3521 20.963 33 20.963V18.963ZM47.037 33C47.037 25.2476 40.7524 18.963 33 18.963V20.963C39.6479 20.963 45.037 26.3521 45.037 33H47.037ZM33 47.037C40.7524 47.037 47.037 40.7524 47.037 33H45.037C45.037 39.6479 39.6479 45.037 33 45.037V47.037ZM18.963 33C18.963 40.7524 25.2476 47.037 33 47.037V45.037C26.3521 45.037 20.963 39.6479 20.963 33H18.963Z"
            fill="#F2B137"
          />
        </svg>
      )}
    </>
  )
}

export default ComponentLetters
