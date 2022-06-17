import AllCourses from "./AllCourses";
import Footer from "./footer";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import { Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import MyCourse from "./MyCourse";
import Profile from "./Profile";
import Settings from "./Settings";

export default function MainZone() {
  return (
    <>
      <div class="flex bg-white">
        <Sidebar />
        <main class="min-h-screen w-full bg-white border-l">
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AllCourses" element={<AllCourses />} />
            <Route exact path="/MyCourse" element={<MyCourse />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/Settings" element={<Settings />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  );
}
