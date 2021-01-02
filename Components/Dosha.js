import React from 'react';
import Article from './Article';
import BoldText from './BoldText';


export default function UniverseConnection(){

    return (
      <Article heading={"The three Doshas in Ayurveda"} imgUrl={require('../assets/Dosha.jpg')}>
        Ayurveda states that the world is made up of five elements. Space (Ether), Air, Fire, Water and Earth constitue these elements. 
        These elements combine to form three doshas namely :{'\n\n'}

        {'\u2022'} <BoldText>Vata</BoldText> (Space + Air) {'\n'} 
        {'\u2022'} <BoldText>Pitta</BoldText> (Water + Fire) {'\n'}
        {'\u2022'} <BoldText>Kapha</BoldText> (Water + Earth) {'\n\n'}
        
        It is said that each individual is born with a unique composition (Ayurvedic Blueprint) of these three doshas. It is the displacement 
        from this composition, when an individual gets sick. 

      </Article>
    );
}