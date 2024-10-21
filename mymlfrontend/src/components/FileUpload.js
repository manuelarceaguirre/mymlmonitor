import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please select a file");
            return;
        }

        if (file.type !== 'text/csv') {
            alert("Only CSV files are allowed");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const API_URL = process.env.NODE_ENV === 'production' 
            ? 'https://mymlmonitor.vercel.app/upload' 
            : 'http://127.0.0.1:5000/upload';

        const response = await fetch(API_URL, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        alert(result.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Select CSV File:</label>
                <input type="file" accept=".csv" onChange={handleFileChange} />
            </div>
            <button type="submit">Upload Data</button>
        </form>
    );
};

export default FileUpload;