import style from './style.module.less';

import Link from 'next/link';

const SectionRefs = ({links}) => {

    let lll = links[1].desc.split('\\n').map((line) => {
        return(<p>{line}</p>)
    })

    console.log(lll)

    return(
        <section className={style['section-refs']}>
            <Link href='/'>
                <a className={style['section-refs__ref']}>
                    <div className={style['section-refs__content']}>
                        <h3 className={style['section-refs__title']}>
                            {links[0].title}
                        </h3>
                        <div className={style['section-refs__desc']}>
                            {links[0].desc.split('\n').map((line) => {
                                return(<p>{line}</p>)
                            })}
                        </div>
                    </div>
                    <img className={style['section-refs__image']} src={links[0].image} />
                </a>
            </Link>
            <Link href='/'>
                <a className={style['section-refs__ref']}>
                    <div className={style['section-refs__content']}>
                        <h3 className={style['section-refs__title']}>
                            {links[1].title}
                        </h3>
                        <div className={style['section-refs__desc']}>
                            {links[1].desc.split('\n').map((line) => {
                                return(<p>{line}</p>)
                            })}
                        </div>
                        <img className={style['section-refs__image']} src={links[1].image} />
                    </div>
                </a>
            </Link>
        </section>
    );
}
 
export default SectionRefs;