import style from './style.module.less';

import {useState} from 'react'

import FieldLabel from '@/components/atoms/FieldLabel';

const CalcField = ({max, min, placeholder, values, labelContent}) => {



    const [incValue, setIncValue] = useState(min);

    const incrementValue = () => {
        if(incValue + 1 > max) return;
        setIncValue(incValue + 1)
    }

    const decrementValue = () => {
        if(incValue - 1 < min) return;
        setIncValue(incValue - 1)
    }

    return(
        <div className={style['calc-field']}>
            <div className={style['calc-field__label']}>
                <FieldLabel content={labelContent} />
            </div>
            <div className={style['calc-field__wrap']}>
                <div onClick={decrementValue} className={style['calc-field__control']}>
                    -
                </div>
                <input className={style['calc-field__input']} placeholder={placeholder} type='text' value={values[incValue]} />
                <div onClick={incrementValue} className={style['calc-field__control']}>
                    +
                </div>
            </div>
        </div>
    )
}

export default CalcField;