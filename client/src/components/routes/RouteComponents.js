import UpperNav from '../sidePages/navBar/UpperNav';
import LandingPage from '../sidePages/LandingPage';
import LoginPage from '../login/LoginPage';
import HomeDashboard from '../home/HomeDashboard';

export const HomePage = 
    <>
        <UpperNav />
        <LandingPage />
    </>

export const AuthPage =
    <>
        <UpperNav />
        <LoginPage />
    </>

export const Dashboard =
    <>
        <UpperNav />
        <HomeDashboard />
    </>
