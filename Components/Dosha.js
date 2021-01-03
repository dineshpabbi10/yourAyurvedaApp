import React from 'react';
import Article from './Article';
import BoldText from './BoldText';


export default function UniverseConnection(){

    return (
      <Article heading={""} imgUrl={require('../assets/Dosha.jpg')}>
        Ayurveda states that the world is made up of five elements. Space (Ether), Air, Fire, Water and Earth constitue these elements. 
        These elements combine to form three doshas namely :{'\n\n'}

        {'\u2022'} <BoldText>Vata</BoldText> (Space + Air) {'\n'} 
        {'\u2022'} <BoldText>Pitta</BoldText> (Water + Fire) {'\n'}
        {'\u2022'} <BoldText>Kapha</BoldText> (Water + Earth) {'\n\n'}
        
        It is said that each individual is born with a unique composition (Ayurvedic Blueprint) of these three doshas. It is the displacement 
        from this composition, when an individual gets sick. One should consult with an Ayurvedic practitioner to find one's dosha composition. {'\n\n'}

        <BoldText>Overview of three doshas</BoldText>{'\n\n'}

        {/* Vata Dosha */}
        <BoldText>Vata Dosha : </BoldText>This dosha is result of combination of air and space elements. It is described with cold, dryness, spacious and lightness. In terms of weather, Autumn represents the Vata dosha. 
        People with high Vata dosha are usually slim, energetic (cannot sit free) and are highly creative with work. They are moody and can be easily distracted. They need to surround themselves with good people, follow 
        good diet and need suitable weather as these factors highly effect their mood.{'\n\n'}

        <BoldText>Strenghts {'\n'}</BoldText>They are creative and multitasker, they are full of compassion , love to take on new challenges and they learn quickly. {'\n\n'}
        <BoldText>Weaknesses {'\n'}</BoldText>They are moody, often suffer from digestive issues, can suffer of variations in appetite. Their sleep can often get easily disturbed and can get anxious.{'\n\n'}
        <BoldText>Recommendations {'\n'}</BoldText>Follow regular routine, try to stay calm, do meditation, keep body warm , avoid cold weather and food. {'\n\n'}
        
        {/* Pitta Dosha */}
        <BoldText>Pitta Dosha : </BoldText> This dosha is result of combination of fire and water. It is described with hotness, sharpness, oily, liquid and mobile nature. Summer is referred to as pitta season for hot temperatures. 
        People with pitta dosha usually are aggresive, competitive, goal-oriented and are muscular/athletic in body build. They are usually very intelligent and determined people. {'\n\n'}

        <BoldText>Strenghts {'\n'}</BoldText>As mentioned before, they are self-motivated, competitive, quick to learn, leaders and have strong metabolism. They have strong body circulation and usually have healthy skin.{'\n\n'}
        <BoldText>Weaknesses {'\n'}</BoldText>Since they are aggresive, they can get into conflicts. They can experience mood swings when hungry, can get hungry quickly, can suffer from acne and hot temperatures are usually not suitable to them. They should aboid oily food.{'\n\n'}
        <BoldText>Recommendations {'\n'}</BoldText>Avoid excessive oily food and salt, Avoid heat, focus on work-life balance and drink cool drinks (not iced).{'\n\n'}

        {/* Kapha Dosha */}
        <BoldText>Kapha Dosha : </BoldText> Kapha dosh is a result of combination of earth and water elements. It is described with snow, cold, stability and steadyness. Spring is categorized as Kapha season as it represents the world coming out of hibernation. 
        People with Kapha dosha are categorized as calm, well-thought people and caring. They usually have strong/thick bones and they like to lead life in peaceful manner.{'\n\n'}

        <BoldText>Strenghts {'\n'}</BoldText>They are caring, patient, calm , happy going people. THey have strong immunity, bones.{'\n\n'}
        <BoldText>Weaknesses {'\n'}</BoldText>Due to their slow nature, their metabolism is slow as well. They can easily gain weight and become obese. They can need regular motivation to work well.{'\n\n'}
        <BoldText>Recommendations {'\n'}</BoldText> They should exercise daily, Eat light food, avoid heavy food, avoid dairy food and avoid oily food.{'\n\n'}



      </Article>
    );
}