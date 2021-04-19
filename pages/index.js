import style from './../public/less/pages/home/style.module.less';
import './../public/libs/swiper/src/swiper-vars.less';
import './../public/libs/swiper/src/swiper.less';

import {useState} from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import MainLayout from '@/components/layout/MainLayout';

import Navigation from '@/components/molecules/Navigation';
import Description from '@/components/molecules/Description';
import DoubleLayout from '@/components/layout/DoubleLayout';
import Calculator from '@/components/organisms/Calculator';
import ImageChanger from '@/components/molecules/ImageChanger';
import Footer from '@/components/layout/Footer';

import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Controller } from 'swiper';
import autoplay from 'public/libs/swiper/src/components/autoplay/autoplay';


const Home = () => {

  SwiperCore.use([autoplay, Controller]);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return(
    <>
    <Head>
      <title>main page</title>
      <link rel="preload" href="./public/fonts/SFProDisplay-Regular.woff2" as="font" type="font/woff2" />
    </Head>
    <div className={style['home']}>
      <Header />
      <section className={style['about-section']}>
        <MainLayout>
          <Navigation />
          <div className={style['about-section__descriptions']}>
            <Description 
            titleTag="h1"
            titleContent="Занимайтесь любимыми делами, \n а ремонт мы возьмём на себя."
            content="Ремонтируем квартиры под ключ с готовыми \n
            архитектурными проектами и фиксированной ценой \n
            всего за 3,5-4 месяца."
            buttonContent="Выбрать дизайн и рассчитать цену"
            buttonLink="/"
            buttonType="bigarrow"
            type="withButton"
             />
            <Description 
            titleTag="h3"
            titleContent="Нет, серьезно! \n Абсолютно всё сделаем сами. \n
            Просто наблюдайте за ремонтом \n онлайн и наслаждайтесь."
            content="День в день вы получите готовый, \n
            качественный, технически грамотный ремонт \n
            без переплат, стрессов и траты времени."
             />
          </div>
        </MainLayout>
      </section>
      <section className={style['designp-section']}>
        <DoubleLayout>
          <Description 
            titleTag="h3"
            titleContent="Дизайн проект"
            content="Грамотный проект включен в цену. \n
            В проект включены надёжные технические \n
            решения в отделке, сантехнике и электрике."
            buttonContent="Подробнее о проекте →"
            buttonLink="/"
            buttonType="gray"
            type="withButton"
            relatedClass={style['designp-section__description']}
          />
          <Image
            src="/img/backgrounds/plan.svg"
            width="856px"
            height="668px"
          />
        </DoubleLayout>
        <div className={style['home__section-line']}></div>
      </section>
      <section className={style['techsv-section']}>
        <DoubleLayout>
          <Description 
            titleTag="h3"
            titleContent="Работы. \n Технадзор."
            content="Все работы, авторский и \n
            технический надзоры включены в цену. \n
            Мы организуем и проконтролируем абсолютно \n
            все процессы ремонта вашей квартиры."
            buttonContent="Подробнее о работах и контроле →"
            buttonLink="/"
            buttonType="gray"
            type="withButton"
            relatedClass={style['designp-section__description']}
          />
          <></>
        </DoubleLayout>
        <div className={style['techsv-section__stick']}>
          <Image
            src="/img/backgrounds/stick.png"
            width="700px"
            height="583px"
          />
        </div>
      </section>
      <section className={style['materials-section']}>
        <DoubleLayout>
          <Description 
            titleTag="h3"
            titleContent="Материалы"
            content="Все черновые материалы, \n
            чистовые (финишные) материалы, \n
            доставки и подъёмы включены в цену."
            buttonContent="Подробнее о материалах →"
            buttonLink="/"
            buttonType="gray"
            type="withButton"
            relatedClass={style['designp-section__description']}
          />
          <></>
        </DoubleLayout>
        <div className={style['materials-section__door']}>
          <Image
            src="/img/backgrounds/door.png"
            width="500px"
            height="1873px"
          />
        </div>
        <div className={style['materials-section__bucket']}>
          <Image
            src="/img/backgrounds/bucket.png"
            width="300px"
            height="333px"
          />
        </div>
      </section>
      <section className={style['complect-section']}>
        <DoubleLayout>
          <Description 
            titleTag="h3"
            titleContent="Комплектация"
            content="— черновые материалы \n
            — чистовые материалы \n
            — медная проводка, электрощиток \n
            — слаботочный щиток \n
            — разводка воды, сантехшкаф \n
            — унитаз с инсталляцией \n
            — раковина с тумбой \n
            — ванна или душевая \n
            — смесители и душевая стойка \n
            — зеркало с подсветкой \n
            — двери с фурнитурой \n
            — осветительные приборы "
            buttonContent="Подробнее о комплектации ремонта →"
            buttonLink="/"
            buttonType="gray"
            type="withButton"
            relatedClass={style['designp-section__description']}
          />
          <></>
        </DoubleLayout>
        <div className={style['complect-section__lamp']}>
          <Image
            src="/img/backgrounds/lamp.png"
            width="500px"
            height="656px"
          />
        </div>
      </section>
      <section className={style['contract-section']}>
        <DoubleLayout>
          <Description 
            titleTag="h3"
            titleContent="Договор. \n
            Фиксированные цена и сроки ремонта. \n
            Поэтапная оплата."
            content="Никаких доплат и затягивания сроков. \n
            До начала ремонта вы уже точно знаете \n
            сколько он стоит и когда закончится. \n
            Цена, сроки, 3 этапа оплаты \n
            — всё фиксируется в договоре."
            relatedClass={style['designp-section__description']}
          />
          <Image
            src="/img/backgrounds/contract.png"
            width="774px"
            height="646px"
          />
        </DoubleLayout>
        <div className={style['home__section-line']}></div>
      </section>
      <section className={style['video-translation']}>
        <DoubleLayout>
          <Description 
            titleTag="h3"
            titleContent="Видеотрансляция и контроль ремонта"
            content="Ремонт проходит без вашего участия. \n
            Наблюдайте за ремонтом с телефона \n
            (iOS, Android), в нашем приложении. \n
            Лучший сериал на ближайшие 3 месяца! \n
            Документы и актуальная информация по квартире \n
            всегда под рукой."
            relatedClass={style['designp-section__description']}
            type="doubleButton"
          />
          <div className={style['video-translation__slider']}>
            <Image
              src="/img/backgrounds/woman-hand.png"
              width="600px"
              height="722px"
            />
            <div className={style['video-translation__swiper']}>
              <Swiper
                slidesPerView={1}
              >
                <SwiperSlide>
                  <img className={style['video-translation__slide-image']} src='/img/slider/slide1.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className={style['video-translation__slide-image']} src='/img/slider/slide1.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className={style['video-translation__slide-image']} src='/img/slider/slide1.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className={style['video-translation__slide-image']} src='/img/slider/slide1.jpg' />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>    
        </DoubleLayout>
        <div className={style['home__section-line']}></div>
      </section>
      <section className={style['CRM-section']}>
        <DoubleLayout>
            <Description 
              titleTag="h3"
              titleContent="Система управления ремонтами \n
              (Система ERP)"
              content="
              Мы разработали собственную Систему управления ремонтами, \n
              для автоматизации рутинных задач и контроля за всеми процессами ремонта, \n
              чтобы все было сделано в соответствии с нашими стандартами и в срок. \n \n \n
              Технадзор, снабженцы и менеджеры проектов используют Систему для \n
              упрощенного ведения объектов и выполнения своих задач."
              relatedClass={style['designp-section__description']}
            />
            <div className={style['CRM-section__image']}>
              <Image
                src="/img/backgrounds/CRM.png"
                width="700px"
                height="464px"
              />   
            </div> 
        </DoubleLayout>
        <div className={style['home__section-line']}></div>
      </section>
      <section className={style['rgalery-section']}>
        <div className={style['rgalery-section__description']}>
          <Description 
              titleTag="h3"
              titleContent="Фотографии ремонтов"
              content="
              Для своих ремонтов мы используем исключительно качественные и проверенные материалы. \n
              С помощью нашего конструктора ремонта \n 
              вы можете собрать тот вариант дизайна, который нравится именно вам. \n
              Проект ремонта каждой квартиры обсуждается с клиентом, подбирается подходящая планировка, \n
              расположение розеточных групп, освещения и других элементов."
              relatedClass={style['designp-section__description']}
            />
        </div>
        <div className={`${style['rgalery-section__slider']} rgalery-section__slider`}>
          <div onClick={() => {controlledSwiper.slidePrev();}} className={`${style['rgalery-section__slider-arrow']} ${style['rgalery-section__slider-arrow--left']}`}>
            <Image
              src='/img/foto-arrow-left.svg'
              width='100px'
              height='15px'
            />
          </div>
          <div onClick={() => {controlledSwiper.slideNext();}} className={`${style['rgalery-section__slider-arrow']} ${style['rgalery-section__slider-arrow--right']}`}>
            <Image
              src='/img/foto-arrow-right.svg'
              width='100px'
              height='15px'
            />
          </div>
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            onSwiper={setControlledSwiper}
            controller={{
              control: controlledSwiper
            }}
          >
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--large']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio1.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--large']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio2.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--large']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio3.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--light']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio4.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--medium']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio5.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--medium']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio6.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--big']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio7.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--light']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio8.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${style['rgalery-section__slide']} ${style['rgalery-section__slide--light']}`}>
                <img className={style['rgalery-section__image']} src='/img/portfolio/portfolio9.jpg' />
                <div className={style['rgalery-section__slide-description']}>
                  <h4 className={style['rgalery-section__slide-title']}>
                    Высокая белая дверь
                  </h4>
                  <p className={style['rgalery-section__slide-mdesc']}>
                    Дверь увеличенной высоты Profil Doors.
                    Отлично подходит квартирам с высокими потолками. 
                    Такая дверь не входит в складскую программу и изготавливается на заказ.
                  </p>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className={style['calculator-section']}>
            <Calculator titleTag='h2' titleContent='Конструктор ремонта' />
      </section>
      <section className={style['view-section']}>
        <ImageChanger>
          <img src='/img/imagechanger/calc-1.jpg' />
          <img src='/img/imagechanger/calc-2.jpg' />
          <img src='/img/imagechanger/calc-3.jpg' />
          <img src='/img/imagechanger/calc-4.jpg' />
          <img src='/img/imagechanger/calc-5.jpg' />
          <img src='/img/imagechanger/calc-6.jpg' />
        </ImageChanger>
      </section>
      <section className={style['team-section']}>
          <DoubleLayout>
            <Description 
                titleTag="h3"
                titleContent="Команда"
                content="Мы выходцы из крупных компаний - \n
                Mail.Ru Group, ГК МонАрх, ПИК, Мортон. \n
                Команда ИТ специалистов и настоящих \n
                строителей с богатым бэкграундом!"
              />
              <div className={style['team-section__team-photo']}>
                <Image
                  src='/img/backgrounds/team.png'
                  width='954px'
                  height='439px'
                />
              </div>
          </DoubleLayout>
      </section>
      <section className={style['map-section']}>
        <div className={style['map-section__info']}>
            <h3 className={style['map-section__title']}>Наши контакты в Москве</h3>
            <div>
              <p className={style['map-section__desc']}>
                Адрес: г.Москва, Проспект Мира 114а, офис 7
              </p>
              <p className={style['map-section__desc']}>
                Для клиентов: <br />
                hello@prosto-remont.com <br />
                +7 (499) 390-76-91
              </p>
              <p className={style['map-section__desc']}> 
                Для поставщиков (только почта): <br />
                supply@prosto-remont.com <br />
              </p>
              <p className={style['map-section__desc']}>
                Для застройщиков: <br />
                gc@prosto-remont.com <br />
                +7 (499) 390-76-91
              </p>
            </div>
        </div>
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A24b5a521e230f7fcb36f46e5a1bf0c52e8271580369f428ef353d049ea7d4c7a&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
      </section>
      <Footer />
    </div>
  </>
  )
}

export default Home;