import Link from 'next/link';

const NavLink = ({styles, link, content}) => {
    return(
        <Link href={link}>
            <a className={styles}>
                {content}
            </a>
        </Link>
    )
}

export default NavLink;