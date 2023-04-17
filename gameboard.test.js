import Gameboard from "./gameboard";

const gameboard = Gameboard();

test("gameboard placeShip function", () => {
    expect(gameboard.placeShip(1, 3))
        .toBe("Placed ship at column 1, row 3");
})

test("gameboard receiveAttack function", () => {
    gameboard.placeShip(1, 3, 3, 'horizontal');
    expect(gameboard.receiveAttack(1, 3))
        .toBe("Hit ship at column 1, row 3");
    expect(gameboard.receiveAttack(1, 4))
        .toBe("Hit ship at column 1, row 4");
    expect(gameboard.receiveAttack(1, 5))
        .toBe("Sunk ship at column 1, row 5");
})