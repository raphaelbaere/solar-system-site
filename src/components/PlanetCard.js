import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const returnAlt = () => `Planeta ${planetName}`;
    return (
      <li>
        <div data-testid="planet-card">
          <p data-testid="planet-name">{planetName}</p>
          <img src={ planetImage } alt={ returnAlt() } />
        </div>
      </li>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: 'Could not find the planet name',
  planetImage: 'missing',
};

export default PlanetCard;
