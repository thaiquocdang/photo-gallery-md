import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from '../firebase/config'

//use this hook inside a component to show the progress bar using the progress value below
const useStorage = (file) => {
    // console.log(file, 'file at useStorage');
    // console.log(file.name, 'file name at useStorage');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( () => {
        //references
        // const storageRef = storage.ref(file.name);
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name)

        const collectionRef = firestore.collection('images')

        fileRef.put(file).on('state_changed', (snap) => {
            let percentageUpload = (snap.bytesTransferred/snap.totalBytes) * 100;
            setProgress(percentageUpload);
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await fileRef.getDownloadURL();
            setUrl(url);

            const createdTime = timestamp();
            // console.log(createdTime, ' created time');
            collectionRef.add({ url, createdTime})
        })
    }, [file]);
    
    // console.log(progress, 'progress check');
    // console.log(url, 'url check');
    return { progress, url, error };
}

export default useStorage;