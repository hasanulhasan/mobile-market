import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserControl/Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    console.log('clicked');
    logOut()
      .then(() => { })
      .catch(err => console.error(err))
  }
  const menuLinks = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/allCategories'>All Category</Link></li>
    {
      user?.uid ?
        <>
          <li><Link to='/dashboard'>DashBoard</Link></li>
          <li><button onClick={handleSignOut}>Logout</button></li>
        </>
        :
        <><li><Link to='/login'>Login</Link></li></>
    }
  </React.Fragment>

  return (
    <div className="navbar bg-base-100 flex justify-between h-24 font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuLinks}
          </ul>
        </div>

        <Link to='/' className="btn btn-ghost normal-case text-xl"><img src="https://cdn-icons-png.flaticon.com/512/2482/2482945.png" alt="" className='h-8 w-10' />Mobile Market</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;