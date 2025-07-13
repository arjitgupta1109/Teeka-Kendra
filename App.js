import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection";
import "./App.css";
function App() {
 return (
 <div className="app-container">
 <Navbar />
 <main className="content">
 <InfoSection />
 </main>
 <Footer />
 </div>
 );
}
export default App;
