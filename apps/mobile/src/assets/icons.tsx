import Svg, {G, Path, Rect, SvgProps} from 'react-native-svg';

export const AddPostIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 72 72" fill="none" {...props}>
    <Path
      fill="#EC796B"
      d="M30 3.464a12 12 0 0 1 12 0l19.177 11.072a12 12 0 0 1 6 10.392v22.144a12 12 0 0 1-6 10.392L42 68.536a12 12 0 0 1-12 0L10.823 57.464a12 12 0 0 1-6-10.392V24.928a12 12 0 0 1 6-10.392L30 3.464Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M36 23.667c.92 0 1.667.746 1.667 1.666v9h9a1.667 1.667 0 1 1 0 3.334h-9v9a1.667 1.667 0 1 1-3.334 0v-9h-9a1.667 1.667 0 1 1 0-3.334h9v-9c0-.92.746-1.666 1.667-1.666Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const HomeIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.524 1.996c.836-.47 1.61-.746 2.476-.746.866 0 1.64.277 2.476.746.81.454 1.738 1.125 2.905 1.97l1.51 1.09c.936.677 1.684 1.218 2.248 1.719.582.517 1.018 1.032 1.295 1.68.277.65.344 1.315.307 2.083-.036.74-.174 1.635-.345 2.75l-.315 2.05c-.244 1.585-.437 2.846-.722 3.828-.294 1.016-.71 1.823-1.45 2.44-.739.613-1.618.887-2.692 1.017-1.045.127-2.363.127-4.028.127H10.81c-1.665 0-2.983 0-4.028-.127-1.074-.13-1.953-.404-2.692-1.018-.74-.616-1.156-1.423-1.45-2.439-.285-.982-.478-2.244-.722-3.827l-.315-2.052c-.171-1.114-.309-2.008-.345-2.749-.037-.768.03-1.433.307-2.083.277-.648.713-1.163 1.295-1.68.564-.5 1.312-1.042 2.249-1.719l1.509-1.09c1.167-.845 2.095-1.516 2.905-1.97ZM10 17a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const IndicatorIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 6 6" fill="none" {...props}>
    <Rect width={6} height={6} fill="currentColor" rx={3} />
  </Svg>
);

export const MessageIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.98368 18.8571C8.4529 18.7286 7.92497 18.5621 7.37131 18.3685L3.79112 19.9492C3.78341 19.9526 3.7752 19.9456 3.77743 19.9375L4.69206 16.617C3.4357 15.3458 2.00622 13.8115 2.00622 10.3996C1.82328 5.4028 7.24655 1.74833 11.1012 2.01194C11.9954 2.01212 12.9963 2.25396 13.8395 2.45769L13.8735 2.4659C15.1064 2.8253 17.1562 3.99932 18.3692 5.68609C19.3875 7.10215 19.7414 8.54366 19.8281 9.0031"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <Path
      d="M21.5829 18.1216C22.9036 15.2437 20.8918 12.001 18.1313 11.2207C15.5118 10.3421 12.1405 11.8825 11.2565 14.5C10.3724 17.1175 11.7078 20.3461 14.8531 21.1618C16.4741 21.7055 17.7451 21.3271 18.1736 21.1616C18.8539 21.3751 20.3554 21.6856 20.8648 21.9975C20.9744 22.0645 20.7937 21.2464 20.6428 19.517C20.9028 19.0975 21.4739 18.6987 21.5829 18.1216Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </Svg>
);

export const NotificationIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SearchIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.7771 15.3629C17.5518 15.1066 18.4392 15.2866 19.0555 15.9029L22.0971 18.9445C22.9676 19.8151 22.9676 21.2265 22.0971 22.0971C21.2265 22.9676 19.8151 22.9676 18.9445 22.0971L15.9029 19.0555C15.2866 18.4392 15.1066 17.5518 15.3629 16.7771L13.293 14.7072L14.7072 13.293L16.7771 15.3629Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3Z"
      fill="currentColor"
    />
  </Svg>
);

