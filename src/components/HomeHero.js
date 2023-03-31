import "./HomeHeroStyles.css";

function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
          <h1>Pressing Premium</h1>
          <p>Vos vêtements notre priorité</p>
          
        </div>
        {/* <h1> Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <a href="index.html">Travel Plan</a> */}
      </div>
    </>
  );
}

export default HomeHero;
