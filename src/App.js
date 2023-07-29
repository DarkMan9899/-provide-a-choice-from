import React from "react";
import './App.css';
import FileUploader from "./Componet/FileSelection";
function App() {
    return (
        <div className="App">
            <div>
                <h1>File Uploader to Yandex.Disk</h1>
                <FileUploader />
            </div>
        </div>
    );
}
export default App;
