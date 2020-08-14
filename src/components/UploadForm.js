import React, { useState } from 'react'
import { ProgressBar } from './ProgressBar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)

    const types = ['image/jpeg', 'image/png'];

    const handleUpload = (e) => {
        let selected = e.target.files[0];
        console.log(selected, 'seleected file');

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null)
        } else {
            setFile(null);
            setError('Please select a valid image file: PNG or JPEG file.')
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={handleUpload} />
                <span>+</span>
            </label>
            <div>
                {error && <div className="error">{ error }</div>}
                {file && <div className="file">Added { file.name }</div>}
                {file && <ProgressBar file={ file } setFile={ setFile }/>}
            </div>
        </form>
    )
}

export default UploadForm