export const AFKIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 96 16" fill="none" {...props}>
    <Path
      fill="currentColor"
      d="m0 0h205l6 3 2 4v120l-4 5-2 1-132 1v38l136 1 2 3v127l-4 3-133 1-1 68-2 5-6 5h-139l-6-4-2-4v-285l3-6 4-3 64-1 1-76 5-5z"
      // d="m0 0h143l5 4 1 4v156h62v-100l3-3h149l3 3v127l-3 3-96 1-1 57h96l4 3v127l-2 3h-151l-2-3v-84h-62v77l-3 6-4 2h-142l-4-2-3-8v-364l3-7z"
      // d="M7.202 9.44V1h3.38v9.32c0 3.72-3.02 5.12-5.78 5.12-1.66 0-3.24-.52-4.04-1.32l.94-3.04c.76.66 1.86 1.06 2.86 1.06 1.4 0 2.64-.78 2.64-2.7ZM28.578 8c0 5-4.32 7.46-7.98 7.46-3.68 0-7.98-2.46-7.98-7.46s4.3-7.46 7.98-7.46c3.66 0 7.98 2.46 7.98 7.46Zm-3.46 0c0-2.86-2.44-4.26-4.52-4.26-2.1 0-4.54 1.4-4.54 4.26s2.44 4.24 4.54 4.24c2.08 0 4.52-1.38 4.52-4.24Zm-6.08.02c0-.94.6-1.56 1.56-1.56.94 0 1.54.62 1.54 1.56 0 .94-.6 1.54-1.54 1.54-.96 0-1.56-.6-1.56-1.54ZM30.001 1h3.94l5.52 8.26V15h-3.38V9.38L30.001 1Zm9.2 3.5 2.4-3.5h3.94l-4.38 5.82-1.96-2.32ZM56.335 15h-9v-2.74h8.3c1.14 0 1.72-.78 1.72-1.58 0-.78-.58-1.56-1.72-1.56h-8.3v-2.5h7.04c1.14 0 1.72-.76 1.72-1.54 0-.76-.58-1.54-1.72-1.54h-7.04V1h7.74c2.92 0 4.38 2.02 4.38 4.06 0 .84-.26 1.68-.76 2.38 1.3.84 1.92 2.2 1.92 3.54 0 2.04-1.46 4.02-4.28 4.02ZM78.414 8c0 5-4.32 7.46-7.98 7.46-3.68 0-7.98-2.46-7.98-7.46s4.3-7.46 7.98-7.46c3.66 0 7.98 2.46 7.98 7.46Zm-3.46 0c0-2.86-2.44-4.26-4.52-4.26-2.1 0-4.54 1.4-4.54 4.26s2.44 4.24 4.54 4.24c2.08 0 4.52-1.38 4.52-4.24Zm-6.08.02c0-.94.6-1.56 1.56-1.56.94 0 1.54.62 1.54 1.56 0 .94-.6 1.54-1.54 1.54-.96 0-1.56-.6-1.56-1.54ZM79.836 1h3.94l5.52 8.26V15h-3.38V9.38L79.836 1Zm9.2 3.5 2.4-3.5h3.94l-4.38 5.82-1.96-2.32Z"
    />
  </Svg>
);

export const UserIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333C8.636 2.667 2.667 8.637 2.667 16c0 7.364 5.97 13.333 13.333 13.333Z"
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 22.667c3.109-3.257 8.858-3.41 12 0m-2.673-10A3.336 3.336 0 0 1 15.989 16a3.336 3.336 0 0 1-3.338-3.333 3.336 3.336 0 0 1 3.338-3.334 3.336 3.336 0 0 1 3.338 3.334Z"
    />
  </Svg>
);

export const CopyIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.596 20.699-2.445.647c-2.263.6-3.395.899-4.281.408-.887-.49-1.182-1.58-1.773-3.758l-1.462-5.391c-.59-2.179-.886-3.268-.367-4.13.52-.863 1.651-1.163 3.914-1.762l4-1.06c2.264-.598 3.395-.898 4.282-.407.886.49 1.182 1.58 1.772 3.758l1.468 5.413c.251.926.377 1.39.239 1.825m-5.347 4.457c.752-.2.758-.202 1.343-.704l2.743-2.355c.749-.642 1.123-.963 1.261-1.398m-5.347 4.457s.588-4.593 1.904-5.199c1.493-.687 3.443.742 3.443.742"
      />
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 5.001c-.064-1.073-.243-1.749-.752-2.233-.78-.742-2.03-.746-4.532-.754l-4.423-.013c-2.502-.007-3.753-.01-4.528.727-.775.737-.771 1.928-.764 4.31l.018 5.893c.008 2.381.011 3.572.79 4.314.78.742 2.031.746 4.533.753l.681.002"
      />
    </Svg>
  );
};

export const GalleryIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"
      />
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 22c-.62-2.225-2.066-4.218-4.123-5.666-2.22-1.561-5.005-2.387-7.861-2.331-.34-.001-.678.01-1.016.032"
      />
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 18c1.701-1.327 3.535-2.007 5.386-2a7.792 7.792 0 0 1 3.114.662"
      />
    </Svg>
  );
};

export const GifIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.156 4.156 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252 1.166.406 2.085 1.263 2.52 2.35.27.676.27 1.523.27 3.216V10"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.75 12c0-1.84 1.506-3.333 3.364-3.333.672 0 1.464.116 2.117-.057a1.674 1.674 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2M12.842 18h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523"
      />
    </Svg>
  );
};

export const SendIconContained: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 56 56" fill="none" {...props}>
      <Path
        fill="currentColor"
        d="M22 3.464a12 12 0 0 1 12 0l12.249 7.072a12 12 0 0 1 6 10.392v14.144a12 12 0 0 1-6 10.392L34 52.536a12 12 0 0 1-12 0L9.751 45.464a12 12 0 0 1-6-10.392V20.928a12 12 0 0 1 6-10.392L22 3.464Z"
      />
      <Path
        fill="white"
        d="M37.597 18.543c-.467-.504-1.2-.692-1.9-.76-.736-.07-1.617-.024-2.566.1-1.902.25-4.2.828-6.409 1.539-2.21.711-4.363 1.567-5.976 2.386-.802.409-1.499.821-2.005 1.218-.252.197-.482.41-.655.636-.165.216-.338.524-.336.894.006.972.668 1.659 1.373 2.12.72.47 1.657.825 2.589 1.103.941.281 1.931.499 2.783.675l.304.063c.514.106.771.16 1.013.087.242-.072.428-.258.8-.63l3.68-3.681a1 1 0 0 1 1.415 1.414l-3.433 3.433c-.379.379-.568.568-.64.814-.072.246-.014.507.102 1.03.448 2.024.838 3.697 1.226 4.823.227.657.483 1.227.806 1.646.337.438.796.77 1.4.796.376.017.69-.155.904-.315.225-.167.438-.393.635-.639.396-.495.812-1.18 1.226-1.97.832-1.59 1.713-3.722 2.459-5.915.745-2.193 1.366-4.48 1.665-6.38.149-.948.223-1.828.182-2.565-.04-.7-.188-1.434-.642-1.922Z"
      />
    </Svg>
  );
};

