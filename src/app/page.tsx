import React from 'react';
import InfoItem from './components/organisms/InfoItem';
import SkillBadge from './components/atoms/SkillIcon';
import SkillBar from './components/atoms/SkillBar';

const Home = () => {
  return (
    <div>
      <h1>Información</h1>
      <InfoItem label="Edad" value="25 años" />
      <InfoItem label="Ubicación" value="Ciudad" />
      
      <h1>Habilidades</h1>
      <SkillBadge label="React" />
      <SkillBar label="JavaScript" level={80} />
    </div>
  );
};

export default Home;