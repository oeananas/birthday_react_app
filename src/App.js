import React from 'react';
import classes from './App.module.css';
import Image from "./containers/Image/Image";
import Slider from './containers/Slider/Slider'
import Header from "./containers/Header/Header"
import Footer from "./components/Footer/Footer"

import headerPic1 from "./animations/header/1.png"
import headerPic2 from "./animations/header/2.png"
import headerPic3 from "./animations/header/3.png"
import headerPic4 from "./animations/header/4.png"
import headerPic5 from "./animations/header/5.png"
import headerPic6 from "./animations/header/6.png"
import headerPic7 from "./animations/header/7.png"
import headerPic8 from "./animations/header/8.png"
import headerPic9 from "./animations/header/9.png"

import togetherPic0 from "./animations/together/0.png";
import togetherPic1 from "./animations/together/1.png";
import togetherPic2 from "./animations/together/2.png";
import togetherPic3 from "./animations/together/3.png";

import flowersPic1 from "./animations/flowers/1.png";
import flowersPic2 from "./animations/flowers/2.png";
import flowersPic3 from "./animations/flowers/3.png";
import flowersPic4 from "./animations/flowers/4.png";
import flowersPic5 from "./animations/flowers/5.png";
import flowersPic6 from "./animations/flowers/6.png";
import flowersPic7 from "./animations/flowers/7.png";
import flowersPic8 from "./animations/flowers/8.png";
import flowersPic9 from "./animations/flowers/9.png";
import flowersPic10 from "./animations/flowers/10.png";

import balloonsPic1 from "./animations/balloons/1.png";
import balloonsPic2 from "./animations/balloons/2.png";
import balloonsPic3 from "./animations/balloons/3.png";
import balloonsPic4 from "./animations/balloons/4.png";
import balloonsPic5 from "./animations/balloons/5.png";
import balloonsPic6 from "./animations/balloons/6.png";
import balloonsPic7 from "./animations/balloons/7.png";

import dancingPic1 from "./animations/dancing/1.png"
import dancingPic2 from "./animations/dancing/2.png"
import dancingPic3 from "./animations/dancing/3.png"
import dancingPic4 from "./animations/dancing/4.png"
import dancingPic5 from "./animations/dancing/5.png"
import dancingPic6 from "./animations/dancing/6.png"
import dancingPic7 from "./animations/dancing/7.png"
import dancingPic8 from "./animations/dancing/8.png"
import dancingPic9 from "./animations/dancing/9.png"
import dancingPic10 from "./animations/dancing/10.png"
import dancingPic11 from "./animations/dancing/11.png"

import mom1 from "./photo/mom/1.jpg"
import mom2 from "./photo/mom/2.jpg"
import mom3 from "./photo/mom/3.jpg"
import mom4 from "./photo/mom/4.jpg"
import mom5 from "./photo/mom/5.jpg"
import mom6 from "./photo/mom/6.jpg"
import mom7 from "./photo/mom/7.jpg"
import mom8 from "./photo/mom/8.jpg"
import mom9 from "./photo/mom/9.jpg"
import mom10 from "./photo/mom/10.jpg"
import mom11 from "./photo/mom/11.jpg"
import mom12 from "./photo/mom/12.jpg"
import mom13 from "./photo/mom/13.jpg"
import mom14 from "./photo/mom/14.jpg"

const header = [
  headerPic1,
  headerPic2,
  headerPic3,
  headerPic4,
  headerPic5,
  headerPic6,
  headerPic7,
  headerPic8,
  headerPic9
];

const together = [
  togetherPic0,
  togetherPic1,
  togetherPic2,
  togetherPic3
];

const flowers = [
  flowersPic1,
  flowersPic2,
  flowersPic3,
  flowersPic4,
  flowersPic5,
  flowersPic6,
  flowersPic7,
  flowersPic8,
  flowersPic9,
  flowersPic10
];

const balloons = [
  balloonsPic1,
  balloonsPic2,
  balloonsPic3,
  balloonsPic4,
  balloonsPic5,
  balloonsPic6,
  balloonsPic7,
];

const dancing = [
  dancingPic1,
  dancingPic2,
  dancingPic3,
  dancingPic4,
  dancingPic5,
  dancingPic6,
  dancingPic7,
  dancingPic8,
  dancingPic9,
  dancingPic10,
  dancingPic11
];

