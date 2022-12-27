import Wrapper from "../assets/wrappers/Navbar";
import {FaAlignLeft, FaUserCircle, FaCaretDown} from 'react-icons/fa'
import Logo  from "./Logo";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearStore, logoutUser, toggleSidebar } from "../features/user/userSlice";

const Navbar = ()=>{

    const {user} = useSelector((store)=>store.user);
    const dispathch = useDispatch();

    const toggle = ()=>{
        dispathch(toggleSidebar());
    }

    const [showLayout, setShowLayout] = useState(false);

    return (
        <Wrapper>
            <div className="nav-center">
                <button type="button" className="toggle-btn" onClick={()=>toggle()} >
                    <FaAlignLeft></FaAlignLeft>
                </button>
                <div>
                    <Logo></Logo>
                    <h3 className="logo-text" >dashboard</h3>
                </div>
                <div className="btn-container">
                    <button type="button" className="btn" onClick={()=>setShowLayout(!showLayout)}>
                        <FaUserCircle></FaUserCircle>
                        {user?.name}
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <div className={showLayout?'dropdown show-dropdown':'dropdown'} >
                        <button type="button" className="dropdown-btn" onClick={()=>dispathch(clearStore('Logging out...'))} >logout</button>
                    </div>
                </div>
            </div>
        </Wrapper>
        
    )
}

export default Navbar;