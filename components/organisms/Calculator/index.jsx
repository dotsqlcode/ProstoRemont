import style from './style.module.less';

import CalcField from '@/components/molecules/CalcField';
import Title from '@/components/atoms/Title';
import TextField from '@/components/molecules/TextField';
import CheckBox from '@/components/molecules/CheckBox';
import Button from '@/components/atoms/Button';

const Calculator = ({titleContent, titleTag}) => {
    return(
        <div className={style['calculator']}>
            <div className={style['calculator__title']}>
                <Title Tag={titleTag} content={titleContent} />
            </div>
            <div className={`${style['calculator__row']} ${style['calculator__row--no-flex']}`}>
                <TextField labelContent='Адрес квартиры'  />
            </div>
            <div className={style['calculator__row']}>
                <div className={`${style['calculator__col']} ${style['calculator__col--big']}`}>
                    <CalcField 
                        min={0} 
                        max={6} 
                        placeholder='ph' 
                        values={[
                            'студия',
                            '1-комнатная',
                            '2-комнатная',
                            '3-комнатная',
                            '4-комнатная',
                            '5-комнатная',
                            '6-комнатная',
                        ]} 
                        labelContent='Количество комнат'
                    />
                </div>
                <div className={`${style['calculator__col']} ${style['calculator__col--light']}`}>
                    <TextField labelContent='Площадь, м2' />
                </div>
            </div>
            <div className={style['calculator__row']}>
                <div className={`${style['calculator__col']} ${style['calculator__col--medium']}`}>
                    <CalcField min={0} max={11} placeholder='ph' values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] } labelContent='Количество дверей'/>
                </div>
                <div className={`${style['calculator__col']} ${style['calculator__col--medium']}`}>
                    <CalcField min={0} max={2} placeholder='ph' values={[1, 2, 3] } labelContent='Количество санузлов (1 санузел = ванная+туалет)'/>
                </div>                
            </div>
            <div className={`${style['calculator__row']} ${style['calculator__row--no-flex']}`}>
                <div className={style['calculator__checkbox']}>
                    <CheckBox labelContent='Квартира уже с отделкой, вторичка. Нужен демонтаж.' />
                </div>
                <div className={style['calculator__checkbox']}>
                    <CheckBox labelContent='Нужно возвести стены.' />
                </div>                
            </div>
            <Button content='Перейти к конструктору и рассчитать цену' type='mediumarrow' link='/' />     
        </div>
    )
}

export default Calculator;