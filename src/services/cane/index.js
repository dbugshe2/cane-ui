import axios from 'axios';

class CaneService {

  static async getCaneBySerialNumber(SN) {
    return await axios.get('https://eda25a46.ngrok.io/canes/', SN)
      .then(response => {
        console.log(response);
        return response.data
      })
      .catch(error => {
        console.error('Error during login:', error); 
      });
  }
  static async getCaneById(Id) {
    return await axios.get('http://0e28845a.ngrok.io/canes/'+ Id)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during login:', error); 
      });
  }

}

export default CaneService;
