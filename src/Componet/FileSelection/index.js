import React, { useState } from 'react';

const FileUploader = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedFiles(files);
    };

    const handleFileUpload = async () => {
        const clientId = 'YOUR_CLIENT_ID';
        const authEndpoint = 'https://oauth.yandex.com/authorize';
        const redirectUri = 'http://localhost:3000';
        const scope = 'disk:write';

        // Redirect the user to Yandex.Disk authorization page.
        window.location.href = `${authEndpoint}?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload to Yandex.Disk</button>
            <p>Selected files: {selectedFiles.length}</p>
        </div>
    );
};

export default FileUploader;
