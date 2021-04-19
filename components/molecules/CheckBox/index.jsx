import FieldLabel from '@/components/atoms/FieldLabel';
import style from './style.module.less';

const CheckBox = ({labelContent}) => {
    return(
        <div className={style['checkbox']}>
            <label className={style['checkbox__label']}>
                <input type="checkbox" className={style['checkbox__hide']}/>
                <div className={style['checkbox__custom']}>
                    
                </div>
                <FieldLabel content={labelContent} />
            </label>
            
        </div>
    )
}

export default CheckBox;