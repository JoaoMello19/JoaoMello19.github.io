const styles = {
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    headerContent: {
        display: "flex",
        flexDirection: "row",
    },
    myPhoto: {
        height: "10vw",
        width: "10vw",
        objectFit: "cover",
        margin: "2em",
        border: "none",
        borderRadius: "50%",
    },
    headerText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
};

export default function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.headerContent}>
                <img
                    style={styles.myPhoto}
                    src="/minha_foto.jpg"
                    alt="Foto de perfil"
                />
                <div style={styles.headerText}>
                    <h1 style={{ fontSize: "2rem", margin: "0.5rem 0" }}>
                        JOÃO VITOR DE MELLO GOMES
                    </h1>
                    <h2 style={{ fontSize: "1.25rem", margin: "0.5rem 0" }}>
                        ANALISTA DE SISTEMAS @ IQSC / USP
                    </h2>
                </div>
            </div>
        </header>
    );
}
