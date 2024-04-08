import React from "react";

interface SocialLinkProps {
  url: string; // URL del enlace de la red social
  icon: React.ElementType; // Icono del enlace de la red social
}

// Definición del componente funcional SocialLink
const SocialLink = ({ icon: Icon, url }: SocialLinkProps) => {

  // Renderizado del componente SocialLink
  return (
    // Enlace social que se abre en una nueva pestaña
    <a href={url} target="_blank" rel="noopener noreferrer">

      {/* Contenedor del enlace social */}
      <div className="bg-customPurple hover:bg-customPurpleLight w-16 h-16 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 ease-in-out">

        {/* Círculo con fondo morado */}
        <div style={{ backgroundColor: '#6a0dad', borderRadius: '50%', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon className="w-11 h-11 text-white text-xl" /> {/* Icono del enlace social */}
        </div>
      </div>
    </a>
  );
};

export default SocialLink;