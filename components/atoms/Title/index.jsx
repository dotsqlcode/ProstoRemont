import style from './style.module.less';

const Title = ({Tag, content, type='default'}) => {

    if(type == 'default') {
        return(
            <Tag className={style['title']}>
                {content.split('\\n').map((line) => {
                    return(<p>{line}</p>)
                })}
            </Tag>
        )
    }
    
    if(type == 'bold') {
        return(
            <Tag className={`${style['title']} ${style['title--bold']}`}>
                {content.split('\\n').map((line) => {
                    return(<p>{line}</p>)
                })}
            </Tag>
        )  
    }
    
}

export default Title;