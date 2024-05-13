// Function to check if session identifier exists in local storage
function getSessionIdentifier() {
    // Check if session identifier exists in local storage
    let sessionIdentifier = localStorage.getItem('sessionId');
    
    // If session identifier doesn't exist, generate a new one
    if (!sessionIdentifier) {
        sessionIdentifier = generateSessionId();
        // Store the session identifier in local storage
        localStorage.setItem('sessionId', sessionIdentifier);
    }
    
    return sessionIdentifier;
}

// Function to generate a new session identifier
function generateSessionId() {
    // Generate a unique session identifier
    // You can use UUID or any other method to generate a unique identifier
    return UUID.randomUUID().toString();
}

// Function to clear session identifier from local storage
function clearSessionIdentifier() {
    localStorage.removeItem('sessionId');
}
