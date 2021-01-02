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
        from this composition, when an individual gets sick. One should consult with an Ayurvedic practitioner to find one's dosha composition. {'\n\n'}

        <BoldText>Overview of three doshas</BoldText>{'\n\n'}
        <BoldText>Vata : </BoldText>This dosha is result of combination air and space elements. It is described with cold, dryness, spacious and lightness. In terms of weather, Autumn represents the Vata dosha. 
        People with high Vata dosha are usually slim, energetic (cannot sit free) and are highly creative with work. They are moody and can be easily distracted. They need to surround themselves with good people, follow 
        good diet and need suitable weather as these factors highly effect their mood.{'\n\n'}

        <BoldText>Strenghts :</BoldText> They are creative and multitasker, they are full of compassion , love to take on new challenges and they learn quickly. {'\n\n'}
        <BoldText>Weaknesses :</BoldText> They are moody, often suffer from digestive issues, can suffer of variations in appetite. Their sleep can often get easily disturbed and can get anxious.{'\n\n'}
        <BoldText>Recommendations :</BoldText> Follow regular routine, try to stay calm, do meditation, keep body warm , avoid cold weather and food.

      </Article>
    );
}