// import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];


export const Navbar = () => {
    return (
        <>
            <nav className={styles['menu-container']}>
                {
                    // menuItems.map((item) => {
                    //     return (<ActiveLink key={item.href} text={item.text} href={item.href}>{item.text}</ActiveLink>)
                    // })
                    menuItems.map(({ href, text }) => 
                        <ActiveLink key={href} text={text} href={href} />
                    )
                }
            </nav>
        </>
    )
}