export const RepostIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 21 21" {...props}>
      <G
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="m13.5 13.5l3 3l3-3" />
        <Path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3" />
        <Path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8" />
      </G>
    </Svg>
  );
};

export const LikeIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M15.7141 3.12058C12.3877 1.33653 9.99929 3.96642 9.99929 3.96642C9.99929 3.96642 7.61073 1.33652 4.28431 3.12057C0.255387 5.2814 -0.0339221 13.7433 9.99929 17.5C20.0325 13.7433 19.743 5.28141 15.7141 3.12058Z"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export const LikeFillIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M15.7141 3.12058C12.3877 1.33653 9.99929 3.96642 9.99929 3.96642C9.99929 3.96642 7.61073 1.33652 4.28431 3.12057C0.255386 5.2814 -0.0339221 13.7433 9.99929 17.5C20.0325 13.7433 19.743 5.28141 15.7141 3.12058Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export const CommentIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M6.66663 11.25H13.3333M6.66663 7.08331H9.99996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.0823 15.8333C3.99888 15.7267 3.18725 15.4013 2.64293 14.857C1.66663 13.8807 1.66663 12.3093 1.66663 9.16665V8.74998C1.66663 5.60728 1.66663 4.03594 2.64293 3.05962C3.61925 2.08331 5.19059 2.08331 8.33329 2.08331H11.6666C14.8093 2.08331 16.3807 2.08331 17.357 3.05962C18.3333 4.03594 18.3333 5.60728 18.3333 8.74998V9.16665C18.3333 12.3093 18.3333 13.8807 17.357 14.857C16.3807 15.8333 14.8093 15.8333 11.6666 15.8333C11.1995 15.8437 10.8275 15.8792 10.4621 15.9625C9.46346 16.1924 8.53871 16.7034 7.62485 17.1491C6.3227 17.784 5.67163 18.1015 5.26303 17.8042C4.48137 17.2221 5.24541 15.4182 5.41663 14.5833"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export const CopyIconStack: React.FC<SvgProps> = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity="0.4"
      d="M16.0549 8.25C17.4225 8.24998 18.5248 8.24996 19.3918 8.36652C20.2919 8.48754 21.0497 8.74643 21.6517 9.34835C22.2536 9.95027 22.5125 10.7081 22.6335 11.6083C22.75 12.4752 22.75 13.5775 22.75 14.9451V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H14.9451C13.5775 22.75 12.4752 22.75 11.6082 22.6335C10.7081 22.5125 9.95027 22.2536 9.34835 21.6516C8.74643 21.0497 8.48754 20.2919 8.36652 19.3918C8.24996 18.5248 8.24998 17.4225 8.25 16.0549V14.9451C8.24998 13.5775 8.24996 12.4752 8.36652 11.6082C8.48754 10.7081 8.74643 9.95027 9.34835 9.34835C9.95027 8.74643 10.7081 8.48754 11.6083 8.36652C12.4752 8.24996 13.5775 8.24998 14.9451 8.25H16.0549Z"
      fill="currentColor"
    />
    <Path
      d="M6.75 14.8569C6.74991 13.5627 6.74983 12.3758 6.8799 11.4084C7.0232 10.3425 7.36034 9.21504 8.28769 8.28769C9.21504 7.36034 10.3425 7.0232 11.4084 6.8799C12.3758 6.74983 13.5627 6.74991 14.8569 6.75H17.0931C17.3891 6.75 17.5371 6.75 17.6261 6.65419C17.7151 6.55838 17.7045 6.4142 17.6833 6.12584C17.6648 5.87546 17.6412 5.63892 17.6111 5.41544C17.4818 4.45589 17.2232 3.6585 16.6718 2.98663C16.4744 2.74612 16.2539 2.52558 16.0134 2.3282C15.3044 1.74638 14.4557 1.49055 13.4248 1.36868C12.4205 1.24998 11.1512 1.24999 9.54893 1.25H9.45109C7.84883 1.24999 6.57947 1.24998 5.57525 1.36868C4.54428 1.49054 3.69558 1.74638 2.98663 2.3282C2.74612 2.52558 2.52558 2.74612 2.3282 2.98663C1.74638 3.69558 1.49055 4.54428 1.36868 5.57525C1.24998 6.57947 1.24999 7.84882 1.25 9.45108V9.54891C1.24999 11.1512 1.24998 12.4205 1.36868 13.4247C1.49054 14.4557 1.74638 15.3044 2.3282 16.0134C2.52558 16.2539 2.74612 16.4744 2.98663 16.6718C3.6585 17.2232 4.45589 17.4818 5.41544 17.6111C5.63892 17.6412 5.87546 17.6648 6.12584 17.6833C6.4142 17.7045 6.55838 17.7151 6.65419 17.6261C6.75 17.5371 6.75 17.3891 6.75 17.0931V14.8569Z"
      fill="currentColor"
    />
  </Svg>
);

