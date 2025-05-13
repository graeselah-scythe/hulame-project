import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import UserNavbar from './Components/Navbar/UserNavbar';
import AdminNavbar from './Components/Navbar/AdminNavbar';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import RentNow from './Pages/RentNow';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Rentals from './Pages/Rentals';
import Post from './Pages/Post';
import Profile from './Pages/Profile';
import ProfileRentalPost from './Pages/ProfileRentalPost';
import ProfileEarnings from './Pages/ProfileEarnings';
import AdminForm from './Pages/AdminForm';
import AdminDashboard from './Pages/AdminDashboard';
import AdminConfirmation from './Pages/AdminConfirmation';
import AdminUserManagement from './Pages/AdminUserManagement';
import NotFound from './Pages/NotFound'; // ✅ 404 Page
import CheckoutPage from './Pages/CheckoutPage';

function AppContent() {
  const location = useLocation();

  const hideNavbarAndFooterRoutes = ['/login', '/register', '/admin', '/admin-page', '/post'];
  const adminRoutes = ['/admin-dashboard', '/admin-confirmation', '/admin-management'];

  const shouldHideNavbarAndFooter = hideNavbarAndFooterRoutes.includes(location.pathname);
  const isAdminRoute = adminRoutes.includes(location.pathname);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading delay
    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      {!shouldHideNavbarAndFooter && (
        isAdminRoute ? (
          <AdminNavbar />
        ) : isLoggedIn ? (
          <UserNavbar />
        ) : (
          <Navbar />
        )
      )}

      <Routes>
        <Route path='/' element={<RentNow />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<AdminForm />} />
        <Route path='/rental-section' element={<Rentals />} />
        <Route path='/post' element={<Post />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/rental-post' element={<ProfileRentalPost />} />
        <Route path='/earnings' element={<ProfileEarnings />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/admin-confirmation' element={<AdminConfirmation />} />
        <Route path='/admin-management' element={<AdminUserManagement />} />
        <Route path='/checkout' element={<CheckoutPage />} />
       
        
        {/* 404 fallback route */}
        <Route path='*' element={<NotFound />} />
      </Routes>

      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
