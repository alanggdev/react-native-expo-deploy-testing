import Svg, { Path } from 'react-native-svg';

const ChatIcon = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='icon icon-tabler icons-tabler-outline icon-tabler-message-circle'
    {...props}
  >
    <Path stroke='none' d='M0 0h24v24H0z' />
    <Path d='m3 20 1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48 3.255 2.777 3.695 7.266 1.029 10.501C16.608 19.942 11.659 20.922 7.7 19L3 20' />
  </Svg>
)

export default ChatIcon;
