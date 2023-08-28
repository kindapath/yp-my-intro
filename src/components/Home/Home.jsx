import "./Home.css";
import kumir from "../../assets/kumir.png";
import schoolPhoto from "../../assets/schoolPhoto.png";
import todayPhoto from "../../assets/todayPhoto.jpg";

function Home() {
  return (
    <div className="homepage">
      <div className="homepage__hello">
        <h1 className="homepage__heading homepage__heading_animated">
          Привет, я - <span className="text-orange-medium">Женя</span>{" "}
          <span className="wave">👋</span>{" "}
        </h1>
      </div>

      <div className="homepage__bio" id="home">
        <h1 className="homepage__heading">Обо мне</h1>
        <div className="homepage__block">
          <div className="homepage__description">
            <p className="homepage__text">
              Мой путь в программировании начался ещё в школе. Мы изучали КуМир
              - система программирования, в которой используется алгоритмический
              язык с русской лексикой. Оглядываясь назад, могу сказать, что
              обучаться по этой системе было бы скучно, если бы не учитель.
            </p>
            <p className="homepage__text">Он умел заинтересовать.</p>
          </div>
          <figure className="homepage__fig">
            <img className="homepage__pic" src={kumir} alt="кумир" />
            <figcaption className="homepage__caption text-orange-light">
              КуМир
            </figcaption>
          </figure>
        </div>

        <div className="homepage__block">
          <figure className="homepage__fig">
            <img className="homepage__pic" src={schoolPhoto} alt="кумир" />
            <figcaption className="homepage__caption text-orange-light">
              11 класс
            </figcaption>
          </figure>
          <div className="homepage__description">
            <p className="homepage__text">
              Затем в 11 классе, я начал изучать Python на фреймворке Django.
              Мне было интересно, но я не имел конкретного плана обучения и
              наставника. Поэтому с трудностями было тяжело справляться.
            </p>
          </div>
        </div>

        <div className="homepage__block">
          <div className="homepage__description">
            <p className="homepage__text">
              Наконец, год назад я решил, что хочу найти дело, с которым хочу
              связать своё будущее. Я пришел в Яндекс Практикум. Там я и
              научился фронтенду.
            </p>
            <p className="homepage__text">
              И с тех пор я влюбился в программирование. 💻🖤
            </p>
          </div>
          <figure className="homepage__fig">
            <img className="homepage__pic" src={todayPhoto} alt="кумир" />
            <figcaption className="homepage__caption text-orange-light">
              Это я сегодня
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Home;
