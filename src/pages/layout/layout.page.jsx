import { Outlet } from "react-router-dom";
import Header from "./partials/header.component";
import Footer from "./partials/footer.page";



const MainLayout = ()=>{
    return(
        <>
            <div className="mercado-clone-wrap">
                <div className="mercado-panels-actions-wrap">
                    <a className="mercado-close-btn mercado-close-panels" href="#">
                        x
                    </a>
                </div>
                <div className="mercado-panels" />
            </div>

            {/*header*/}
            <Header />

            {/* Content */}
            <Outlet />
            {/* / Content */}

            {/*footer*/}
            <Footer />

        </>
    );
}

export default MainLayout;