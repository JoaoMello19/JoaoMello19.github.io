import "./App.css";
import Header from "./components/Header";
import PersonalProfile from "./components/PersonalProfile";

function SectionContainer({ children }) {
    return <main style={styles.container}>{children}</main>;
}

export default function App() {
    return (
        <div>
            <Header />
            <SectionContainer>
                <PersonalProfile />
            </SectionContainer>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "1rem",
    },
};
