import style from './style.module.less';

import Title from '@/components/atoms/Title';
import Button from '@/components/atoms/Button';

const Description = ({
    titleTag, 
    titleContent,
    content,
    type='default', 
    buttonLink='', 
    buttonContent='', 
    buttonType='default',
    relatedClass=''
}) => {
    if(type == 'default') {
        return( 
            <div className={style['description']}>
                <div className={style['description__title']}>
                    <Title Tag={titleTag} content={titleContent} />
                </div>
                <div className={style['description__content']}>
                    {content.split('\\n').map((line) => {
                        return(<p>{line}</p>)
                    })}
                </div>
            </div>
        )
    }

    if(type == 'withButton') {
        return( 
            <div className={`${style['description']} ${style['description--with-button']}`}>
                <div className={style['description__title']}>
                    <Title Tag={titleTag} content={titleContent} />
                </div>
                <div className={`${style['description__content']} ${relatedClass}`}>
                    {content.split('\\n').map((line) => {
                        return(<p>{line}</p>)
                    })}
                </div>
                <Button link={buttonLink} content={buttonContent} type={buttonType} />
            </div>
        )
    }

    if(type = 'doubleButtons') {
        return(
            <div className={`${style['description']} ${style['description--with-button']}`}>
                <div className={style['description__title']}>
                    <Title Tag={titleTag} content={titleContent} />
                </div>
                <div className={`${style['description__content']} ${relatedClass}`}>
                    {content.split('\\n').map((line) => {
                        return(<p>{line}</p>)
                    })}
                </div>
                <div className={style['description__double-btn']}>
                    <Button link={buttonLink} type={"place"} icon="/img/appstore-white.svg" />
                    <Button link={buttonLink} type={"place"} icon="/img/googleplay-white.svg"/>
                </div>
                
            </div>
        )
    }
}

export default Description;