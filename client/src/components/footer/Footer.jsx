import { Link } from 'react-router'
import styles from './Footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.siteFooter}>
            <ul>
                <li><Link className={styles.link} to="#">Contact Us</Link></li>
                <li><Link className={styles.link} to="#">Contact Reviews</Link></li>
                <li><Link className={styles.link} to="#">Order Status</Link></li>
                <li><Link className={styles.link} to="#">Shipping and delivery</Link></li>
            </ul>
            <ul>
                <li><Link className={styles.link} to="#">About Us</Link></li>
                <li><Link className={styles.link} to="#">Contact Reviews</Link></li>
                <li><Link className={styles.link} to="#">News</Link></li>
                <li><Link className={styles.link} to="#">Careers</Link></li>
            </ul>
            <ul>
                <li><Link className={styles.link} to="#">Find a Store</Link></li>
                <li><Link className={styles.link} to="#">Promo codes</Link></li>
                <li><Link className={styles.link} to="#">Feedback</Link></li>
                <li><Link className={styles.link} to="#">Become a member</Link></li>
            </ul>
        </footer>
    )
}