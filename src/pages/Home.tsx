import React, { CSSProperties } from "react";

const Home = () => {
    return (
        <div style={styles.container}>
            <div style={styles.circle}>
                <h1 style={styles.heading}>Kiss Principle</h1>
                <p style={styles.paragraph}>This is a React Web app, a reflection of my personal brand</p>
            </div>
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: '#2F4159'
    },
    heading: {
        textAlign: "center",
        fontWeight: 100,
        fontSize: "2.8rem",
        marginBottom: "0"
    },
    paragraph: {
        marginTop: "1rem",
        textAlign: "center",
        fontWeight: 100,
        fontSize: "1.25rem",
        margin: "1.25rem",
    }
}

export default Home;