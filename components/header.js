import Link from "next/link";
import styles from "./header.module.css";

export function Header() {

    return (
        <header className={styles.container}>
            <span>HCI Technologies</span>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.dropdownLink}>
                    <Link href="/topics"><a>Topics</a></Link>
                    <ul className={styles.dropdown}>
                        <li>
                            <Link href="/topics/playful">
                                <a>Playful Interactions</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/topics/arvr">
                                <a>AR &amp; VR</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/topics/wearables">
                                <a>Wearables</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/topics/artificial">
                                <a>Artificial Creatures</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={styles.dropdownLink}>
                    <Link href="/workshops"><a>Workshops</a></Link>
                    <ul className={styles.dropdown}>
                        <li>
                            <Link href="/workshops/computer_vision">
                                <a>Computer Vision</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/workshops/virtual_environment">
                                <a>Virtual Environment</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/workshops/arduino">
                                <a>Arduino</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/excursion">Excursion</Link>
                </li>
                <li>
                    <Link href="/labweeks">Lab Weeks</Link>
                </li>
            </ul>
        </header>
    );
}