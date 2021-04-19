import style from './style.module.less';

import NavLink from '@/components/atoms/NavLink';

const Navigation = () => {

    const links= [
        {
            link: '/',
            content: 'Проект'
        },
        {
            link: '/',
            content: 'Работы/Технадзор'
        },
        {
            link: '/',
            content: 'Материалы'
        },
        {
            link: '/',
            content: 'Комплектация'
        },
        {
            link: '/',
            content: 'Договор'
        },
        {
            link: '/',
            content: 'Фото'
        },
        {
            link: '/',
            content: 'Калькулятор'
        },
        {
            link: '/',
            content: 'Популярные вопросы'
        },
        {
            link: '/',
            content: 'Отзывы'
        },
        {
            link: '/',
            content: 'Команда'
        },
        {
            link: '/',
            content: 'Контакты'
        },
    ]

    let generatedLinks = links.map((link, idx) => {
        return <NavLink
                    styles={style['navigation__link']}
                    link={link.link}
                    content={link.content}
                    key={idx}
                />
    })

    return(
        <nav className={style['navigation']}>
            {generatedLinks}
        </nav>
    )
}

export default Navigation;