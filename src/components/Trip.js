import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>(nom de l'entrprise) est a votre écoute</h1>
      <p>Trouvez nous sur Google maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Vos vêtements notre priorité"
          text="Vos vetements seront nettoyer avec soin et secher avec nos machines performantes."
        />
        <TripData
          image={Trip2}
          heading="Qualité des Machines"
          text="Nos Machines sont neuves et performantes pour un lavage 100% degraissant et nettoyant."
        />
        <TripData
          image={Trip3}
          heading="Notre équipes vous assistera"
          text="Notre equipes de specialistes sera la pour vous et est a l'ecoute pour n'importe quel besoin"
        />
      </div>
    </div>
  );
}

export default Trip;
