import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/mustang95.png" alt="Luiz Roupinha"/>
            <div>
                <strong>Luiz Roupinha</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                    </p>
            </div>
        </div>
    )
}
