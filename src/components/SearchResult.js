import React from 'react';
import { ButtonPrimary } from '../css/style.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchResult = ({ results,theadTable,onItemSave, onItemDetails }) => {
  return (
    <div>
      {
        results.length>0?
        <div className="table-responsive">
        <table className='table table-striped'>
          <thead>
            <tr>
            {theadTable.map((result,key) => (
              <th key={key}>{result.value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.url}>
                <td>{result.name}</td>
                <td>{result.gender}</td>
                <td>{result.birth_year}</td>
                <td>{result.eye_color}</td>
                <td><ButtonPrimary onClick={() => onItemDetails(result)}>Show detail</ButtonPrimary>
                  <ButtonPrimary onClick={() => onItemSave(result)}>Save</ButtonPrimary></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:<h4 className='text-warning'><b>Loading...</b></h4>
      }
  
    </div>);
};

export default SearchResult;
