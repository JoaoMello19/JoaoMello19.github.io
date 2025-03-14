import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Knowledges from "./components/Knowledges";
import PersonalProfile from "./components/PersonalProfile";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "1rem",
    },
};

export default function App() {
    return (
        <div>
            <Header />
            <main style={styles.container}>
                <PersonalProfile />
                <Education />
                <Experiences />
                <Knowledges />
                <Contact />
            </main>
        </div>
    );
}
