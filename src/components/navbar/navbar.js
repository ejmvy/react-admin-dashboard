import './navbar.scss'
import { SearchOutlined, ChatBubbleOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined } from '@mui/icons-material';

const navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlined />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlined className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeOutlined className='icon' />
          </div>
          <div className='item'>
            <FullscreenExitOutlined className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneOutlined className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlined className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListOutlined className='icon' />
          </div>
          <div className='item'>
            <img src='https://thumbs.dreamstime.com/b/female-user-profile-avatar-woman-character-screen-saver-emotions-website-mobile-app-design-vector-199001739.jpg' alt='Avatar' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar