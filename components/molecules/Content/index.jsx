import Title from '@/components/atoms/Title';
import style from './style.module.less';

const Content = ({children, titleTag, titleContent}) => {
    return (
        <div className={style['content']}>
            <div className={style['content__title']}>
                <Title type='bold' content={titleContent} Tag={titleTag} />
            </div>
            <div className={style['content__wrap']}>
                {children}
            </div>
        </div>
    );
}
 
export default Content;
