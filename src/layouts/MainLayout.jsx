import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;