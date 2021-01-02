import React from 'react';
import Article from './Article';
import BoldText from './BoldText';


export default function UniverseConnection(){

    return (
      <Article heading={"About / Notice"} imgUrl={require('../assets/About.jpg')}>
          <BoldText>NOTICE</BoldText>{'\n'}
          The sole purpose of this app is to provide information about the tradition of health care and ayurveda. This information is not intended for use in the diagnosis, treatment, cure or prevention of any disease. If you have any serious acute or chronic health concern, please consult a trained health professional who can fully assess your needs and address them effectively. Check with your doctor before taking herbs or using essential oils when pregnant or nursing. {'\n\n'}
          <BoldText>Why I made this app</BoldText>{'\n'}
          2020 was a strange year where health became a focus throughout the globe. It was at this time I started reading about ayurveda and how it can help improving health and daily lifestyle. Coincidently, I am also a software developer, 
          So I thought of documenting everything I read, not into any notebook but in the form of application. Hence this application was born.
      </Article>
    );
}
