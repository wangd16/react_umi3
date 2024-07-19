import React, { useEffect } from 'react';

function Loading ({ }) {

    useEffect(() => {
        // Effect logic here
        return () => {
            // Cleanup logic here
        };
    }, []);

    return (
        <div>
            loading......
        </div>
    );
}

export default Loading;