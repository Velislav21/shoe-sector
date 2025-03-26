import { useState } from "react";

export default function useError(initialErrorState) {
    const [error, setError] = useState(initialErrorState);

    function setCustomError(errorMessage, hideAfterMilliSeconds) {
        setError(errorMessage);

        setTimeout(() => setError(null), hideAfterMilliSeconds);
    }

    return {
        error,
        setCustomError
    }
}