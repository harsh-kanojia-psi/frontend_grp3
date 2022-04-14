import { faAddressCard, faArrowAltCircleLeft, faEdit, faFileLines, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase, faCircleNodes, faDownLeftAndUpRightToCenter, faDownload, faEllipsis, faEllipsisV, faGear, faGears, faGraduationCap, faInfoCircle, faSuitcase, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Sidebar.css'

function Sidebar(props) {
	return (
		<aside className="sidebar">
			<div className="icon">
            <Link className="iconn" to="/MainSection"><FontAwesomeIcon icon={faArrowAltCircleLeft} /></Link>
			<h1 className="projectName">Resume Builder</h1>
            
        	</div>
			<div className="middleicon">
			<Link  to="/MainSection"><FontAwesomeIcon icon={faEdit}/></Link>
			<Link  to="/MainSection"><FontAwesomeIcon icon={faShareFromSquare}/></Link>
			<Link  to="/MainSection"><FontAwesomeIcon icon={faFileLines}/></Link>
			<Link  to="/MainSection"><FontAwesomeIcon icon={faDownload}/></Link>
			<Link  to="/MainSection"><FontAwesomeIcon icon={faEllipsisV}/></Link>
			</div>
			<div className="linkbutton" >
			<Link className='btn' to="/mydetails" ><button type="button" class="btn btn-outline-secondary" ><FontAwesomeIcon icon={faAddressCard} />MyDetails</button></Link>
				<Link className='btn' to="/AboutMe"><button type="button" class="btn btn-outline-secondary"><FontAwesomeIcon icon={faInfoCircle} />AboutMe</button></Link>
				<Link className='btn' to="/skills"><button type="button" class="btn btn-outline-secondary"><FontAwesomeIcon icon={faGears} />Skills & Profficiency</button></Link>
				<Link className='btn' to="/workexp"><button type="button" class="btn btn-outline-secondary"><FontAwesomeIcon icon={faBriefcase} />Work Experience</button></Link>
				<Link className='btn' to="/education"><button type="button" class="btn btn-outline-secondary"><FontAwesomeIcon icon={faGraduationCap} />Educational Background</button></Link>
				<Link className='btn' to="/achievements"><button type="button" class="btn btn-outline-secondary"><FontAwesomeIcon icon={faTrophy} />Achievements</button></Link>
				<Link className='btn' to="/memberships"><button type="button" class="btn btn-outline-secondary"><FontAwesomeIcon icon={faCircleNodes} />Memberships</button></Link>
				</div>
		</aside>
	)
}

export default Sidebar