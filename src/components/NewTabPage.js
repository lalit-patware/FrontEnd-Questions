// NewTabPage.js
import React from 'react';
import PdfViewer from './PdfViewer';

const NewTabPage = () => {
  const params = new URLSearchParams(window.location.search);
  const fileUrl = params.get('url');
  const documentTitle = params.get('title');

  return (
    <div>
      {fileUrl ? (
        <PdfViewer fileUrl={fileUrl} documentTitle={documentTitle} />
      ) : (
        <p>No PDF file specified.</p>
      )}
    </div>
  );
};

export default NewTabPage;
