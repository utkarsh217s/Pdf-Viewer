import './App.css';
import {pdfjs} from 'react-pdf';
import PdfViewer from './PdfViewer';

function App() {
 
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

  return (
    <div className="App">
      <PdfViewer/>
    </div>
  );
}

export default App;
