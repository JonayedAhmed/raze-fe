export const apiErrorHandler = (err) => {
    var userFeedbackMessage = ""

    if (err?.response?.data?.message) {
        userFeedbackMessage = err?.response?.data?.message;
    } else if (err.message.includes('404')) {
        userFeedbackMessage = "User does not exist.";
    } else if (err.message.includes('422')) {
        userFeedbackMessage = "Login restricted for inactive employee.";
    } else if (err.message.includes('401')) {
        userFeedbackMessage = "Invalid username or password.";
    } else if (err.message.includes('500')) {
        userFeedbackMessage = "Sorry, an unexpected error occurred. Please try again or contact with the administrator.";
    }
    // 'ECONNABORTED' is the defined code by the axios library for server taking too long to respond
    else if (err.code === 'ECONNABORTED') {
        userFeedbackMessage = "Sorry, the server timed out. Please check your internet or contact with the administrator.";
    }
    // when server is shutdown, the axios library's error response contains message 'Network Error' and not status code
    else if (err.message === 'Network Error' && !err.status) {
        userFeedbackMessage = "Sorry, the server is down. Please contact with the administrator.";
    } else {
        userFeedbackMessage = "Sorry, there was an unexpected issue. Please try again or contact with the administrator.";
    }

    return [false, userFeedbackMessage];
} 