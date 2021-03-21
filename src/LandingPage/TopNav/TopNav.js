import React from 'react';
import styles from './TopNav.module.css';

export function TopNav() {
    return (
        <div class={styles['top-nav']}>
            <div class={styles.left}>
                <span>Write a review</span>
                <span>Events</span>
            </div>
            <div class={styles.right}>
                <span>login</span>
                <button class="button">Sign Up</button>
            </div>
        </div>
    )
}