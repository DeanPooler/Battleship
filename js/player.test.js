import Player from "./player"

const player = Player();
const enemy = Player();
enemy.getBoard().placeShip(1, 3, 3, 'horizontal');

test("player - attack enemy function", () => {
    expect(player.attack(1, 3, enemy)).toBe('Hit ship at column 1, row 3');
})