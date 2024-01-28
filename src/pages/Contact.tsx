import React, { useEffect, useState } from "react";
// firebase
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase/firebase';
// components
import Loader from "../components/Loader";

const Contact = () => {
    const [loading, setLoading] = useState(true);
    const [contactInfo, setContactInfo] = useState<any>(null);

    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db, '/pages/Contact');
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            setContactInfo(data);
            setLoading(false);
        }, (error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    // renders
    const renderMyJourney = () => {
        return (
            <div className="container" style={{ alignItems: 'flex-start' }}>
                <div className="content" style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <h1 className="heading" style={{ textAlign: 'justify', marginBottom: '3rem' }}>Contact Me</h1>
                    <div style={{ textAlign: 'justify'}}>
                        {contactInfo?.linkedin && <p>LinkedIn: <a className="linkTopbar" href={contactInfo?.linkedin} style={{ textDecoration: 'underline' }}>{contactInfo?.linkedinName || 'LinkedIn'}</a></p>}
                        {contactInfo?.github && <p>Github: <a className="linkTopbar" href={contactInfo?.github} style={{ textDecoration: 'underline' }}>{contactInfo?.githubName || 'Github'}</a></p>}
                        {contactInfo?.email && <p>Email: <a className="linkTopbar" href={`mailto:${contactInfo?.email}`} style={{ textDecoration: 'underline' }}>{contactInfo?.email}</a></p>}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {loading && <Loader loading={loading} />}
            {!loading && !contactInfo && (
            <div className="container">
                <h1 className="heading">Data Not Found</h1>
            </div>)
            }
            {!loading && contactInfo && renderMyJourney()}
        </>
    );
};

export default Contact;
