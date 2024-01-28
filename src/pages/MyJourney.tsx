import React, { useEffect, useState } from "react";
// firebase
import { app } from '../firebase/firebase';
import { getDatabase, ref, onValue } from "firebase/database";
// components
import Loader from "../components/Loader";

const MyJourney = () => {
    // states
    const [loading, setLoading] = useState<boolean>(false);
    const [dataMyJourney, setDataMyJourney] = useState<any>(null);

    // effects
    useEffect(() => {
        try {
            setLoading(true);
            const db = getDatabase(app);
            const dbRef = ref(db, '/pages/MyJourney');
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                setDataMyJourney(data || null);
                setLoading(false);
            });
        } catch {
            console.log('error');
            setLoading(false);
        }
    }, []);

    // renders
    const renderMyJourney = () => {
        return (
            <div className="container" style={{ alignItems: 'flex-start' }}>
                <div className="content">
                    <h1 className="heading">{dataMyJourney?.title || "Not found Title"}</h1>
                    {dataMyJourney?.paragraphs?.map((paragraph: string, index: number) => (
                        <p key={index + 'paragraph'} className="paragraph" style={{ textAlign: 'justify' }}>{paragraph}</p>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <Loader loading={loading} />
            {dataMyJourney ? renderMyJourney() : (
                <div className="container">
                    <h1 className="heading">Data Not Found</h1>
                </div>
            )}
        </>
    );
};

export default MyJourney;
