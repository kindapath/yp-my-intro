import "./Trick.css";

function Trick() {
  return (
    <>
      <hr className="line" id="trick" />
      <section className="trick">
        <h2 className="trick__heading">
          Фишка в <span className="text-orange-medium">CSS</span>
        </h2>
        <p className="trick__text">
          На этом видео расскажу тебе про небольшой трюк в CSS. Он поможет тебе
          писать стили быстрее.
        </p>
        <iframe
          className="trick__video"
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/Qhaz36TZG5Y"
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Trick;
