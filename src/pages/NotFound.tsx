import React, {useState, useEffect} from "react";
// firebase
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase/firebase';
// components
import Loader from "../components/Loader";

const NotFound = () => {
    const [loading, setLoading] = useState(true);
    const [NotFoundInfo, setNotFoundInfo] = useState<any>(null);

    // effects
    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db, '/pages/NotFound');
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            setNotFoundInfo(data);
            setLoading(false);
        }, (error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    // renders
    const renderNotFound = () => {
        return (
            <div className="container">
                <div>
                    <h1 className="heading">{NotFoundInfo?.title || 'No title'}</h1>
                    <h2 className="subtile">{NotFoundInfo?.subtitle || 'No subtitle'}</h2>
                    <p className="paragraph"> {NotFoundInfo?.message || 'No Message'}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {loading && <Loader loading={loading} />}
            {!loading && !NotFoundInfo && (
            <div className="container">
                <h1 className="heading">Data Not Found</h1>
            </div>)
            }
            {!loading && NotFoundInfo && renderNotFound()}
        </>
    );
};

export default NotFound;
