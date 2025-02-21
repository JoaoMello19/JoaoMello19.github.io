import React from "react";

const styles = {
    section: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid grey",
    },
    mainTitle: {
        fontSize: "1.5rem",
        textAlign: "center",
        color: "#d97706",
    },
    subTitle: {
        color: "#0284c7",
    },
    icon: {
        height: "10rem",
        width: "10rem",
        margin: "0 auto",
    },
};

export function Subtitle({ children }) {
    return <h3 style={styles.subTitle}>{children}</h3>;
}

export function IconItem({ src, alt, children }) {
    return (
        <li>
            <img src={src || null} alt={alt || ""} />
            {children}
        </li>
    );
}

export default function Section({ title, icon, children }) {
    return (
        <section style={styles.section}>
            <h2 style={styles.mainTitle}>{title}</h2>
            {icon && React.cloneElement(icon, { style: styles.icon })}
            {children}
        </section>
    );
}
