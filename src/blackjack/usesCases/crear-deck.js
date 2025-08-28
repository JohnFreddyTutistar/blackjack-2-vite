import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposCarta 
 * @param {Array} tiposEspeciales 
 * @returns {Array<string>} retorna un unevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if( !tiposCarta || tiposCarta.length  === 0 ) throw new Error('Tipos de carta es obligatorio como un arreglo de string')

    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    
    return _.shuffle( deck );;
}

// export default crearDeck