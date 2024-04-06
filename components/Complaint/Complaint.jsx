import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';

function Dropdownvillage({ url,data, label, onSelect }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const dataparam = {
    tehsil: data.toLowerCase()
  };

  useEffect(() => {
    // Fetch data from API
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
      },
      body: JSON.stringify(dataparam)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setOptions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
        setLoading(false);
      });
  }, [url]);

  const handleOptionChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="dropdown">{label}:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange} disabled={loading}>
        {loading ? (
          <option value="">Loading...</option>
        ) : (
          <>
            <option value="">Select an option</option>
            {options.map(option => (
              <option key={option._id} value={option.name}>
                {option.name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
}

function Dropdownpost({ url,data, label, onSelect }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const dataparam = {
    district: data.toLowerCase()
  };

  useEffect(() => {
    // Fetch data from API
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
      },
      body: JSON.stringify(dataparam)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setOptions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
        setLoading(false);
      });
  }, [url]);

  const handleOptionChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="dropdown">{label}:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange} disabled={loading}>
        {loading ? (
          <option value="">Loading...</option>
        ) : (
          <>
            <option value="">Select an option</option>
            {options.map(option => (
              <option key={option._id} value={option.tehsil}>
                {option.tehsil}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
}

function Dropdown({ url, label, onSelect }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch data from API
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setOptions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
        setLoading(false);
      });
  }, [url]);

  const handleOptionChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="dropdown">{label}:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange} disabled={loading}>
        {loading ? (
          <option value="">Loading...</option>
        ) : (
          <>
            <option value="">Select an option</option>
            {options.map(option => (
              <option key={option._id} value={option.district}>
                {option.district}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
}


function Complaint() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedTehsil, setSelectedTesil] = useState('');
  const [selectedVillage,setSelectedVillage] = useState('');
  const selectedComplaint = useRef(null);

  const handleDistrictChange = value => {
    setSelectedDistrict(value);
  };

  const handleTehsilChange = value => {
    setSelectedTesil(value);
  };

  const handleVillageChange = value => {
    setSelectedVillage(value);
  };

  

  const handleClick = () => {
    const data = {
      district:selectedDistrict,
      tehsil:selectedTehsil,
      village:selectedVillage,
      complaint:selectedComplaint?.current?.value
    };
    
    // Replace 'your_api_endpoint' with your actual API endpoint
    axios.post('http://localhost:3000/api/v1/sensor/makecomplaint',data, {
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
      }
    })
    .then(response => {
      // Handle successful response
      console.log('Response:', response);
      const responseData = response.data;
      const message = `Complaint submitted successfully!`;
    // You can do more with the response data here

    // Show the response message to the user (for example, using alert)
      alert(message);
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  }
  
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
    <div className="h-auto w-96">
    <div className="flex flex-col space-y-4">
  <Dropdown
    url="http://localhost:3000/api/v1/geojson/getdistricts"
    label="Select District"
    onSelect={handleDistrictChange}
  />
  
  {selectedDistrict && (
    <Dropdownpost
      url="http://localhost:3000/api/v1/geojson/gettehsils"
      label="Select Tehsil"
      data={selectedDistrict}
      onSelect={handleTehsilChange}
    />
  )}

  {selectedTehsil && (
    <Dropdownvillage
      url="http://localhost:3000/api/v1/geojson/getvillages"
      label="Select Tehsil"
      data={selectedTehsil}
      onSelect={handleVillageChange}
    />
  )}

  <div className="flex flex-col space-y-2">
    <p className="text-lg">Selected District: {selectedDistrict}</p>
    <p className="text-lg">Selected Tehsil: {selectedTehsil}</p>
    <p className="text-lg">Selected Village: {selectedVillage}</p>
  </div>

  <textarea
    ref={selectedComplaint}
    className="border border-gray-300 rounded-lg p-2"
    placeholder="Enter your complaint..."
  ></textarea>

  <button
    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
    onClick={handleClick}
  >
    Submit
  </button>
</div>
</div>
</div>
  );
}

export default Complaint;
