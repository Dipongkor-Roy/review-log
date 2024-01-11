import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user}=useState([])
    return (
        <div className=' text-gray-400 bg-gray-900 '>
               <nav className="navbar text-gray-400 bg-gray-900 nav m-0 px-5 shadow-mdshadow-lg">
        <div className="flex-1 mr-10">
          <Link to='/' className="ml-2 normal-case text-xl hover:text-green-500">Review Log</Link>
        </div>
        <div className="flex-none mr-[14px]">
          <ul tabIndex={0} className="menu menu-horizontal px-1 pborder hidden lg:flex">
             <li><Link to='/book'>Products</Link></li>
             <li><Link>About Us</Link></li>
             <li><Link>Blog</Link></li>
          </ul>
        </div>
        <div className='lg:mr-2 mr-0'>
          {
            user?.uid?
            <>
            <h2 className='text-cyan-600 mx-1 nameBorder'>{user?.displayName}</h2>
            <Link  className="btn btn-ghost normal-case  text-cyan-600 mx-1">Log Out</Link></>
            :
            <>
            <Link to='/logIn' className="text-lg normal-case hover:text-green-500  pr-4">LogIn</Link>
            <Link to='/signUp' className="inline-flex text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-lg">Sign Up</Link>
            </>
          }
          </div>
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"  onClick={()=>window.my_modal_1.showModal()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" ">
      <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box text-center">
      <li className="hover:bg-green-500 hover:text-white  my-1"><Link className="p-2" to='/book'>Products</Link></li>
             <li className="hover:bg-green-500 hover:text-white  my-1 "><Link className=" p-2">About Us</Link></li>
             <li className="hover:bg-green-500 hover:text-white  my-1"><Link className="p-2">Blog</Link></li>
             <div className="modal-action">
      <button className="btn hover:bg-green-500 hover:text-white  ">Close</button>
    </div>
  </form>
             </dialog>
      </ul>
      </div>
      </nav>
        </div>
    );
};

export default Header;