export const InfoIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0476 1.45801C11.8732 1.458 13.3071 1.45799 14.4266 1.6085C15.5738 1.76274 16.4841 2.08527 17.1992 2.80043C17.9144 3.5156 18.2369 4.42582 18.3911 5.57302C18.5416 6.69253 18.5416 8.12642 18.5416 9.95202V10.0473C18.5416 11.8729 18.5416 13.3068 18.3911 14.4263C18.2369 15.5735 17.9144 16.4838 17.1992 17.1989C16.4841 17.9141 15.5738 18.2366 14.4266 18.3909C13.3071 18.5414 11.8732 18.5413 10.0476 18.5413H9.95231C8.12673 18.5413 6.69284 18.5414 5.57333 18.3909C4.42612 18.2366 3.5159 17.9141 2.80074 17.1989C2.08558 16.4838 1.76305 15.5735 1.6088 14.4263C1.4583 13.3068 1.4583 11.8729 1.45831 10.0473V9.95202C1.4583 8.12644 1.4583 6.69254 1.6088 5.57302C1.76305 4.42582 2.08558 3.5156 2.80074 2.80043C3.5159 2.08527 4.42612 1.76274 5.57333 1.6085C6.69285 1.45799 8.12675 1.458 9.95231 1.45801H10.0476ZM9.16665 13.7497C9.16665 13.2894 9.53806 12.9163 9.99623 12.9163H10.0037C10.4619 12.9163 10.8333 13.2894 10.8333 13.7497C10.8333 14.2099 10.4619 14.583 10.0037 14.583H9.99623C9.53806 14.583 9.16665 14.2099 9.16665 13.7497ZM9.16673 10.4163C9.16673 10.8766 9.53981 11.2497 10.0001 11.2497C10.4603 11.2497 10.8334 10.8766 10.8334 10.4163V7.08301C10.8334 6.62278 10.4603 6.24968 10.0001 6.24968C9.53981 6.24968 9.16673 6.62278 9.16673 7.08301V10.4163Z"
      fill="currentColor"
    />
  </Svg>
);

export const LockIcon: React.FC<SvgProps> = (props) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 1.66663C8.08388 1.66663 1.66663 8.08388 1.66663 16C1.66663 23.9161 8.08388 30.3333 16 30.3333C23.9161 30.3333 30.3333 23.9161 30.3333 16C30.3333 8.08388 23.9161 1.66663 16 1.66663ZM12.6666 14.3333C12.6666 12.4923 14.159 11 16 11C17.8409 11 19.3333 12.4923 19.3333 14.3333C19.3333 15.7002 18.5106 16.8749 17.3333 17.3893V21C17.3333 21.7364 16.7364 22.3333 16 22.3333C15.2636 22.3333 14.6666 21.7364 14.6666 21V17.3893C13.4893 16.8749 12.6666 15.7002 12.6666 14.3333Z"
      fill="currentColor"
    />
  </Svg>
);

