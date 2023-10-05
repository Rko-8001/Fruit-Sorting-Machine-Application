import UpperNav from '../sidePages/navBar/UpperNav';
import LandingPage from '../sidePages/LandingPage';
import LoginPage from '../login/LoginPage';
import HomeDashboard from '../home/HomeDashboard';
import ErrorPage from '../otherPages/ErrorPage';

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

export const Error404 =
    <>
        <UpperNav />
        <ErrorPage />
    </>


