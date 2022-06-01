import './App.css';

function App() {

  const textStyle = {
    textAlign: 'justify',
    fontSize: '.6em',
    textIndent: '1em',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
    color: '#fff'
  };

  const imageStyle = {
    maxHeight: '70vh',
    maxWidth: '80%',
  };

  const titleStyle = {
    textAlign: 'center',
  }

  const logoStyle = {
    height: '10vmin',
    position: 'absolute',
    marginLeft: '75%',
    marginTop: '25px',
    pointerEvents: 'none',
  }

  
  return (
    <div className="App">
        <img src="./logoPictote.png" className="App-logo" alt="logo" />
        <img src='./mines-nancy.png' style={logoStyle} alt="mines" />
      <header className="App-header">
        <br/>
        <br/>
        <br/>
        <h1 style={titleStyle}>
          Messagerie par pictogrammes
        </h1>
        <p style={textStyle}>
        En projet 2A du département Informatique, j'ai travaillé toute cette année sur la Messagerie par Pictogrammes, projet proposé par Mme Benmouffek. 
        Cette application est destinée à des enfants ou adolescents privés des outils de communication classiques car non verbaux, ou non lecteurs, ou non scripteurs. 
        Cet outil a été réalisé grâce aux acquis des précédents stagiaires, avec l'appui de 3 étudiants de M1 TAL (Traitement Automatique du Langage). 
        Le but de cette association était de créer un langage nourri de pictogrammes, avec une grammaire. 
        Informatiquement parlant, le projet pose d'autres problèmes que le bon usage d'une grammaire pour communiquer par pictogrammes. 
        Le terme de messagerie induit la nécessité d'un protocole de communication, ainsi qu'une base de données pour mémoriser les utilisateurs et leurs échanges.
        Un utilisateur porteur de handicap peut envoyer des messages à un nombre restreint d'utilisateurs dans sa communauté. 
        Le message après sa formation doit être envoyé dans la boîte d'un destinataire, celui-ci pouvant le visualiser une fois connecté, et y répondre. 
        Pour realiser ce projet, j'ai utilisé React, Node.js pour le framework, et firebase pour tout ce qui est en relation avec le système d'authentification,
        la base de données et le stockage de fichiers(photos).
        Les étudiants de TAL ont créée une grammaire inspirée du Langage des Signes, qui décrit d'abord le contexte de l'action, puis qui la renseigne.
        Ainsi, l'utilisateur de la messagerie doit d'abord choisir un "décor", une salle de classe par exemple, puis selectionner, glisser et déposer des pictogrammes grâce à un système de drag and drop mis en place.
        Les pictogrammes sont rangés par catégorie pour simplifier le choix de l'utilisateur. Ci-dessous une capture d'écran d'un message construit avec l'application:
        </p>
        <img style={imageStyle} src="./example.png" alt='example de message par pictogramme'/>
        <h2>Ce que j'ai appris</h2>
        <p style={textStyle}>
          Quand j'ai debuté ce projet, j'avais une idée très vague de qu'est React et je ne savais même pas ce qu'était firebase.
          Grâce au projet, j'ai découvert ces outils en autonomie et aujourd'hui, j'ai une maitrise relative de ceux-ci.
          Aussi, j'ai appris à travailler en groupe avec des étudiants provenant d'un domaine différent de l'informatique.
          Cette collaboration m'a permis de m'adapter à leur façon de penser, et à la façon de leur faire comprendre qu'un 
          petit détail pour eux pouvait être très chronophage à développer du côté Informatique. C'était, à mon sens, une expérience
          des plus enrichissante que de pouvoir faire des compromis entre ce qui est possible de faire, et ce qui est envisageable dans 
          des delais plus ou moins raisonnables.
        </p>
        <a
          className="App-link"
          href="https://github.com/Abdoul-Aziz55/Pictote"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
