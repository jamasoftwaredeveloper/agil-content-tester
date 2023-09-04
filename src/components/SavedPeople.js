import React from 'react';
import { ButtonPrimary, StyledSelect, H2 } from '../css/style.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const SavedPeople = ({ savedPeople, onItemRemove, onItemDetails, onGenderFilter }) => {
  const genders = [...new Set(savedPeople.map(person => person.gender))];
  const handleGenderFilter = (event) => {
    onGenderFilter(event.target.value);
  };

  return (
    <div>
      <H2>Saved People</H2>
      <StyledSelect onChange={handleGenderFilter}>
        <option value="all">All</option>
        {genders.map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </StyledSelect>
      <div className='row'>
        {savedPeople.map((person, key) => (
          <div key={key} className='card col-12 col-sm-3 col-md-3 col-lg-3 col-xs-12 mt-2 ml-2 mr-2'>
            <div>
              <img className="card-img-top mt-2" src={`https://starwars-visualguide.com/assets/img/characters/${person.url.match(/(\d+)/)[0]}.jpg`} alt={person.name} />
              <div>{person.name}</div>
              <div className='card-footer'>
                <ButtonPrimary onClick={() => onItemRemove(person)}>Remove</ButtonPrimary>
                <ButtonPrimary onClick={() => onItemDetails(person)}>Details</ButtonPrimary>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPeople;
