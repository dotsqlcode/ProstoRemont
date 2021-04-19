import style from './style.module.less';

const DoubleLayout = ({children}) => {
    return(
        <div className={style['double-layout']}>
            <div className={style['double-layout__left']}>
                <div className={style['double-layout__left-content']}>
                    {children[0]}
                </div>
            </div>
            <div className={style['double-layout__right']}>
                {children[1]}
            </div>
        </div>
    )
}

export default DoubleLayout;