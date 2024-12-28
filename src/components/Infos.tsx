import { Info } from "./Info";

import styles from "./Infos.module.css";

interface InfosProps {
    data: string[];
}

export function Infos({ data }: InfosProps) {
    return(
        <div className={styles.container}>
            <Info counter={data.length.toString()} />
            <Info counter="0" done/>
        </div>
    )
}