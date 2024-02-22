import React, { useEffect, useState }from "react";
// firebase
import { app } from '../firebase/firebase';
import { getDatabase, ref, onValue } from "firebase/database";
// components
import Loader from "../components/Loader";

const AboutMe = () => {
    // states
    const [loading, setLoading] = useState<boolean>(true);
    const [dataAboutMe, setDataAboutMe] = useState<any>(null);

    // effects
    useEffect(() => {
        try {
            const db = getDatabase(app);
            const dbRef = ref(db, '/pages');
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                // console.log(data?.AboutMe, 'data');
                setDataAboutMe(data?.AboutMe || null);
            });
            setLoading(false)
        } catch {
            console.log('error');
            setLoading(false)
        }
    }, []);

    // renders
    const renderAboutMe = () => {
        return (
            <div className="container" style={{alignItems: 'flex-start'}}>
                <div className="content" >
                    <h1 className="heading">{dataAboutMe?.title || "Not found Title"}</h1>
                    {dataAboutMe?.paragraphs?.map((paragraph: string, index: number) => (
                        <p key={index + 'paragraph'} className="paragraph" style={{textAlign: 'justify'}}>{paragraph}</p>
                    ))}
                </div>
            </div >
        );
    }

    return (
        <>
            <Loader loading={loading} />
            {dataAboutMe ? renderAboutMe() : (
                <div className="container">
                    <h1 className="heading">Data Not Found</h1>
                </div>
            )}
        </>
    );
};

export default AboutMe;