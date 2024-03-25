import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CountCT } from '../layout/client';
import Logo from './anh/Ddsgnr Library.png'
type Props = {
    title:string;
}

const Header = (props: Props) => {
  const [state,setState] = useContext(CountCT) as any
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <img src={Logo} alt="" />
  
    <div className="collapse navbar-collapse ml-[200px]" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      
    </div>
  </nav>
  )
}
export default Header;