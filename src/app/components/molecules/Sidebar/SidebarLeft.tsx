import React from "react";
import SkillBar from "../../atoms/SkillBar";
import SkillIcon from "../../atoms/SkillIcon";
import InfoItem from "../../organisms/InfoItem";

interface SidebarLeftProps {
  name: string; // Nombre del usuario
  role: string; // Rol del usuario
  age: number; // Edad del usuario
  residence: string; // Residencia del usuario
  email: string; // Correo electrónico del usuario
  nationality: string; // Nacionalidad del usuario
  languages: { label: string; level: number; color?: string }[]; // Lista de idiomas del usuario
  programming: { label: string; level: number; color?: string }[]; // Lista de lenguajes de programación del usuario
  skills: { label: string }[]; // Lista de habilidades extra del usuario
}

// Componente funcional SidebarLeft
const SidebarLeft = ({
  name,
  role,
  age,
  residence,
  email,
  nationality,
  languages,
  programming,
  skills,
}: SidebarLeftProps) => {

  // Renderizado del componente SidebarLeft
  return (
    // Contenedor principal del sidebar izquierdo
    <div className="h-screen fixed top-0 p-4 w-1/4 bg-white">
      
      {/* Sección de la foto y nombre del usuario */}
      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mt-1">
        <img
          src="../../../../../images/foto.jpg"
          alt="Mi foto"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center mt-3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 mt-1">{role}</p>
      </div>

      {/* Información personal del usuario */}
      <div className="mt-4 mx-auto" style={{ maxWidth: "75%" }}>
        <InfoItem label="Edad:" value={age.toString() + " años"} />
        <InfoItem label="Residencia:" value={residence} />
        <InfoItem label="Correo:" value={email} color="#6a0dad" />
        <InfoItem label="Nacionalidad:" value={nationality} />

        {/* Sección de idiomas */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">Idiomas</h3>
          {languages.map((language, index) => (
            <SkillBar
              key={index}
              label={language.label}
              level={language.level}
              color={language.color}
            />
          ))}
        </div>

        {/* Sección de lenguajes de programación */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">Lenguajes de programación</h3>
          {programming.map((program, index) => (
            <SkillBar
              key={index}
              label={program.label}
              level={program.level}
              color={program.color}
            />
          ))}
        </div>

        {/* Sección de habilidades extra */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">Habilidades extra</h3>
          {skills.map((skill, index) => (
            <SkillIcon key={index} label={skill.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;