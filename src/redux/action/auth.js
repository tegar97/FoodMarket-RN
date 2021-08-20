import Axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import {storeData} from '../../utils';
import {setLoading} from './global';
const API_HOST = {
  url: 'http://10.0.2.2:8000/api',
};
export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        storeData('userProfile', res.data.data.user);
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        storeData('token', {
          value: token,
        });

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          }).catch(err => {
            dispatch(setLoading(false));
          });
        }
        dispatch(setLoading(false));
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log(err.response);
        showMessage('err', err?.response?.data?.message);
      });
  };
