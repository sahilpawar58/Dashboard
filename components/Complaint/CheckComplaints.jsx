import React from 'react'
import { useContext,useState,useEffect } from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthContext'
import { API_URL } from '../../urlconfig';

function CheckComplaints() {
    const [complaints, setComplaints] = useState([]);
    const {user,village} = useContext(AuthContext);
    const data = {
        district:village[0].District,
        tehsil:village[0].Tehsil,
        village:village[0].name
    }

    useEffect(() => {
      // Fetch complaints data from API
      axios.post(`${API_URL}/api/v1/sensor/getcomplaints`,data)
        .then(response => {
          // Set complaints state with data from the response
          setComplaints(response.data.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []); // Empty dependency array to run effect only once
  
    return (
      <div className='pl-8'>
        <h2 className="text-2xl font-bold mb-4">Complaints Table</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-500">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Village</th>
                <th className="px-4 py-2">District</th>
                <th className="px-4 py-2">Tehsil</th>
                <th className="px-4 py-2">Complaint</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through complaints array and render each complaint as a table row */}
              {complaints.map(complaint => (
                <tr key={complaint._id} className="bg-white">
                  <td className="border px-4 py-2">{complaint.village}</td>
                  <td className="border px-4 py-2">{complaint.district}</td>
                  <td className="border px-4 py-2">{complaint.tehsil}</td>
                  <td className="border px-4 py-2">{complaint.complaint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default CheckComplaints