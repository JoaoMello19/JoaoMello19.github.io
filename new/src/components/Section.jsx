import React from "react";

export default function Section({ title, icon, children }) {
    return (
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{title}</h2>
            {icon && React.cloneElement(icon, { style: styles.icon })}
            {children}
        </section>
    );
}

const styles = {
    section: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid grey",
    },
    sectionTitle: {
        fontSize: "1.5rem",
        textAlign: "center",
        color: "#d97706",
    },
    icon: {
        height: "50px",
        width: "50px",
        margin: "0 auto",
    },
};