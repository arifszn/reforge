import { toast } from 'sonner';

enum NotificationType {
  ERROR = 'error',
  SUCCESS = 'success',
}

export const API_URL = `https://reqres.in/api`;

export const setPageTitle = (title: string) => {
  window.document.title = title;
};

const showNotification = (
  message = 'Something went wrong',
  type: NotificationType = NotificationType.ERROR,
  description?: string
) => {
  toast[type](message, {
    description: description,
  });
};

export const handleErrorResponse = (
  error: Error,
  callback?: () => void,
  errorMessage?: string
) => {
  console.error(error);

  if (errorMessage) {
    showNotification(errorMessage, NotificationType.ERROR);
  } else {
    errorMessage = 'Something went wrong';

    if (typeof error === 'string') {
      try {
        error = JSON.parse(error);
      } catch (error) {
        // do nothing
      }
    }

    if (error?.message) {
      errorMessage = error.message;
    }

    showNotification(errorMessage, NotificationType.ERROR);
  }

  if (callback) {
    return callback();
  }
};
