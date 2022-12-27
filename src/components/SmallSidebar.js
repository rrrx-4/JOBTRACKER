import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { toggleSidebar } from "../features/user/userSlice";
import { store } from "../store";
import links from "../utils/links";
import Logo from "./Logo";
import NavLinks from "./NavLinks";


const SmallSidebar = ()=>{

    const {isSidebarOpen} = useSelector((store)=>store.user)

    const dispatch = useDispatch();

    const toggle = ()=>{
        dispatch(toggleSidebar());
    }

    return (
        <Wrapper>
            <div className={isSidebarOpen?'sidebar-container show-sidebar':'sidebar-container'} >
                <div className="content">
                    <button className="close-btn" onClick={toggle} >
                        <FaTimes></FaTimes>
                    </button>
                    <header>
                        <Logo></Logo>
                    </header>
                    <NavLinks toggleSidebar={toggle} ></NavLinks>
                </div>
            </div>
        </Wrapper>
        
    )

}

export default SmallSidebar;