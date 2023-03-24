// ./components/Pokemon.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pokemon.css';
import { pokemonType } from '../types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image, id } = pokemon;
    return (
      <div className="pokemon">
        <div className="pokemon-overview">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {
              `Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`
            }
          </p>
          <Link to={ `/pokemon/${id}` }>Details</Link>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default Pokemon;
