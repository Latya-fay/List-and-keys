import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

// Import project data
import user from "../data/user";
import projects from "../data/projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />

      {/* Pass project data to ProjectList */}
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
