import React, { useState, createRef  } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.jsx';
import '../style/Navbar.scss';
import { IconButton, Tooltip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const NavBar = () => {

	const wrapperRef = createRef();
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className="navbar">
				<Link to="#" className='menu-bars'>
						<Tooltip title="Show Menu">
							<IconButton>
								<MenuIcon onClick={showSidebar}  />
							</IconButton>
						</Tooltip>
				</Link>
			</div>

			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
				<ul className='nav-menu-items' onClick={showSidebar}	> 
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
						<Tooltip title="Menu Close">
							<IconButton>
								<ChevronLeftIcon   />
							</IconButton>
						</Tooltip>
						</Link>
					</li>
					{SidebarData.map((listNav, index) => {
						return (
							<li key={index} className= {listNav.cName}>
									<Link to={listNav.path}>
										<Tooltip title={listNav.title}>
											<IconButton>
												{listNav.icon}
											</IconButton>
										</Tooltip>
										<span>{listNav.title}</span>
									</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)

}

export default NavBar;