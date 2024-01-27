import React, { useEffect, useState }from "react";
// firebase
import { app } from '../firebase/firebase';
import { getDatabase, ref, onValue } from "firebase/database";
// components
import Loader from "../components/Loader";

const AboutMe = () => {
    // states
    const [loading, setLoading] = useState<boolean>(false);

    // effects
    useEffect(() => {
        try {
            setLoading(true)
            const db = getDatabase(app);
            const dbRef = ref(db);
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                // do something with data
                // console.log(data, 'data');
            });
            setLoading(false)
        } catch {
            console.log('error');
            setLoading(false)
        }
    }, []);

    return (
        <>
            <Loader loading={loading} />
            <div>
                <h1>AboutMe Page</h1>
            </div>
        </>
    );
};

export default AboutMe;