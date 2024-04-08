import React from "react";
import SocialLink from "../../atoms/SocialLink";

interface SidebarRightProps {
  links: { url: string; icon: React.ElementType }[]; // Lista de enlaces sociales con sus iconos
}

// Componente funcional SidebarRight
const SidebarRight = ({ links }: SidebarRightProps) => {

  // Renderizado del componente SidebarRight
  return (
    // Contenedor principal del sidebar derecho
    <div className="h-screen fixed right-0 w-1/12 bg-white">
      <div className="mt-24">
        <h3 className="text-2xl text-center font-bold">Links</h3> {/* Título de la sección de enlaces */}

        {/* Contenedor de los enlaces sociales */}
        <div className="mt-9 flex flex-col items-center space-y-4"> 

          {/* Mapeo de los enlaces sociales */}
          {links.map((link, index) => (
            <SocialLink key={index} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;