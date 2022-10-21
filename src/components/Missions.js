import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionCardLists = missions.map((mission, i) => (
      <MissionCard
        key={ i }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          {missionCardLists}
        </ul>
      </div>
    );
  }
}

export default Missions;
