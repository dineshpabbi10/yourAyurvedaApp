import React from 'react';
import Article from './Article';
import BoldText from './BoldText';


export default function FiveElements(){

    return (
      <Article heading={"The Five Elements of Nature"} imgUrl={require('../assets/fiveElements.jpg')}>
          Ayurveda says that there are five fundamental elements in nature which are present in both organic and inorganic matter. 
          The human body functioning and psychology is directly related to the five elements. 
          These five elements are as follow :{'\n\n'}

          {'\u2022'} <BoldText>Space : </BoldText> It is the first manifested element according to ayurveda. It refers to empty space 
          which is present everywhere without any limits. Humans need space to move, grow and communicate. Since the human is a small replica 
          of universe, space is also present inside human body. In body it refers to space in mouth, nose, respriratory system, abdoman etc. It 
          also has an important effect on our psychology. It gives a sense of peace, freedom and compassion which are positive in nature. Feeling 
          of separation ,emptiness, anxiety and fear are also a result of space. {'\n\n'}

          {'\u2022'} <BoldText>Air : </BoldText> Air is the formless element which cannot be seen but can be felt with touch. Air is clear and mobile. In human 
          body it relates to movements such as that of muscles, lung expansion/contraction and heart beat. Similarly thoughts, desires are born in our brain under 
          influence of air element. These thoughts further lead to feeling of happiness, joy and excitation. Air element is also responsible for fear, anxiety and nervousness.
          {'\n\n'}

          {'\u2022'} <BoldText>Fire : </BoldText> Edivent from its name, Fire is hot, dry and full of light.  Fire is thought to evolve from presence of space and air and hence comes at third in sequence of elements. 
          Heat, energy production is related to fire. In our solar system, Sun is 
          source of fire and light. It does not generate motion like air but its the presence of air in fire that generates mobility. 
          Fire within body represents the capacity to digest, ability to produce new ideas (sadhaka agni), ability of perception and the energy that invigorates the body. 
          It is also responsible for negative energies such as anger, hatred, criticism and competitiveness.
          {'\n\n'}

          {'\u2022'} <BoldText>Water : </BoldText> Water is the fourth element of the five elements found in nature. It comes fourth in sequence as it evolves from space, air and fire. 
          Space allows it to exist, it moves due to presence of air quality. Water is also known as the protector of body as it nourishes the body. In our body water performs many functions. It 
          protects mouth from the eating action, protects against enzyme that breaks down carbohydrate, protects stomach from our digestive acid. It also helps in the flow of neurological impulses. The fuild in 
          our joint protects for smooth motion. It protects our lungs from dryness. 
          {'\n\n'}

          {'\u2022'} <BoldText>Earth : </BoldText> This element represents the solid matter and the structure of the universe. Similarly, it provides form to the body of all creation including humans. 
          Earth element itself is formed as a result of combination of Space, Air, Fire and Water elements. Ayurveda calls the earth element as solidified conciousness. The various body solid structures such as bones, nails, teeth, hair and skin are derived from earth element. 
          It is said that the state of earth element within body and capacity to smell are deeply connected. Therefore, disorders of ability to smell reflect an imbalance of earth element. 
          When we smell, we take in the various scents produced by creations of earth. These scents indirectly effect us physically and emotionally by entering in body and mind. We regulate presence of earth element within our body through defection. If we suffer constipation, our 
          body has too much earth element which results in toxicity. If we have diarrhea, our body lacks earth element and leads to weakness.
          {'\n\n'}

      </Article>
    );
}