export const UploadIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 44 44" fill="none" {...props}>
    <Rect width="44" height="44" rx="22" fill="#14142C" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.8382 29.7083C22.8382 30.1685 22.4651 30.5416 22.0049 30.5416C21.5447 30.5416 21.1716 30.1685 21.1716 29.7083V25.9583H20.6763C20.53 25.9583 20.3502 25.9585 20.2032 25.9401L20.2004 25.9398C20.0951 25.9266 19.615 25.8668 19.3864 25.3954C19.1573 24.923 19.4089 24.5063 19.4633 24.4161L19.4653 24.4128C19.5422 24.2853 19.654 24.1428 19.7459 24.0257L19.7657 24.0005C20.0112 23.6873 20.3295 23.2838 20.6466 22.9579C20.8047 22.7953 20.9858 22.6277 21.1782 22.4953C21.3492 22.3776 21.6411 22.2083 22 22.2083C22.3589 22.2083 22.6507 22.3776 22.8217 22.4953C23.0142 22.6277 23.1952 22.7953 23.3534 22.9579C23.6705 23.2838 23.9887 23.6873 24.2343 24.0005L24.2541 24.0257C24.346 24.1428 24.4578 24.2852 24.5347 24.4128L24.5367 24.4161C24.5911 24.5063 24.8427 24.9231 24.6136 25.3954C24.385 25.8668 23.9049 25.9266 23.7996 25.9398L23.7967 25.9401C23.6497 25.9585 23.47 25.9583 23.3237 25.9583H22.8382V29.7083Z"
      fill="currentColor"
    />
    <Path
      opacity="0.75"
      d="M13.0417 22.4166C13.0417 20.2151 14.5259 18.3609 16.5485 17.7992C16.7119 17.7539 16.7935 17.7312 16.8406 17.683C16.8877 17.6348 16.9082 17.5531 16.9494 17.3898C17.5189 15.1304 19.5639 13.4583 22 13.4583C24.6791 13.4583 26.8857 15.481 27.176 18.0826C27.1987 18.2871 27.2102 18.3893 27.2622 18.4485C27.3143 18.5076 27.4157 18.5323 27.6186 18.5815C29.5352 19.0465 30.9583 20.7737 30.9583 22.8333C30.9583 25.2495 28.9996 27.2083 26.5833 27.2083H25.6672C25.285 27.2083 25.0938 27.2083 25.0688 27.1765C25.0566 27.161 25.0534 27.1532 25.0514 27.1335C25.0472 27.0933 25.2099 26.9352 25.5354 26.6188C26.3605 25.8169 26.3792 24.4979 25.5772 23.6728C25.0368 22.9984 24.5262 22.2851 23.8649 21.7218C23.3405 21.2752 22.7022 20.9583 22 20.9583C21.2978 20.9583 20.6595 21.2752 20.1351 21.7218C19.4737 22.2851 18.9631 22.9984 18.4227 23.6728C17.6208 24.4979 17.6395 25.8169 18.4646 26.6188C18.79 26.9352 18.9528 27.0933 18.9486 27.1335C18.9465 27.1532 18.9434 27.161 18.9311 27.1765C18.9061 27.2083 18.715 27.2083 18.3328 27.2083H17.8333C15.187 27.2083 13.0417 25.0629 13.0417 22.4166Z"
      fill="currentColor"
    />
  </Svg>
);
export const SuccessIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0477 1.45825C11.8733 1.45824 13.3072 1.45824 14.4267 1.60874C15.5739 1.76299 16.4841 2.08552 17.1993 2.80068C17.9145 3.51584 18.237 4.42606 18.3912 5.57327C18.5417 6.69279 18.5417 8.1267 18.5417 9.95225V10.0476C18.5417 11.8732 18.5417 13.3071 18.3912 14.4266C18.237 15.5738 17.9145 16.484 17.1993 17.1992C16.4841 17.9143 15.5739 18.2368 14.4267 18.3911C13.3072 18.5416 11.8733 18.5416 10.0477 18.5416H9.95237C8.12679 18.5416 6.69291 18.5416 5.57339 18.3911C4.42618 18.2368 3.51597 17.9143 2.8008 17.1992C2.08564 16.484 1.76311 15.5738 1.60887 14.4266C1.45836 13.3071 1.45837 11.8732 1.45837 10.0476V9.95225C1.45837 8.12668 1.45836 6.69279 1.60887 5.57327C1.76311 4.42606 2.08564 3.51584 2.8008 2.80068C3.51597 2.08552 4.42618 1.76299 5.57339 1.60874C6.69291 1.45824 8.12681 1.45824 9.95237 1.45825H10.0477ZM14.0646 6.68357C14.2855 7.08736 14.1371 7.59373 13.7334 7.81455C12.5905 8.4395 11.5174 9.74784 10.6979 11.0026C10.2985 11.6143 9.97796 12.1838 9.75754 12.6003C9.64754 12.808 9.56304 12.9767 9.50662 13.092L9.42471 13.2632C9.29596 13.5446 9.02179 13.7318 8.71279 13.7488C8.40371 13.7658 8.1106 13.6102 7.95169 13.3445C7.69276 12.9116 7.28132 12.5164 6.90002 12.215C6.71474 12.0685 6.54797 11.953 6.42897 11.8751L6.25372 11.7655C5.85415 11.5373 5.71502 11.0286 5.94297 10.6289C6.17098 10.2291 6.67992 10.0898 7.0797 10.3178L7.34223 10.4809C7.49406 10.5803 7.70229 10.7247 7.93369 10.9076C8.11052 11.0474 8.30824 11.2155 8.50787 11.4092C8.72187 11.0247 8.98937 10.5708 9.30246 10.0913C10.1497 8.794 11.4098 7.18564 12.9337 6.35227C13.3375 6.13144 13.8438 6.27977 14.0646 6.68357Z"
      fill="currentColor"
    />
  </Svg>
);

export const ErrorIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.63501 1.67908C9.52201 1.38464 10.478 1.38464 11.365 1.67908C12.2484 1.97231 12.942 2.66776 13.6388 3.64487C14.3333 4.61875 15.1007 5.97663 16.0898 7.727L16.1287 7.79572C17.1181 9.54633 17.8854 10.9042 18.3637 12.0053C18.8442 13.1118 19.0835 14.0672 18.8926 14.985C18.7003 15.9092 18.2262 16.7495 17.5357 17.3847C16.8468 18.0183 15.9089 18.2856 14.728 18.4139C13.5538 18.5416 12.0177 18.5416 10.0407 18.5416H9.95942C7.98236 18.5416 6.44629 18.5416 5.27202 18.4139C4.09106 18.2856 3.15316 18.0183 2.46436 17.3847C1.77386 16.7495 1.29974 15.9092 1.10746 14.985C0.916506 14.0672 1.15584 13.1118 1.63638 12.0053C2.11461 10.9042 2.88196 9.54633 3.87132 7.79571L3.91016 7.727C4.89935 5.97664 5.66674 4.61875 6.36123 3.64487C7.05803 2.66776 7.75162 1.97231 8.63501 1.67908ZM9.16667 14.1666C9.16667 13.7063 9.53809 13.3333 9.99625 13.3333H10.0038C10.4619 13.3333 10.8333 13.7063 10.8333 14.1666C10.8333 14.6268 10.4619 14.9999 10.0038 14.9999H9.99625C9.53809 14.9999 9.16667 14.6268 9.16667 14.1666ZM9.16667 10.8333C9.16667 11.2935 9.53976 11.6666 10 11.6666C10.4603 11.6666 10.8333 11.2935 10.8333 10.8333V7.49992C10.8333 7.03968 10.4603 6.66658 10 6.66658C9.53976 6.66658 9.16667 7.03968 9.16667 7.49992V10.8333Z"
      fill="currentColor"
    />
  </Svg>
);

