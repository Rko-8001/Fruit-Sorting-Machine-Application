import LandingPage from "../sidePages/LandingPage";
import LoginPage from "../login/LoginPage";
import ErrorPage from "../otherPages/ErrorPage";
import SideBar from "../sidePages/sideBar/SideBar";
import SortCategory from "../home/sort/SortCategory";
import Disclaimer from "../home/other/Disclaimer";
import MachineHome from "../home/machine/MachineHome";
import Statistics from "../stats/Statistics";
import HowToUse from "../howToUse/HowToUse";
import FAQs from "../faq/FAQs";
import SessionStat from "../stats/SessionStat";
import StatAfterSessionEnded from "../stats/StatAfterSessionEnded";

export const HomePage = (
  <>
    <LandingPage />
  </>
);

export const AuthPage = (
  <>
    <LoginPage />
  </>
);

export const Dashboard = (
  <>
    <div className="flex">
      <SideBar />
      <SortCategory />
    </div>
  </>
);

export const Error404 = (
  <>
    <ErrorPage />
  </>
);

export const DisclaimerInfo = (
  <>
    <div className="flex">
      <SideBar />
      <Disclaimer />
    </div>
  </>
);

export const MachinePage = (
  <>
    <div className="flex">
      <SideBar />
      <MachineHome />
    </div>
  </>
);

export const OnGoingSessionStat = (
  <>
    <div className="flex">
      <SideBar />
      <StatAfterSessionEnded />
    </div>
  </>
)

export const HowToUsePage = (
  <>
    <div className="flex">
      <SideBar />
      <HowToUse />
    </div>
  </>
);

export const StatisticsPage = (
  <>
    <div className="flex">
      <SideBar />
      <Statistics />
    </div>
  </>
);

export const SessionStatPage = (
  <>
    <div className="flex w-full">
      <SideBar />
      <SessionStat />
    </div>
  </>
);

export const FAQsPage = (
  <>
    <div className="flex">
      <SideBar />
      <FAQs />
    </div>
  </>
);