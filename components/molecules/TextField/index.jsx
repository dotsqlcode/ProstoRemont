import style from './style.module.less';

import FieldLabel from '@/components/atoms/FieldLabel';

const TextField = ({labelContent}) => {
    return(
        <div className={style['text-field']}>
            <div className={style['text-field__label']}>
                <FieldLabel content={labelContent} />
            </div>
            <input className={style['text-field__input']}/>
        </div>
    )
}

export default TextField;