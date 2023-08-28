import "./Trick.css";

function Trick() {
  return (
    <>
      <hr className="line" id="trick" />
      <section className="trick">
        <h2 className="trick__heading">
          Фишки в <span className="text-orange-medium">CSS</span>
        </h2>
        <p className="trick__text">
          В этом видео расскажу тебе про небольшие трюки в CSS. Они помогут тебе
          писать стили эфективнее.
        </p>
        <iframe
          className="trick__video"
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/gby_JW2u5OE"
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Trick;
