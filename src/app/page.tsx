import React from "react";
import SidebarLeft from "./components/molecules/Sidebar/SidebarLeft";

const Page = () => {
  const sidebarData = {
    name: "Daniela V.",
    role: "Full stack",
    age: 25,
    residence: "Medellín",
    email: "daniela.vasquezl1@udea.edu.co",
    nationality: "Colombiana",
    languages: [
      { label: "Inglés", level: 80 },
      { label: "Español", level: 100 },
    ],
    programming: [
      { label: "JavaScript", level: 90 },
      { label: "Python", level: 70 },
    ],
    skills: [{ label: "Habilidad 1" }, { label: "Habilidad 2" }],
  };

  return (
    <div>
      <SidebarLeft {...sidebarData} />
    </div>
  );
};

export default Page;