import {
  showMessage as ShowToast,
  hideMessage,
} from 'react-native-flash-message';

export const showMessage = (message, type) => {
  ShowToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
  });
};
