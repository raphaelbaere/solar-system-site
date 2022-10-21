import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';
import planets from './data/planets';

class App extends React.Component {
  render() {
    const planetsLists = planets.map((planet, index) => (
      <PlanetCard key={ index } planetName={ planet.name } planetImage={ planet.image } />
    ));
    return (
      <div>
        <Header />
        <SolarSystem />
        <ul>
          {planetsLists}
        </ul>
      </div>
    );
  }
}

export default App;
