import { useState } from 'react';
import styles from './avatar.module.css';

const Avatar = ({ msg }: { msg: string }) => {
    return (
        <div className={styles.avatar}>
            {msg}
        </div>
    )
}


export default Avatar;