const photo = [
  mom1,
  mom2,
  mom3,
  mom4,
  mom5,
  mom6,
  mom7,
  mom8,
  mom9,
  mom10,
  mom11,
  mom12,
  mom13,
  mom14,
];

class App extends React.Component {

  render = () => {
    return (
      <div className={classes.App}>
        <div className="container-fluid">
          <Header
            width='100%'
            images={header}
          />
          <Slider
            images={photo}
          />
            <div className={classes.Block}>
              <div className="row">
                <div className='col-lg-6'>
                  <h3>Нажми на меня!</h3>
                  <Image
                    width='100%'
                    images={together}
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className={classes.Strong}>
                    Поздравляют тебя дети,<br/>
                    Мама лучшая на свете!<br/>
                    С днем рождения, дорогая,<br/>
                    Мама милая, родная!<br/>

                    Ангелом ты нашим стала,<br/>
                    Столько ты ночей не спала.<br/>
                    Ты мечты все исполняла,<br/>
                    О себе ты забывала.<br/>

                    Мы за все благодарим,<br/>
                    Мы тобою дорожим.<br/>
                    Будь всегда ты молодой<br/>
                    И веселой будь такой.<br/>

                    Мамочка, ты улыбайся,<br/>
                    Не грусти, не огорчайся<br/>
                    Все плохое пусть пройдет,<br/>
                    А душа пускай поет!<br/>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.Block}>
              <div className="row">
                <div className="col-lg-6">
                  <h2 className={classes.Strong}>
                    Наша мамочка родная,<br/>
                    Поздравляем с днем рождения!<br/>
                    Ты прекрасная такая,<br/>
                    Как весеннее цветение!<br/>
                    Мы желаем тебе счастья,<br/>
                    Чтоб сбывались все мечты,<br/>
                    Чтобы в жизни все ненастья<br/>
                    Превратились вдруг в цветы,<br/>
                    И улыбка пусть сияет<br/>
                    Твоя много-много лет!<br/>
                    В семье нашей каждый знает:<br/>
                    Мамы лучше в мире нет!<br/>
                  </h2>
                </div>
                <div className="col-lg-6">
                  <h3>На меня тоже можно нажать!</h3>
                  <Image
                    width='100%'
                    images={flowers}
                  />
                </div>
              </div>
            </div>
            <div className={classes.Block}>
              <div className="row">
                <div className="col-lg-6">
                  <h3>И на меня нажимай!</h3>
                  <Image
                    width='100%'
                    images={balloons}
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className={classes.Strong}>
                    Мамочка любимая,<br/>
                    Милая, родная,<br/>
                    Тебя с днем рождения<br/>
                    Дети поздравляют.<br/>

                    Мы в любви и нежности<br/>
                    Купаемся твоей,<br/>
                    На свете не найти<br/>
                    Счастливей нас детей.<br/>

                    Желаем, чтоб была<br/>
                    Здоровой и веселой,<br/>
                    Все твои желания<br/>
                    Исполнить мы готовы.<br/>

                    Лучшей в мире маме<br/>
                    Счастья мы желаем,<br/>
                    Береги себя,<br/>
                    Мамочка родная.<br/>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.Block}>
              <div className="row">
                <div className="col-lg-6">
                  <h2 className={classes.Strong}>
                    Как только, мама, ты все успеваешь?<br/>
                    Десятки профессий в себе совмещаешь:<br/>
                    Психолог, дизайнер, флорист, аниматор,<br/>
                    Портной и кондитер, и парикмахер.<br/>

                    Такой ты учитель и медсестра,<br/>
                    Что позавидуют и мастера.<br/>
                    При этом красива, умна, весела.<br/>
                    Ты счастье и радость в наш мир принесла.<br/>

                    В твой день рожденья хотим пожелать<br/>
                    Успехов, любви, иногда все же спать.<br/>
                    За то, что ты есть, благодарны судьбе.<br/>
                    Здоровья и счастья желаем тебе.<br/>
                  </h2>
                </div>
                <div className="col-lg-6">
                  <h3>На меня нажать не забудьте!</h3>
                  <Image
                    width='100%'
                    images={dancing}
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default App
