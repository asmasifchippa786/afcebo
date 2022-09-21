import React from 'react'; //import react
import './navbar.css';//import css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import fontawsome liblary
import { faSearch,faUserFriends, faHome , faTv, faStore, faUsers, faBell, faEllipsisV, faCircleUser, faSun} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
  return (
    <nav className="navbar">
       <div className='logoBar'>
            <ul className="list">
                <li className="logo">
                    <a href="#"><FontAwesomeIcon icon={faFacebook}     /></a>                    
                </li>
                <li className="inputBar">
                <FontAwesomeIcon icon={faSearch} />
                    <input type="search" placeholder='Search facebook' className='input'/>
                </li>
            </ul>
       </div>
       <div className='iconBar'>
           <div>
            <FontAwesomeIcon className='icon' icon={faHome} />
            </div>
            <div>
            <FontAwesomeIcon style={{marginLeft : '100px'}} className='icon' icon={faUserFriends} />
            </div>
            <div>
            <FontAwesomeIcon style={{marginLeft : '100px'}} className='icon' icon={faTv} />
            </div>
            <div>
            <FontAwesomeIcon style={{marginLeft : '100px'}} className='icon' icon={faStore} />
            </div>
            <div>
            <FontAwesomeIcon style={{marginLeft : '100px'}} className='icon' icon={faUsers} />
            </div>
       </div>
       <div className='porfile'>
            <div className='icon1'>
            <FontAwesomeIcon icon={faSun} className='icon'/>
            </div>
            <div>
            <FontAwesomeIcon className='icon' icon={faBell} />
            </div>
            <div>
            <FontAwesomeIcon className='icon' icon={faFacebookMessenger} />
            </div>
            <div>
            <FontAwesomeIcon className='icon' icon={faCircleUser} />
            </div>
       </div>
    </nav>
  )
}

export default Navbar