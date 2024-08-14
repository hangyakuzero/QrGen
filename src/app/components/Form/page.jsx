"use client";
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import ReactDOM from 'react-dom';

export default function Form() {
  const [text, setText] = useState('');
  const [logo, setLogo] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false); // State for QR code generation

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
        setLogoUrl(URL.createObjectURL(file)); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateClick = () => {
    const qrCodeElement = (
      <QRCode
        value={text}
        size={256}
        level="H"
        includeMargin={true}
        imageSettings={{
          src: logoUrl,
          height: 30,
          width: 30,
          excavate: true,
        }}
      />
    );

    ReactDOM.render(
      qrCodeElement,
      document.getElementById('ls')
    );

    setQrCodeGenerated(true); // Update state to show Save button
  };

  const handleSaveClick = () => {
    const canvas = document.querySelector('#ls canvas'); // Get the canvas element
    if (canvas) {
      const dataURL = canvas.toDataURL('image/png'); // Convert canvas to data URL
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'qrcode.png'; // Default filename
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Enter text or URL:</h2>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mb-4"
        onChange={handleTextChange}
        value={text}
      />
      <h2>Upload logo:</h2>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs mb-4"
        onChange={handleLogoUpload}
      />
      <button
        className="btn btn-accent mb-4"
        onClick={handleGenerateClick}
      >
        Generate QR
      </button>

      <div id="ls" className="mt-4"></div>
      {qrCodeGenerated && (
        <button
          className="btn btn-secondary mb-4"
          onClick={handleSaveClick}
        >
          Save QR
        </button>
      )}
    </div>
  );
}