export const SettingsIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 18 18" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.53955 0.041748C6.19437 0.041748 5.91455 0.321573 5.91455 0.666748V2.46036L4.96206 3.02005L3.44352 2.12926C3.29925 2.04463 3.1271 2.02136 2.96554 2.06464C2.80399 2.10792 2.66652 2.21416 2.58389 2.35957L0.123329 6.6897C-0.0455461 6.98689 0.0556539 7.36458 0.350496 7.53758L1.87633 8.43266V9.56758L0.350579 10.4626C0.0557373 10.6356 -0.0454628 11.0132 0.123412 11.3105L2.58397 15.6406C2.6666 15.786 2.80407 15.8922 2.96562 15.9355C3.12718 15.9788 3.29934 15.9555 3.4436 15.8709L4.9621 14.9802L5.91455 15.5398V17.3334C5.91455 17.6786 6.19437 17.9584 6.53955 17.9584H11.4606C11.8058 17.9584 12.0856 17.6786 12.0856 17.3334V15.5398L13.038 14.9802L14.5565 15.8709C14.7008 15.9555 14.873 15.9788 15.0345 15.9355C15.196 15.8922 15.3335 15.786 15.4161 15.6406L17.8767 11.3105C18.0455 11.0132 17.9444 10.6356 17.6495 10.4626L16.1239 9.56758V8.43258L17.6496 7.53758C17.9445 7.36458 18.0456 6.98689 17.8768 6.6897L15.4162 2.35957C15.3336 2.21416 15.1961 2.10792 15.0345 2.06464C14.873 2.02136 14.7009 2.04463 14.5566 2.12926L13.0381 3.02002L12.0856 2.46036V0.666748C12.0856 0.321573 11.8058 0.041748 11.4606 0.041748H6.53955ZM8.99996 11.9167C10.6108 11.9167 11.9166 10.6109 11.9166 9.00008C11.9166 7.38925 10.6108 6.08341 8.99996 6.08341C7.38913 6.08341 6.0833 7.38925 6.0833 9.00008C6.0833 10.6109 7.38913 11.9167 8.99996 11.9167Z"
      fill="currentColor"
    />
  </Svg>
);

export const UserPlusIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3.11733 9.7661C5.23946 8.5223 7.92747 8.5223 10.0496 9.7661C10.1168 9.8055 10.2005 9.85197 10.2957 9.90484C10.7175 10.139 11.3654 10.4986 11.809 10.926C12.086 11.193 12.359 11.5534 12.4089 12.0024C12.4623 12.4834 12.2474 12.9273 11.8365 13.3126C11.1365 13.9692 10.2912 14.4999 9.19627 14.4999H3.97064C2.87575 14.4999 2.03047 13.9691 1.33041 13.3126C0.919534 12.9273 0.704634 12.4834 0.758048 12.0024C0.807894 11.5534 1.08093 11.193 1.35793 10.926C1.80152 10.4986 2.44946 10.139 2.87122 9.90484C2.96643 9.85197 3.05013 9.8055 3.11733 9.7661Z"
      fill="currentColor"
    />
    <Path
      d="M3.41687 4.66667C3.41687 2.91777 4.83464 1.5 6.58354 1.5C8.33241 1.5 9.75021 2.91777 9.75021 4.66667C9.75021 6.41557 8.33241 7.83333 6.58354 7.83333C4.83464 7.83333 3.41687 6.41557 3.41687 4.66667Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.9167 2C13.2849 2 13.5834 2.29848 13.5834 2.66667V3.66667H14.5834C14.9516 3.66667 15.25 3.96515 15.25 4.33333C15.25 4.70152 14.9516 5 14.5834 5H13.5834V6C13.5834 6.36819 13.2849 6.66667 12.9167 6.66667C12.5485 6.66667 12.25 6.36819 12.25 6V5H11.25C10.8818 5 10.5834 4.70152 10.5834 4.33333C10.5834 3.96514 10.8818 3.66667 11.25 3.66667H12.25V2.66667C12.25 2.29848 12.5485 2 12.9167 2Z"
      fill="currentColor"
    />
  </Svg>
);

