import React, { useState } from 'react';
import { Document, Page, Thumbnail } from 'react-pdf';
import './PdfViewer.css';
import { Button, Col, Row } from 'reactstrap';

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [file, setFile] = useState(null); 
  const [page, setpage] = useState(null);
  const [scale, setScale] = useState(1);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleThumbnailClick = (yoo) =>
  {
    console.log(yoo)
    setpage(yoo)
  }

  const Zoomin = () => {
    setScale(scale + 0.1); 
  };

  const Zoomout = () => {
    if (scale > 0.1) { 
      setScale(scale - 0.1); 
    }
  };

  return (<>
    <h1 className='title'>PDF VIEWER</h1>
    {
      !file &&  <input type="file" onChange={handleFileChange} />
    }

 {
  page && ( <><Button color='primary' onClick={Zoomin}>Zoom in</Button>{'    '}
  <Button color='primary' onClick={Zoomout}>Zoom out</Button> </>)
 }
    <Row>
    <Col lg="4" xs="12" className="flex-column"> 
    <div className='entry'>  
      {file && (
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <div className='customboi'>
            {Array.from(new Array(numPages), (el, index) => (
              <Thumbnail key={`page_${index + 1}`} pageNumber={index + 1} width={300}
              onClick={() => handleThumbnailClick(index + 1)}>
           <h6 style={{color : 'black'}}>Page number : {index + 1}</h6>
     <hr style={{color:'black'}} />
              </Thumbnail>
            ))}
          </div>
        </Document>
      )}
      {numPages && <p>Total Pages: {numPages}</p>}
    </div>
    </Col>
    <Col lg="8" xs="12">
    <div className='exper'>
      {page &&     <Document file={file}>
      <Page pageNumber={page}
      renderAnnotationLayer={false} 
      renderTextLayer={false} 
      width={600*scale} 
      scale={scale}/>
          </Document>}
 </div>
    </Col>
   </Row>
   
    </>
  );
}

export default PdfViewer;
