import { Info } from "./Info";

import styles from "./Infos.module.css";

export function Infos() {
    return(
        <div className={styles.container}>
            <Info counter="0" />
            <Info counter="0" done/>
        </div>
    )
}