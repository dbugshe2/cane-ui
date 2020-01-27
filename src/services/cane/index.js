import axios from 'axios';
import * as React from 'react'
const port = ''
const BASE_URL = process.env.REACT_APP_BASE_URL || '127.0.0.1:'+ port
class CaneService {

  static async getCaneBySerialNumber(SN) {
    return await axios.get('https://' + BASE_URL + '/canes/', SN)
      .then(response => {
        console.log(response);
        return response.data
        
      })
      .catch(error => {
        console.error('Error during login:', error); 
      });
  }
  static async getCaneById(Id) {
    return await axios.get('https://' + BASE_URL + '/canes/'+ Id)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during login:', error); 
      });
  }

}

export default CaneService;
