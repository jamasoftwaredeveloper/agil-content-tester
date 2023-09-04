import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox.js';
import SearchResult from './components/SearchResult.js';
import SavedPeople from './components/SavedPeople.js';
import PersonInfo from './components/PeopleInfo.js';
import { fetchPeople} from './api/fetch.js';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [savedPeople, setSavedPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedPersonHistory, setSelectedPersonHistory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPeople(searchQuery);
      setSearchResults(data);
    };
    fetchData();
  }, [searchQuery]);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const theadTable = [
    { id: "1", value: "Name" },
    { id: "2", value: "Gender" },
    { id: "3", value: "Birth year" },
    { id: "4", value: "Eye color" },
    { id: "5", value: "Acción" }
  ];

  const handleSave = person => {
    setSavedPeople([...savedPeople, person]);
    setSelectedPersonHistory([...savedPeople, person])
    console.log('savedPeople', ...savedPeople);
    setSearchResults(searchResults.filter(result => result !== person));
  };

  const handleRemove = person => {
    setSavedPeople(savedPeople.filter(savedPerson => savedPerson !== person));
    setSearchResults([...searchResults, person]);
  };

  const handleSelect = person => {
    setSelectedPerson(person);
  };

  const handleGenderFilter = gender => {
    if (gender !== 'all') {
      setSavedPeople(selectedPersonHistory);
      setSavedPeople(savedPeople.filter(savedPerson => savedPerson.gender === gender));
    } else {
      setSavedPeople(selectedPersonHistory);
    }
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xs-12'>
          <div className="mt-2 mb-2">
            <SearchBox onSearch={handleSearch} />
          </div>
        </div>
        <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xs-12'>
          <div className='card'>
            <SearchResult results={searchResults} theadTable={theadTable} onItemSave={handleSave} onItemDetails={handleSelect} />
          </div>
        </div>
        <div className='col-12 col-sm-4 col-md-4 col-lg-4 col-xs-12'>
          <PersonInfo person={selectedPerson} />
        </div>
      </div>
      <div className="row">
        <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xs-12'>
          <SavedPeople savedPeople={savedPeople} onItemRemove={handleRemove} onItemDetails={handleSelect} onGenderFilter={handleGenderFilter} />
        </div>
      </div>

    </div >
  );
};

export default App;
