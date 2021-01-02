import React from 'react';
import Article from './Article';
import BoldText from './BoldText';


export default function UniverseConnection(){

    return (
      <Article heading={"The Human-Cosmic Connection"} imgUrl={require('../assets/Connection.jpg')}>
        Humans are a creation of cosmic conciousness and can be categorized into two main energy forms : {"\n\n"}
              {'\u2022'} <BoldText>Purusha : </BoldText>This form of energy is related to existence. It does not create but witnesses the creations and happenings.  {'\n\n'}
              {'\u2022'} <BoldText>Prakruti : </BoldText>This energy has a form and has divine creative attributes. Creation of the universe happens when Purusha and Prakruti become one. Hence Prakruti is the Divine Mother. {'\n\n'}
              <BoldText>The Nature</BoldText> {'\n'}
              The manifestationof nature leads to developement of two expressions- Buddhi (Intelligence ) and Ahamkar (Ego). Ego is the sense of self-identity which helps us in acting and reacting. {'\n\n'}
              Ego expresses itself in three qualities : {'\n\n'}
              {'\u2022'} <BoldText>Sattva : </BoldText>Sattva refers to purity and clarity. The mind, the motor organs and the sensing organs are born due to Sattva. {'\n\n'}
              {'\u2022'} <BoldText>Rajas : </BoldText>Rajas relates to dynamic movements. Feeling and emotions are a result of Rajas gun. It is the force behind movement of organs. {'\n\n'}
              {'\u2022'} <BoldText>Tamas : </BoldText>Tamas leads to ignorance, confusion, inertia and heaviness. It also leads to creation of matter. It gives rise to five elements which lay the foundation of material creation. Those elements are space, air, fire, water and earth. {'\n\n'}

              Man is considered as a miniature cosmos ,that is, whatever is present in the universe is also present in human beings.
      </Article>
    );
}