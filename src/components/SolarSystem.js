import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const planetsLists = planets.map((planet, index) => (
      <PlanetCard key={ index } planetName={ planet.name } planetImage={ planet.image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planetsLists}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
