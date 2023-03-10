import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";



const SharedLayout = ()=>{

    return (
        <Wrapper>
            <main className="dashboard" >
                <SmallSidebar></SmallSidebar>
                <BigSidebar></BigSidebar>
                <div>
                    <Navbar></Navbar>
                    <div className="dashboard-page" >
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
        </Wrapper>
    )

}


export default SharedLayout;