import style from './style.module.less';

const MainLayout = ({children}) => {
    return(
        <div className={style['main-layout']}>
            <div className={style['main-layout__left']}>
                <aside className={style['main-layout__menu']}>
                    {children[0]}
                </aside>
            </div>
            <div className={style['main-layout__right']}>
                {children[1]}
            </div>
        </div>
    )
}

export default MainLayout;