export const BellIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.92761 9.27697C3.92765 4.84152 7.54394 1.25 11.9998 1.25C16.4556 1.25 20.0719 4.84155 20.0719 9.27703C20.072 10.3087 20.1414 11.0873 20.6171 11.7872C20.7982 12.0497 21.1411 12.4936 21.3694 12.8505C21.6253 13.2503 21.8752 13.7324 21.9611 14.2941C22.2414 16.1269 20.9492 17.3136 19.6623 17.8453C15.1296 19.7182 8.86992 19.7182 4.33722 17.8453C3.05031 17.3136 1.75812 16.1269 2.03843 14.2941C2.12435 13.7324 2.37428 13.2503 2.63009 12.8505C2.85849 12.4935 3.20144 12.0496 3.38247 11.7872C3.85814 11.0873 3.92752 10.3086 3.92761 9.27697Z"
      fill="currentColor"
    />
    <Path
      d="M14.7774 21.951C13.974 22.4563 13.0185 22.7477 11.9982 22.7477C10.978 22.7477 10.0225 22.4563 9.2191 21.951C8.50605 21.5026 8.14953 21.2784 8.27429 20.9057C8.39906 20.533 8.89102 20.5747 9.87494 20.6582C11.2821 20.7775 12.7143 20.7775 14.1215 20.6582C15.1054 20.5747 15.5974 20.533 15.7222 20.9057C15.8469 21.2784 15.4904 21.5026 14.7774 21.951Z"
      fill="currentColor"
    />
  </Svg>
);

export const MoreHorizontalIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2461 12C10.2461 11.0335 11.0296 10.25 11.9961 10.25H12.0051C12.9716 10.25 13.7551 11.0335 13.7551 12C13.7551 12.9665 12.9716 13.75 12.0051 13.75H11.9961C11.0296 13.75 10.2461 12.9665 10.2461 12Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.25 12C16.25 11.0335 17.0335 10.25 18 10.25H18.009C18.9755 10.25 19.759 11.0335 19.759 12C19.759 12.9665 18.9755 13.75 18.009 13.75H18C17.0335 13.75 16.25 12.9665 16.25 12Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 12C4.25 11.0335 5.0335 10.25 6 10.25H6.00898C6.97548 10.25 7.75898 11.0335 7.75898 12C7.75898 12.9665 6.97548 13.75 6.00898 13.75H6C5.0335 13.75 4.25 12.9665 4.25 12Z"
      fill="currentColor"
    />
  </Svg>
);

export const MoreVerticalIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.828 8c0-.644.522-1.167 1.167-1.167H8a1.167 1.167 0 0 1 0 2.334h-.006A1.167 1.167 0 0 1 6.828 8ZM6.823 12c0-.644.522-1.167 1.167-1.167h.006a1.167 1.167 0 1 1 0 2.334H7.99A1.167 1.167 0 0 1 6.823 12ZM6.833 4c0-.644.523-1.167 1.167-1.167h.006a1.167 1.167 0 0 1 0 2.334H8A1.167 1.167 0 0 1 6.833 4Z"
      fill="currentColor"
    />
  </Svg>
);

export const ShareIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 7C18.7745 7.16058 19.3588 7.42859 19.8284 7.87589C21 8.99181 21 10.7879 21 14.38C21 17.9721 21 19.7681 19.8284 20.8841C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8841C3 19.7681 3 17.9721 3 14.38C3 10.7879 3 8.99181 4.17157 7.87589C4.64118 7.42859 5.2255 7.16058 6 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M12.0253 2.00052L12 14M12.0253 2.00052C11.8627 1.99379 11.6991 2.05191 11.5533 2.17492C10.6469 2.94006 9 4.92886 9 4.92886M12.0253 2.00052C12.1711 2.00657 12.3162 2.06476 12.4468 2.17508C13.3531 2.94037 15 4.92886 15 4.92886"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CoinIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.5 13c3.59 0 6.5-.895 6.5-2s-2.91-2-6.5-2S9 9.895 9 11s2.91 2 6.5 2ZM22 15.5c0 1.105-2.91 2-6.5 2s-6.5-.895-6.5-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <Path
      d="M22 11v8.8c0 1.215-2.91 2.2-6.5 2.2S9 21.015 9 19.8V11M8.5 6c3.59 0 6.5-.895 6.5-2s-2.91-2-6.5-2S2 2.895 2 4s2.91 2 6.5 2ZM7 11c-2 0-4.63-.825-5-2m5 7c-2 0-4.63-.825-5-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <Path
      d="M7 21c-2 0-4.63-.826-5-2V4M15 7V4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ChevronLeftIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 12 20" fill="none" {...props}>
    <Path
      d="M0.610352 10.0068C0.615885 9.81315 0.654622 9.63607 0.726562 9.47559C0.798503 9.3151 0.90918 9.16016 1.05859 9.01074L9.37598 0.958984C9.61393 0.721029 9.90723 0.602051 10.2559 0.602051C10.4883 0.602051 10.6986 0.657389 10.8867 0.768066C11.0804 0.878743 11.2326 1.02816 11.3433 1.21631C11.4595 1.40446 11.5176 1.61475 11.5176 1.84717C11.5176 2.19027 11.3875 2.49186 11.1274 2.75195L3.60693 9.99854L11.1274 17.2534C11.3875 17.519 11.5176 17.8206 11.5176 18.1582C11.5176 18.3962 11.4595 18.6092 11.3433 18.7974C11.2326 18.9855 11.0804 19.1349 10.8867 19.2456C10.6986 19.3618 10.4883 19.4199 10.2559 19.4199C9.90723 19.4199 9.61393 19.2982 9.37598 19.0547L1.05859 11.0029C0.903646 10.8535 0.790202 10.6986 0.718262 10.5381C0.646322 10.3721 0.610352 10.195 0.610352 10.0068Z"
      fill="currentColor"
    />
  </Svg>
);

