// StateDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function StateDetails() {
  const { id } = useParams();

  // Fetch state details based on the id
  // Render state details here

  return (
    <div>
      <h2>State Details</h2>
      <p>ID: {id}</p>
      {/* Render state details here */}
    </div>
  );
}

export default StateDetails;