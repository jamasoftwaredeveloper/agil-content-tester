import React from "react";
import { H2 } from '../css/style.js';

const PersonInfo = ({ person }) => {
  if (!person) {
    return <div> <H2>Information about ...</H2>Choose someome to get more information about!.</div>;
  }
  return (
    <div >
      <H2>Information about ...</H2>
        <div className="card" >
        <img className="card-img-top" style={{height: "17rem"}} src={`https://starwars-visualguide.com/assets/img/characters/${person.url.match(/(\d+)/)[0]}.jpg`} alt={person.name} />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <div>
              <strong>Height: </strong>
              <span>{person.height}</span>
            </div>
            <div>
              <strong>Mass:</strong>
              <span>{person.mass}</span>
            </div>
            <div>
              <strong>Hair color:</strong>
              <span>{person.hair_color}</span>
            </div>
            <div>
              <strong>Skin color:</strong>
              <span>{person.skin_color}</span>
            </div>
            <div>
              <strong>Eye color:</strong>
              <span>{person.eye_color}</span>
            </div>
            <div>
              <strong>Birth year:</strong>
              <span>{person.birth_year}</span>
            </div>
            <div>
              <strong>Gender:</strong>
              <span>{person.birth_year}</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PersonInfo;

