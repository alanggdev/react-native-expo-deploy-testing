import Svg, { Path } from 'react-native-svg';

const NotificationIcon = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='icon icon-tabler icons-tabler-outline icon-tabler-bell-ringing'
    {...props}
  >
    <Path stroke='none' d='M0 0h24v24H0z' />
    <Path d='M10 5a2 2 0 0 1 4 0 7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6M9 17v1a3 3 0 0 0 6 0v-1M21 6.727A11.05 11.05 0 0 0 18.206 3M3 6.727A11.05 11.05 0 0 1 5.792 3' />
  </Svg>
)

export default NotificationIcon;
