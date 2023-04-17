const Ship = require("./ship");

const Gameboard = () => {
    let board = new Array(10).fill(0).map(() => new Array(10).fill(0));
    let moveLog = [];
    let shipCount = 0;
    let sunkCount = 0;

    const getBoard = () => { return board; }
    const getMoveLog = () => { return moveLog; }
    const allShipsSunk = () => { return shipCount === sunkCount ? true : false };

    const placeShip = (col, row, size, or) => {
        const ship = Ship(size);
        shipCount += 1;
        for (let i = 0; i < size; i++) {
            if (or === 'vertical') { board[col + i][row] = ship; }
            else if (or === 'horizontal') { board[col][row + i] = ship; }
        }
        return `Placed ship at column ${col}, row ${row}`;
    }

    const receiveAttack = (col, row) => {
        moveLog.push([col, row])
        
        if (board[col][row] === 0) {
          return `Missed attack at column ${col}, row ${row}`;
        } else if (board[col][row] !== 0) {
          board[col][row].hit();
          if (board[col][row].isSunk()) {
            sunkCount += 1;
            return `Sunk ship at column ${col}, row ${row}`;
          } else {
            return `Hit ship at column ${col}, row ${row}`;
          }
        }
    }

    return { getBoard, getMoveLog, placeShip, receiveAttack, allShipsSunk };
}

module.exports = Gameboard