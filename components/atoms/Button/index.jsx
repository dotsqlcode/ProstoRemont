import style from './style.module.less';

import Link from 'next/link';
import Image from 'next/image'; 

const Button = ({type, link, content, icon=''}) => {
    if(type == 'default') {
        return(
            <Link href={link}>
                <a className={style['button']}>
                    {content}
                </a>
            </Link>
        )
    }

    if(type == 'gray') {
        return(
            <Link href={link}>
                <a className={`${style['button']} ${style['button--gray']}`}>
                    {content}
                </a>
            </Link>
        )
    }

    if(type == 'bigarrow') {
        return(
            <Link href={link}>
                <a className={style['button']}>
                    {content}
                    <img src="/img/arrow-right.svg" alt="arrow-right" className={style['button__arrow']}/>
                </a>
            </Link>
        )
    }

    if(type == 'place') {
        return(
            <Link href={link}>
                <a className={`${style['button']} ${style['button--place']}`}>
                    <img src={icon} alt="" className={style['button__icon']}/>
                </a>
            </Link>
        )
    }
    
    if(type == 'mediumarrow') {
        return(
            <Link href={link}>
                <a className={`${style['button']} ${style['button--medium']}`}>
                    {content}
                    <img src="/img/arrow-right.svg" alt="arrow-right" className={style['button__arrow']}/>
                </a>
            </Link>
        )
    }
}

export default Button;