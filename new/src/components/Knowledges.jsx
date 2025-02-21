import Section, { IconItem, Subtitle } from "./Section";

const styles = {
    knowledgeList: {
        display: "flex",
        flexDirection: "row",
    },
    knowledge: {
        flex: 1,
    },
};

export default function Knowledges() {
    return (
        <Section title={"Conhecimentos"}>
            <div style={styles.knowledgeList}>
                <div style={styles.knowledge}>
                    <Subtitle>Idiomas</Subtitle>
                    <ul>
                        <IconItem>Inglês (intermediário)</IconItem>
                    </ul>
                </div>

                <div style={styles.knowledge}>
                    <Subtitle>Linguagens</Subtitle>
                    <ul>
                        <IconItem>Python e Java</IconItem>
                        <IconItem>HTML, CSS e Javascript</IconItem>
                        <IconItem>SQL (MySQL, PostgreSQL e Oracle)</IconItem>
                    </ul>
                </div>

                <div style={styles.knowledge}>
                    <Subtitle>Outros conhecimentos</Subtitle>
                    <ul>
                        <IconItem>Git/Github</IconItem>
                        <IconItem>Orientação a Objetos</IconItem>
                        <IconItem>
                            Análise de dados e Aprendizado de Máquina
                        </IconItem>
                        <IconItem>Docker e Kubernetes</IconItem>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
