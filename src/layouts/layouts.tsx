import * as React from 'react';
import styles from '@/styles/Home.module.css';

interface Props {
    children : JSX.Element;
}

export default function Layouts({ children } : Props) {
    
    return (
        <main className={styles.main}>
            {children}
        </main>
        
    );
}