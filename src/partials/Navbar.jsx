import { Phone } from "lucide-react"
import { Box } from "lucide-react"
import { User } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl space-x-1">
       <div className="avatar">
        <div className="w-6 rounded-lg">
            <img src="fotoku.jpg" alt="" />
        </div>
       </div>
        <span>Irunnn16</span>
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to={'/Profile'}>
        <User size={16}/>
        <span>Profile</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/Project'}>
        <Box size={16} />
        <span>Project</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/Contact'}>
        <Phone size={16} />
        <span>Contact</span>
        </NavLink>
      </li>
    </ul>
  </div> 
</div>      
    </div>
  )
}

export default Navbar
