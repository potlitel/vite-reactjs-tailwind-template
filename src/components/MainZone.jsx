import AllCourses from "./AllCourses";
import Footer from "./footer";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import { Routes, Route, Link} from "react-router-dom";
import Home from "./Home";

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
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  );
}