export const SendIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.5973 2.54257C21.1299 2.03918 20.397 1.85063 19.6968 1.78314C18.9611 1.71223 18.08 1.75939 17.1313 1.88382C15.2288 2.13337 12.9302 2.71102 10.7222 3.42176C8.51281 4.13295 6.35914 4.98865 4.74626 5.80847C3.94355 6.21648 3.24734 6.62932 2.74121 7.02586C2.48919 7.22331 2.25922 7.436 2.08623 7.66237C1.92123 7.87829 1.74764 8.18549 1.75002 8.55582C1.75629 9.5279 2.41829 10.2149 3.12327 10.676C3.84284 11.1467 4.77998 11.5014 5.71161 11.7792C6.65324 12.06 7.64346 12.2776 8.49473 12.454C8.55052 12.4655 8.66203 12.4886 8.79867 12.5168C9.31323 12.6231 9.57051 12.6763 9.81237 12.6039C10.0542 12.5315 10.2402 12.3456 10.612 11.9737L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31659 15.7071 9.70711L12.2745 13.1397C11.8954 13.5188 11.7059 13.7083 11.6342 13.9543C11.5624 14.2003 11.6203 14.4614 11.736 14.9837C12.1844 17.0084 12.5738 18.6815 12.9623 19.8071C13.1892 20.4645 13.4445 21.0336 13.7678 21.4533C14.1052 21.8913 14.5642 22.2222 15.1683 22.2489C15.5444 22.2655 15.8571 22.0938 16.0715 21.9344C16.2975 21.7666 16.51 21.5414 16.7071 21.2953C17.1031 20.8005 17.5192 20.1159 17.9332 19.3247C18.7652 17.7347 19.6462 15.6028 20.3917 13.4096C21.1368 11.2173 21.7577 8.9306 22.0568 7.0301C22.206 6.0823 22.2798 5.20207 22.2388 4.46477C22.1999 3.76556 22.0509 3.03106 21.5973 2.54257Z"
      fill="currentColor"
    />
  </Svg>
);

export const InfoIconCircular: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <Path
      d="M12.242 17v-5c0-.471 0-.707-.146-.854-.147-.146-.382-.146-.854-.146"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.992 8H12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DoubleMessageIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.228.846a12.22 12.22 0 0 0-.775-.013h-.906c-.378 0-.591 0-.775.013-2.64.182-4.742 2.267-4.926 4.887-.013.182-.013.394-.013.769v.045c0 .375 0 .587.013.769.066.933.375 1.799.865 2.535L.962 12.5l2.847-.819c.6.291 1.263.474 1.963.522.184.012.397.012.775.012h.906c.378 0 .591 0 .775-.012 2.641-.182 4.743-2.267 4.926-4.887.013-.182.013-.394.013-.77v-.044c0-.375 0-.587-.013-.769-.183-2.62-2.285-4.705-4.926-4.887ZM4.334 7.5h5.333v1H4.334v-1Zm0-2.667h3.333v1H4.334v-1Z"
      fill="currentColor"
    />
    <Path
      d="M3.744 12.567a5.311 5.311 0 0 0 4.028 2.303c.183.012.397.012.775.012h.906c.378 0 .591 0 .775-.012.7-.049 1.363-.231 1.963-.522l2.846.819-.748-2.65c.49-.735.8-1.601.865-2.534.012-.183.012-.394.012-.77V9.17c0-.375 0-.587-.012-.77a5.226 5.226 0 0 0-1.192-2.974c.01.083.017.166.023.25.015.212.015.45.015.794v.11c0 .345 0 .583-.015.795-.213 3.04-2.65 5.45-5.7 5.66-.213.015-.452.015-.8.015h-.97c-.349 0-.588 0-.8-.015a6.166 6.166 0 0 1-1.97-.467h-.001Z"
      fill="currentColor"
    />
  </Svg>
);

export const FlagIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M4 14v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <Path
      d="M4.009 4.422v10.28c1.694-1.683 4.776-2.33 7.637-.788 2.861 1.54 6.224 1.201 8.35.19V4.04c-1.824.844-4.644 1.482-7.858 0a7.41 7.41 0 0 0-8.125.375.01.01 0 0 0-.004.008Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </Svg>
);

export const CloseIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.1194 14.4L9.35999 8.64M9.3606 14.4L15.12 8.64"
      stroke="currentColor"
      strokeWidth="1.44"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.84 11.52C21.84 6.21806 17.5419 1.92 12.24 1.92C6.93808 1.92 2.64001 6.21806 2.64001 11.52C2.64001 16.8219 6.93808 21.12 12.24 21.12C17.5419 21.12 21.84 16.8219 21.84 11.52Z"
      stroke="currentColor"
      strokeWidth="1.44"
    />
  </Svg>
);

export const SunIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
      stroke="currentColor"
      strokeWidth="1.44"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MoonIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
      stroke="currentColor"
      strokeWidth="0.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// export const SearchIcon: React.FC<SvgProps> = (props) => (
//   <Svg viewBox="0 0 24 24" fill="none" {...props}>
//     <Path
//       d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
//       stroke="currentColor"
//       strokeWidth="0.1"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </Svg>
// );
