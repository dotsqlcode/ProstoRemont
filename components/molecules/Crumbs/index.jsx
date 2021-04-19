import style from './style.module.less';

import Link from 'next/link';
import NavLink from '@/components/atoms/NavLink';

                

const Crumbs = ({routes}) => {

    const links = [
        {
            link: '/',
            text: 'Главная'
        },
        {
            link: '/',
            text: 'Готовый дизайн проект'
        }
    ]

    let generatedLinks = links.map((link, idx) => {
        if(idx != links.length - 1) {
            return(
                <>
                    <NavLink
                        styles={style['crumbs__link']}
                        link={link.link}
                        content={link.text}
                        key={idx}
                    />
                    <span className={style['crumbs__separator']}>
                    ›
                    </span>
                </>
            )   
        } else {
            return(
                <NavLink
                    styles={style['crumbs__link']}
                    link={link.link}
                    content={link.text}
                    key={idx}
                />
            )
        }
    })

    return(
        <div className={style['crumbs']}>
            {generatedLinks}
        </div>
    );
}

export default Crumbs;