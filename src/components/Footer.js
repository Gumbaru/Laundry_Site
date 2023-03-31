import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>Nom Entreprise</h1>
            <p>Vos vêtements sont entre de bonne main</p>
          </div>
          <div>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Aide</h4>
            <a href="https://fontawesome.com/">Support</a>
            <a href="https://fontawesome.com/">Un Problème ?</a>
            <a href="https://fontawesome.com/">Contactez Nous</a>
          </div>
          <div>
            <h4>Autre</h4>
            <a href="https://fontawesome.com/">Conditions d'utilisations</a>
            <a href="https://fontawesome.com/">politique de confidentialité</a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
