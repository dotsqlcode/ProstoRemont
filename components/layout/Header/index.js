import Logo from '@/components/Logo';
import Crumbs from '@/components/molecules/Crumbs';

import style from './style.module.less';

const Header = ({type = 'default'}) => {
    if(type == 'default') {
        return(
            <>
                <header className={style['header']}>
                    <div className={style['header__content']}>
                        <Logo />
                    </div>
                </header>
            </>
        )
    }
    
    if(type == 'crumbs') {
        return(
            <>
                <header className={`${style['header']} ${style['header--crumbs']}`}>
                    <div className={style['header__content-wrap']}>
                        <div className={style['header__content']}>
                            <Logo />
                        </div>
                    </div>
                    <div className={style['header__crumbs-wrap']}>
                        <Crumbs />
                    </div>
                </header>
            </>
        )
    }
}

export default Header;