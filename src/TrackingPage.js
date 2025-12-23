import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Tracking.css'; 
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TrackingPage = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [calories, setCalories] = useState('');
  const [weight, setWeight] = useState('');
  const [trackingData, setTrackingData] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      fetchTrackingData();
    }
  }, [user]);

  const fetchTrackingData = async () => {
    try {
      const response = await axios.get(`https://fitness-tracking-website-backend-json.onrender.com/tracking?userId=${user.id}`);
      setTrackingData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fitness-tracking-website-backend-json.onrender.com/tracking', {
        userId: user.id,
        date,
        calories: parseInt(calories),
        weight: parseFloat(weight)
      });
      fetchTrackingData();
      setCalories('');
      setWeight('');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  
  const chartData = {
    labels: trackingData.map(item => item.date),
    datasets: [
      {
        label: 'Calories Burned',
        data: trackingData.map(item => item.calories),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Weight (kg)',
        data: trackingData.map(item => item.weight),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="tracking-container">
      <h1>Workout Tracking</h1>
      
      <form onSubmit={handleSubmit} className="tracking-form">
        <div className="form-group">
          <label>Date:</label>
          <input
          className='inputTracking'
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Calories Burned:</label>
          <input
          className='inputTracking'
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="Enter calories"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
          className='inputTracking'
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Save Data
        </button>
      </form>

      <div className="chart-container">
        <h2>Your Progress</h2>
        <Bar 
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top'
              },
              title: {
                display: true,
                text: 'Fitness Tracking Data'
              }
            }
          }}
        />
      </div>

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
};

export default TrackingPage;