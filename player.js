const Gameboard = require("./gameboard");

const Player = () => {
    const board = Gameboard();

    const getBoard = () => { return board; }

    const attack = (col, row, player) => {
        return player.getBoard().receiveAttack(col, row);
    }

    return {attack, getBoard}
}

module.exports = Player;