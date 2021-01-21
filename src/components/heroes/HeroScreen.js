import React from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = ({history}) => {

    /** para saber los parametros de la URL, otra forma es usar en desestructuracion en el props */
    const {heroId} = useParams();

    /** Recuracion de datos por el ID */
    const hero = getHeroById(heroId);

    /** validacion si es que la URL no existiera, redirige al home */
    if (!hero) {
        return (
            <Redirect to="/" />
        )
    }

    /** Retornar */
    const handleReturn = ()=>{
        console.log(history.length);

        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }

    }

    /** desestructuracion de datos */
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;



    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/img/${heroId}.jpg`}    
                    alt={superhero}
                    className="img-thumbnail"
                />
            </div>
            
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego </b>{ alter_ego}</li>
                    <li className="list-group-item"><b>Publisher </b>{ publisher }</li>
                    <li className="list-group-item"><b>First Appeareance </b>{ first_appearance }</li>
                    <li className="list-group-item"><b></b></li>
                </ul>

                <h5>Characters</h5>
                <p> {characters} </p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
            
        </div>
    )
}

export default HeroScreen;