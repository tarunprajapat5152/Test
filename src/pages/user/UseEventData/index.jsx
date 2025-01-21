import { useState, useEffect } from 'react';
import { useGetUserHistoryMutation } from '../../../services/services'; 
import { jwtDecode } from 'jwt-decode';

const useEventData = (eventType) => {
  const [email, setEmail] = useState('');
  const [eventData, setEventData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const [fetchUserHistoryData] = useGetUserHistoryMutation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.sub;
        setEmail(userEmail);
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    } else {
      console.warn('Token not found in localStorage');
    }
  }, []);

  useEffect(() => {
    if (email) {
      const getData = async () => {
        setIsLoading(true); // Set loading to true before fetching data
        try {
          const res = await fetchUserHistoryData({ email }).unwrap();
          setEventData(res.data || []);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false); // Set loading to false after data is fetched
        }
      };
      getData();
    }
  }, [email, fetchUserHistoryData]);

  useEffect(() => {
    const today = new Date();
    if (eventType === 'upcoming') {
      setFilteredEvents(
        eventData.filter((event) => {
          const eventDateTime = new Date(`${event.startDate}T${event.eventStartTime}:00`);
          return eventDateTime > today; 
        })
      );
    } else if (eventType === 'history') {
      setFilteredEvents(
        eventData.filter((event) => {
          const eventDateTime = new Date(`${event.startDate}T${event.eventStartTime}:00`);
          return eventDateTime <= today; 
        })
      );
    }
  }, [eventData, eventType]);

  return { filteredEvents, isLoading };
};

export default useEventData;