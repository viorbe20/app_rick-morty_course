export default function Characters(props) {
  //Props: recoge toda la información de los personajes
  const { characters, setCharacters } = props;

  //Al volver a null, te redirige a la home
  const resetCharacters = () => {
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver a Home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <img src={character.image} alt={character.name} />
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios:</span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie:</span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver a Home</span>
    </div>
  );
}
