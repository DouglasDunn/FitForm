import axios from 'axios';

// Create Profile
export const createProfile = (profileData) => dispatch => {
  axios
    .post('/api/profile', profileData);
};
