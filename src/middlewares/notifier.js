
import {DELETE_TODO, TOGGLE_COMPLETED, ADD_TODO} from '../constants';

export const messageMappings = {
  [DELETE_TODO]: 'Todo Deleted!!',
  [ADD_TODO]: 'New Todo added!!',
  [TOGGLE_COMPLETED]: 'Todo marked as completed!!'
};

export const notifier = store => next => action => {
  if (action.type in messageMappings) {
    createNotification(messageMappings[action.type]);
  }
  next(action);
};

function createNotification (message) {
  let notification;
  if (!('Notification' in window)) {
    alert('This browser does not support system notifications');
  } else if (Notification.permission === 'granted') {
    notification = new Notification(message);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === 'granted') {
        notification = new Notification(message);
      }
    });
  }

  if (notification) {
    setTimeout(notification.close.bind(notification), 5000);
  }
}
