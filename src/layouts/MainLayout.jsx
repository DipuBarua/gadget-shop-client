import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=' container mx-auto'>
            <div>
                <Navbar></Navbar>
            </div>

            <div className=' min-h-screen'>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;