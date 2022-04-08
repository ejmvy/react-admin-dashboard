import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>lamadmin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Delivery</span>
          </li>

          <p className='title'>USEFUL</p>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Notifications</span>
          </li>

          <p className='title'>SERVICE</p>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Settings</span>
          </li>

          <p className='title'>USER</p>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption' ></div>
        <div className='colorOption' ></div>


      </div>

    </div>

  )
}

export default sidebar