/**
 * Esta función permite tomar una carta
 * @param {Array<string>} deck  es un arreglo de string
 * @returns {Array} retorna la carta del deck
 */

export const pedirCarta = ( deck ) => {
    
    if( !deck || deck.length === 0) throw new Error('No hay cartas en el deck') 
    // Vamos a tomar la ultima carta del maso 
    return deck.pop()
}