import React, { useState } from 'react';
import '../styles/upload.css';

const Upload = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://localhost:3000/check-plagiarism', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert('Plagiarism Check Complete: ' + result.aiResponse);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to check the file for plagiarism');
      });
  };

  return (
    <main>
      <section class="upload-section">
        <h1>AI-Powered Plagiarism Detection</h1>
        <div class="upload-box">
          <label for="file-upload" class="upload-label">Upload your document (PDF or Word)</label>
          <input type="file" onChange={handleFileChange} id="file-upload" class="file-input" accept=".pdf, .doc, .docx"/>
          <button class="upload-btn" onclick={uploadFile()}>Check for Plagiarism</button>
        </div>
      </section>
    </main>
  )
}

export default Upload;