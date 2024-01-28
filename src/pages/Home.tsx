import React, {useEffect, useState} from "react";
// firebase
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase/firebase';
// components
import Loader from "../components/Loader";

const Home = () => {
    // states
    const [loading, setLoading] = useState(false);
    const [homeInfo, setHomeInfo] = useState<any>(null);

    // effects
    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db, '/pages/Home');
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            setHomeInfo(data);
            setLoading(false);
        }, (error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    // renders
    const renderHome = () => {
        return (
            <div className="container">
                <div>
                    <h1 className="heading">{homeInfo?.title || 'No title'}</h1>
                    <h2 className="subtile">{homeInfo?.subtitle || 'No subtitle'}</h2>
                    <p className="paragraph"> {homeInfo?.message || 'No Message'}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {loading && <Loader loading={loading} />}
            {!loading && !homeInfo && (
            <div className="container">
                <h1 className="heading">Data Not Found</h1>
            </div>)
            }
            {!loading && homeInfo && renderHome()}
        </>
    );
};

export default Home;