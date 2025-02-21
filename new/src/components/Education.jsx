import Section from "./Section";

const styles = {
    subtitle: {
        color: "#0284c7",
    },
};

export default function Education() {
    return (
        <Section title={"Educação"}>
            <h3 style={styles.subtitle}>Etec Tenente Aviador Gustavo Klug</h3>
            <p>Curso Técnico em Informática (2016 - 2018)</p>

            <h3 style={styles.subtitle}>Universidade de São Paulo (ICMC)</h3>
            <p>Bacharelado em Sistemas de Informação (2019 - 2023)</p>
        </Section>
    );
}
