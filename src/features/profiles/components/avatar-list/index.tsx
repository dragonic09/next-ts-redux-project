import { ReactNode } from "react"
import styles from './avatar-list.module.css';

export const AvatarList = (props: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}