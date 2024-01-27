import React, { CSSProperties } from "react";

const Home = () => {
    return (
        <div style={styles.container}>
            <div style={styles.circle}>
                <h1 style={styles.heading}>Kiss Principle</h1>
                <h2 style={styles.subtile}>( Keep it simple, stupid )</h2>
                <p style={styles.paragraph}> Welcome to my React Web app, a reflection of my personal brand</p>
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
    subtile: {
        textAlign: "center",
        fontWeight: 100,
        fontSize: "1rem",
        marginTop: "0"
    },
    paragraph: {
        marginTop: "2rem",
        textAlign: "center",
        fontWeight: 100,
        fontSize: "1.0rem",
        margin: "2rem",
    }
}

export default Home;