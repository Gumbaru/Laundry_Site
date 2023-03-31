import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Notre Entreprise</h1>
        <p>Bienvenue sur le site web de (nom de l'Entreprise)</p>
        <DestinationData
          className="first-des"
          heading="Le Pressing N°1"
          text="Notre pressing situé à (nom de ville) vous fera gagner un temps fou sur le votre reppasse de chemise 
          en semaine ou vous etes tres occupé......"
          img1={Mountain1}
          img2={Mountain2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Une Equipe presente pour vous"
          text="Notre equipe composé de (Nom eployé et nombre) est la pour VOUS acceuillir "
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
