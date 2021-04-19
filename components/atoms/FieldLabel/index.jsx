import style from './style.module.less';

const FieldLabel = ({content}) => {
    return(
        <span className={style['field-label']}>
            {content}
        </span>
    )
}

export default FieldLabel;