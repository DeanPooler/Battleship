const Ship = ( length ) => {
    let hits = 0

    const getHits = () => { return hits; }
    const getLength = () => { return length; }
    const hit = () => { hits = hits + 1; }
    const isSunk = () => { return (length - hits) <= 0 ? true: false }

    return { getHits, getLength, hit, isSunk }
}

module.exports = Ship;