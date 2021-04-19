import style from './../public/less/pages/design-project/style.module.less';
import './../public/libs/swiper/src/swiper-vars.less';
import './../public/libs/swiper/src/swiper.less';

import {useState} from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import MainLayout from '@/components/layout/MainLayout';
import Navigation from '@/components/molecules/Navigation';
import Content from '@/components/molecules/Content';
import DoubleLayout from '@/components/layout/DoubleLayout';
import Calculator from '@/components/organisms/Calculator';
import ImageChanger from '@/components/molecules/ImageChanger';
import Footer from '@/components/layout/Footer';
import SectionRefs from '@/components/molecules/SectionRefs';


const DesignProject = () => {
    return (
        <>
            <Head>
                <title>DesignProject</title>
                <link rel="preload" href="./public/fonts/SFProDisplay-Regular.woff2" as="font" type="font/woff2" />
            </Head>
            <div className={style['design-project']}>
                <Header type='crumbs' />
                <div className={`${style['design-project__pen']} ${style['design-project__pen--light']}`}>
                    <Image
                        src='/img/backgrounds/pen1.png'
                        width='400px'
                        height='460px'
                    />
                </div>
                <div className={`${style['design-project__pen']} ${style['design-project__pen--big']}`}>
                    <Image
                        src='/img/backgrounds/pen2.png'
                        width='560px'
                        height='864px'
                    />
                </div>
                <MainLayout>
                    <Navigation />
                    <div>
                        <Content titleContent='Готовый дизайн проект.' titleTag='h1'>
                            <div className={style['design-project__descriptions']}>
                                <p className={style['design-project__desc']}>
                                    Мы адаптируем наш проект и наши стандарты к вашей квартире, <br />
                                    учтём ваши пожелания и внесём изменения. <br />
                                    Для своих проектов мы выбрали надёжные <br />
                                    технические решения в отделке, сантехнике <br />
                                    и электрике, отработанные на практике <br />
                                    и проверенные временем в быту. <br />
                                </p>
                                <p className={style['design-project__desc']}>
                                    После фактического замера квартиры и согласования о начале ремонта <br />
                                    приступаем к разработке технического проекта.
                                </p>
                            </div>
                        </Content>
                        <Content titleContent='Состав проекта:' titleTag='h2'>
                            <ul className={style['design-project__list']}>
                                <li className={style['design-project__list-item']}>Обмерочный план</li>
                                <li className={style['design-project__list-item']}>Интерьерный план</li>
                                <li className={style['design-project__list-item']}>План монтажа и демонтажа</li>
                                <li className={style['design-project__list-item']}>План розеточных групп</li>
                                <li className={style['design-project__list-item']}>План освещения и выключателей</li>
                                <li className={style['design-project__list-item']}>План тёплых полов</li>
                                <li className={style['design-project__list-item']}>Раскладка напольных покрытий</li>
                                <li className={style['design-project__list-item']}>План финишной отделки стен</li>
                                <li className={style['design-project__list-item']}>План открытия дверей</li>
                                <li className={style['design-project__list-item']}>План устройства системы защиты от протечки</li>
                                <li className={style['design-project__list-item']}>План подоконников, столешниц и ступеней</li>
                                <li className={style['design-project__list-item']}>Развёртка стен с раскладкой плитки и другие планы</li>
                            </ul>
                        </Content>
                        <Content titleContent='Тот, кто когда-либо делал \n ремонт самостоятельно \nподтвердит:' titleTag='h2'>
                            <div className={style['design-project__descriptions']}>
                                <p className={style['design-project__desc']}>
                                    Ремонт превращается в головную боль <br />
                                    бесконечные расходы и постоянную нервотрёпку <br />
                                    без продуманного до запятой технического проекта.
                                </p>
                            </div>
                        </Content>
                    </div>
                </MainLayout>
                <section className={style['oplan-section']}>
                    <DoubleLayout>
                        <Content titleContent='Обмерочный план' titleTag='h2'>
                            <div className={style['design-project__descriptions']}>
                                <p className={`${style['design-project__desc']} ${style['design-project__desc--light']}`}>
                                    После фактических замеров квартиры <br />
                                    мы составляем обмерочные чертежи. <br />
                                </p>
                            </div>
                        </Content>
                        <Image
                            src='/img/schems/schem1.svg'
                            width='780px'
                            height='600px'
                        />
                    </DoubleLayout>
                    <div className={style['design-project__section-line']}></div>
                </section>
                <section className={style['iplan-section']}>
                    <DoubleLayout>
                        <Content titleContent='Интерьерный план' titleTag='h2'>
                            <div className={style['design-project__descriptions']}>
                                <p className={`${style['design-project__desc']} ${style['design-project__desc--light']}`}>
                                Во время замеров обсудим будущий интерьер.  <br/>
                                Подберём расстановку мебели, электроприборов, <br/>
                                оборудования и составим интерьерный план
                                </p>
                            </div>
                        </Content>
                        <Image
                            src='/img/schems/schem2.svg'
                            width='780px'
                            height='600px'
                        />
                    </DoubleLayout>
                    <div className={style['design-project__section-line']}></div>
                </section>
                <section className={style['mplan-section']}>
                    <DoubleLayout>
                        <Content titleContent='План монтажа/демонтажа' titleTag='h2'>
                            <div className={style['design-project__descriptions']}>
                                <p className={`${style['design-project__desc']} ${style['design-project__desc--light']}`}>
                                    Составим план возведения и демонтажа конструкций. <br />
                                    Подскажем где перепланировка возможна, а где нет.
                                </p>
                            </div>
                        </Content>
                        <Image
                            src='/img/schems/schem3.svg'
                            width='780px'
                            height='600px'
                        />
                    </DoubleLayout>
                    <div className={style['design-project__section-line']}></div>
                </section>
                <section className={style['yplan-section']}>
                    <DoubleLayout>
                        <Content titleContent='План электрики \n и освещения' titleTag='h2'>
                            <div className={style['design-project__descriptions']}>
                                <p className={`${style['design-project__desc']} ${style['design-project__desc--light']}`}>
                                    На основании интерьерного плана, <br />
                                    составим план розеточных групп и освещения, <br />
                                    в удобных местах и в достаточном количестве. <br />
                                    Также предусмотрим слаботочные кабели для <br />
                                    TV, интернета и домофона. <br />
                                </p>
                            </div>
                        </Content>
                        <Image
                            src='/img/schems/schem4.svg'
                            width='780px'
                            height='600px'
                        />
                    </DoubleLayout>
                    <div className={style['design-project__section-line']}></div>
                </section>
                <section className={style['nplan-section']}>
                    <DoubleLayout>
                        <Content titleContent='Раскладка напольных покрытий' titleTag='h2'>
                            <div className={style['design-project__descriptions']}>
                                <p className={`${style['design-project__desc']} ${style['design-project__desc--light']}`}>
                                    Для каждой комнаты мы составим раскладку <br />
                                    напольных покрытий с учётом рекомендаций <br />
                                    производителя по максимальной длине бесшовной <br />
                                    укладки покрытий и отступов от стен. <br />
                                </p>
                            </div>
                        </Content>
                        <Image
                            src='/img/schems/schem5.svg'
                            width='780px'
                            height='600px'
                        />
                    </DoubleLayout>
                    <div className={style['design-project__section-line']}></div>
                </section>
                <section className={style['rplan-section']}>
                    <DoubleLayout>
                        <Content titleContent='Развёртки стен \n с раскладкой плитки' titleTag='h2'>
                            <div className={style['design-project__descriptions']}>
                                <p className={`${style['design-project__desc']} ${style['design-project__desc--light']}`}>
                                    Исходя из интерьерного плана составим <br />
                                    развёртки по стенам с раскладкой плитки. <br />
                                    Такие чертежи выполняются по фактическим размерам <br />
                                    помещения после оштукатуривания.
                                </p>
                            </div>
                        </Content>
                        <Image
                            src='/img/schems/schem6.svg'
                            width='780px'
                            height='440px'
                        />
                    </DoubleLayout>
                </section>
                <SectionRefs links={
                    [
                        {
                            title: 'Работы. Технадзор →',
                            desc: 'Подробнее о ремонтно-строительных \n работах и контроле качества и сроков',
                            image: '/img/refs/drill.png',
                        },
                        {
                            title: 'Материалы и комплектация →',
                            desc: "Подробнее об отделочных материалах \n и комплектации конечными приборами",
                            image: '/img/refs/tip.png',
                        }
                    ]
                } />
                <section className={style['calcchanger-section']}>
                    <div className={style['calcchanger-section__calc']}>
                        <Calculator titleTag='h2' titleContent='Конструктор ремонта' />
                    </div>
                    <div className={style['calcchanger-section__changer']}>
                        <ImageChanger>
                            <img src='/img/imagechanger/calc-1.jpg' />
                            <img src='/img/imagechanger/calc-2.jpg' />
                            <img src='/img/imagechanger/calc-3.jpg' />
                            <img src='/img/imagechanger/calc-4.jpg' />
                            <img src='/img/imagechanger/calc-5.jpg' />
                            <img src='/img/imagechanger/calc-6.jpg' />
                        </ImageChanger>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
 
export default DesignProject;