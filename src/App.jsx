import Navbar from "./Components/Navbar";
import HomeCard from "./Components/HomeCard";

function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[url('./src/assets/Sfondi/sfondoHome.jpg')] bg-cover bg-center"
    >
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <div className=" flex items-center justify-center min-h-screen">
        <HomeCard />
      </div>
    </div>
  );
}

export default App;
