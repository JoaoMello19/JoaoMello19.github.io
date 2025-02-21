import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Knowledges from "./components/Knowledges";
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
                <Education />
                <Experiences />
                <Knowledges />
                <Contact />
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
