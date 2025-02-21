const style = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "1rem",
};

export default function SectionContainer({ children }) {
    return <main style={style}>{children}</main>;
}
