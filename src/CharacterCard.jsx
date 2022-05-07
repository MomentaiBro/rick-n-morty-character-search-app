import react from 'react'

const CharacterCard = () => {
    return (
        <div className='character'>
            <div>
            <p>{characterData1.name}</p>
            </div>
        <div>
          <img 
            src={characterData1.image !== 'N/A' ? characterData1.image : 'https://via.placeholder.com/404'}
            alt={characterData1.name}
          />
        </div>
        <div>
          <span>{characterData1.name}</span>
          <h3>{characterData1.name}</h3>
        </div>
      </div>
    );
}