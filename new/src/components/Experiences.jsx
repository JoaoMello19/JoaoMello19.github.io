import Section, { Subtitle } from "./Section";

export default function Experiences() {
    return (
        <Section title={"Experiências"}>
            <Subtitle>AMDOCS Brasil (2022 - 2024)</Subtitle>
            <ul>
                <li>
                    Atuava na análise e resolução de problemas técnicos em
                    sistemas de informação voltados para o setor de telefonia.
                </li>
                <li>
                    Realizava diagnósticos completos, investigando logs,
                    consultando tabelas em bancos de dados, revisando
                    código-fonte e analisando documentação técnica para
                    identificar a causa raiz das falhas.
                </li>
                <li>
                    Propunha e documentava soluções e melhorias, assegurando a
                    continuidade e a eficiência operacional dos sistemas.
                </li>
                <li>
                    Utilizava tecnologias como Docker (com Kubernetes),
                    linguagens Java e JavaScript, Shell Script e SQL para
                    análises detalhadas e implementação de correções.
                </li>
            </ul>

            <Subtitle>Universidade de São Paulo (desde 2024)</Subtitle>
            <ul>
                <li>
                    Integro a seção técnica de informática do Instituto de
                    Química, atendendo demandas relacionadas à manutenção,
                    instalação e configuração de hardwares e softwares.
                </li>
                <li>
                    Responsável pelo desenvolvimento de sistemas e projetos de
                    programação, atendendo às necessidades institucionais.
                </li>
                <li>
                    Desenvolvimento full-stack utilizando tecnologias como
                    JavaScript, Java, Node.js, React, React Native e bancos de
                    dados SQL e NoSQL.
                </li>
                <li>
                    Gerenciamento de versionamento e colaboração em equipe com
                    Git/GitHub.
                </li>
            </ul>
        </Section>
    );
}
