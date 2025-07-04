// src/components/ButtonRestart.jsx
import '../styles/desktop.scss'

const ButtonRestart = ({onClick}) => {
  return (
    <button onClick={onClick} type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
      >
        <g filter="url(#filter0_i_1_82)">
          <rect width="52" height="52" rx="10" fill="#A8BFC9" />
        </g>
        <path
          d="M35.5241 16H33.644C33.3812 15.9997 33.1679 16.2126 33.1676 16.4756C33.1676 16.4834 33.1678 16.4911 33.1681 16.4988L33.3268 19.7829C31.46 17.5818 28.7198 16.3143 25.8348 16.3174C20.4154 16.3175 15.996 20.7432 16 26.1663C16.004 31.598 20.4058 36 25.8348 36C28.2702 36.0034 30.6195 35.0993 32.425 33.4639C32.6208 33.2885 32.6375 32.9874 32.4622 32.7915C32.4563 32.7849 32.4502 32.7785 32.444 32.7722L31.0957 31.423C30.9186 31.2459 30.6346 31.2363 30.4461 31.4012C27.5521 33.949 23.1419 33.6669 20.5956 30.7709C18.0494 27.875 18.3314 23.4619 21.2254 20.914C24.1195 18.3661 28.5297 18.6483 31.0759 21.5442C31.2755 21.7712 31.4601 22.011 31.6287 22.2619L27.6024 22.0686C27.3398 22.0562 27.1169 22.259 27.1044 22.5217C27.104 22.5294 27.1038 22.5371 27.1039 22.5448V24.4262C27.1039 24.6892 27.3169 24.9024 27.5798 24.9024H35.5242C35.787 24.9024 36 24.6892 36 24.4262V16.4762C36 16.2132 35.787 16 35.5241 16Z"
          fill="#1F3641"
        />
        <defs>
          <filter
            id="filter0_i_1_82"
            x="0"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            {/* Aquí camelCase */}
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <feOffset dy="-4" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.418727 0 0 0 0 0.538482 0 0 0 0 0.590549 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_82"
            />
          </filter>
        </defs>
      </svg>
    </button>
  )
}

export default ButtonRestart
