import Logo from '@/components/molecules/Logo';
import style from './style.module.less';

const Footer = () => {

    const footerLinks = [
        {
            text: 'Популярные вопросы',
            link: ''
        },
        {
            text: 'Отзывы',
            link: ''
        },
        {
            text: 'Блог Просто Ремонта',
            link: ''
        },
        {
            text: 'Facebook ›',
            link: ''
        },
        {
            text: 'Вконтакте ›',
            link: ''
        },
        {
            text: 'Instagram ›',
            link: ''
        },
        {
            text: 'Houzz.ru ›',
            link: ''
        },
        {
            text: 'Inmyroom ›',
            link: ''
        },
        {
            text: 'Дзен ›',
            link: ''
        },
    ]

    let generatedFooterLinks = footerLinks.map((item, idx) => {
        return(
            <a href={item.link} className={style['footer__link']}>
                {item.text}
            </a>
        )
    })

    return(
        <footer className={style['footer']}>
            <div className={style['footer__container']}>
                <div className={style['footer__logo']}>
                    <Logo type='white' />
                </div>
                <div className={style['footer__cols']}>
                    <div className={style['footer__col']}>
                        <ul className={style['footer__links']}>
                            {generatedFooterLinks}
                        </ul>
                        <a href='#' className={`${style['footer__link']} ${style['footer__link--margin']}`}>
                            Ремонт квартир в новостройках
                        </a>
                        <p className={style['footer__company']}> 
                            ООО «ПРОСТО-РЕМОНТ»
                        </p>
                        <p className={`${style['footer__info']} ${style['footer__info--margin']}`}>
                            ИНН 9717041712, КПП 771701001, ОГРН 1167746865593, <br />
                            р/с 40702810301500000651 в Филиале «Точка» Публичного <br />
                            АО «Ханты-Мансийский банк Открытие» к/с <br />
                            30101810600000000999, БИК 044525999 
                        </p>
                        <a href='#' className={style['footer__link']}>
                            Политика конфиденциальности
                        </a>
                        <p className={style['footer__info']}>
                            © Просто-Ремонт 2021. Использование материалов сайта <br />
                            Просто-Ремонт разрешено только с предварительного <br />
                            согласия правообладателей. Все права на материалы <br />
                            принадлежат их авторам.
                        </p>
                    </div>
                    <div className={style['footer__col']}>
                        <a href='tel:+7 (499) 390-76-91' className={style['footer__num']}>
                            +7 (499) 390-76-91
                        </a>
                        <p className={`${style['footer__info']} ${style['footer__info--warning']} ${style['footer__info--margin']}`}>
                            Убедительная просьба не звонить с предложениями о <br />
                            поставках и услугах. Вас слишком много. Все <br />
                            предложения отправляйте по почте ниже. Компании по <br />
                            продвижению сайтов и соцсетей могут не звонить и не <br />
                            писать.
                        </p>
                        <p className={`${style['footer__info']} ${style['footer__info--margin']}`}>
                            Список <a href='#' className={style['footer__info-link']}>работ</a> и <a href='#' className={style['footer__info-link']}>материалов</a>, входящих в цену <br />
                            ремонта. <a href='#' className={style['footer__info-link']}>Технический дизайн-проект</a>, надзор и <br />
                            логистика также входят в цену.
                        </p>
                        <p className={`${style['footer__info']} ${style['footer__info--margin']}`}>
                            Напишите в «Просто-Ремонт», если у вас остались <br />
                            вопросы
                        </p>
                        <p className={`${style['footer__info']} ${style['footer__info--margin']}`}>
                            Для клиентов: <br />
                            hello@prosto-remont.com
                        </p>
                        <p className={`${style['footer__info']} ${style['footer__info--margin']}`}>
                            Для застройщиков: <br />
                            gc@prosto-remont.com
                        </p>
                        <p className={`${style['footer__info']} ${style['footer__info--margin']}`}>
                            Для поставщиков: <br />
                            supply@prosto-remont.com
                        </p>
                        <p className={`${style['footer__info']} ${style['footer__info--margin']}`}>
                            Для мастеров: <br />
                            master@prosto-remont.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;