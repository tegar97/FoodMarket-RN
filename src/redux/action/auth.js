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
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        storeData('token', {
          value: token,
        });

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          console.log(photoForUpload);

          Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(resUpload => {
              console.log(resUpload);
              profile.profile_photo_url = `http://10.0.2.2:8000/storage/${resUpload.data.data[0]}`;
              storeData('userProfile', profile);
              navigation.reset({
                index: 0,
                routes: [{name: 'SuccessSignUp'}],
              });
            })
            .catch(err => {
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
              dispatch(setLoading(false));
              console.log('error', err);
            });
        } else {
          storeData('userProfile', profile);
          navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
        }

        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log(err.response);
        showMessage('err', err?.response?.data?.message);
      });
  };

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post('http://10.0.2.2:8000/api/login', form)
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(setLoading(false));
      storeData('token', {
        value: token,
      });
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      console.log('err', err);
    });
};
