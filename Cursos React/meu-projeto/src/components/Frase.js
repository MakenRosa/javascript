import styles from './Frase.module.css';


function Frase ({desc}) {
    return (
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>{desc}</h1>
        </div>
    )
}

export default Frase;