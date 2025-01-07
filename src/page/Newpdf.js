"use client";

import { useEffect, useState } from "react";

const Newpdf = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch("/SRKxPramodMalooNew.pdf");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await response.blob();
        const fileUrl = URL.createObjectURL(blob);
        setPdfFile(fileUrl);
      } catch (error) {
        setError(error);
        console.error("Error loading PDF:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPdf();

    return () => {
      if (pdfFile) {
        URL.revokeObjectURL(pdfFile);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src={pdfFile}
        width="100%"
        height="100%"
        title="PDF Viewer"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Newpdf;
