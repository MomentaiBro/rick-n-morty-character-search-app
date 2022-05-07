import react from 'react'

const CharacterCard = ({character}) => {
    return (
        <div className='character'>
            <div>
                <p>{character.name}</p>
            </div>
            <div>
                <img 
                    src={character.image !== 'N/A' ? character.image : 'https://via.placeholder.com/404'}
                    alt={character.name}
                 />
            </div>
            <div>
                <span>{character.species} | {character.location.name}</span>
                <h3>{character.name}</h3>
             </div>
      </div>
    );
}

export default CharacterCard;