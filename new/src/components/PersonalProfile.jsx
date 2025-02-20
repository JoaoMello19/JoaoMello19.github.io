import Section from "./Section";

function TextNode({ children }) {
    return <p style={styles.textNode}>{children}</p>;
}

function IconRow({ children }) {
    return <div style={styles.iconRow}>{children}</div>;
}

function Image({ src, alt }) {
    return <img style={styles.icon} src={src || null} alt={alt} />;
}

export default function PersonalProfile() {
    return (
        <Section title={"Perfil Pessoal"}>
            <TextNode>
                Olá! Meu nome é João Vitor de Mello Gomes e sou desenvolvedor
                com experiência em diversas linguagens de programação, banco de
                dados e ciência de dados.
            </TextNode>

            <IconRow>
                <Image src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" alt="Logo do Node JS" />
                <Image src="/sql.png" alt="Logo do MySQL" />
                <Image src="" alt="Logo do Python" />
                <Image src="" alt="Logo do Java" />
                <Image src="" alt="Logo do Pandas/SkLearn" />
            </IconRow>

            <TextNode>
                Atualmente, trabalho na Universidade de São Paulo (USP), onde
                atuo como Analista de Sistemas no desenvolvimento de soluções
                para uso interno do Instituto de Química.
            </TextNode>

            <IconRow>
                <Image
                    src="https://www.iqsc.usp.br/intranet/ftp/Logotipos/Logotipos%20IQSC/logo_branco_sem_fundo.png"
                    alt="Logo do IQSC"
                />
            </IconRow>

            <TextNode>
                Sempre fui apaixonado por tecnologia e gosto de criar soluções
                práticas e eficientes. Além da programação, também me interesso
                por ciência de dados, automação de processos e segurança da
                informação. No meu tempo livre, gosto de aprender coisas novas,
                trabalhar em projetos pessoais e compartilhar conhecimento.
            </TextNode>

            <TextNode>
                Aqui, você encontrará um pouco mais sobre minha trajetória
                profissional, formação e conhecimentos. Fique à vontade para
                explorar e entrar em contato!
            </TextNode>
        </Section>
    );
}

const styles = {
    textNode: {
        width: "90%",
        margin: "auto",
        textAlign: "center",
        fontSize: "1.2rem",
    },
    iconRow: {
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        margin: "1rem auto",
    },
    icon: {
        heigth: "5rem",
        width: "5rem",
        objectFit: "contain",

        border: "1px solid cyan"
    },
};
