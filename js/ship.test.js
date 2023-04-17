import Ship from "./ship"

const ship = Ship(3);

test('ship creation (length)', () => {
    expect(ship.getLength()).toBe(3)
})

test('ship creation (hits)', () => {
    expect(ship.getHits()).toBe(0)
})

test('ship hit function', () => {
    ship.hit()
    expect(ship.getHits()).toBe(1)
})

test('ship isSunk function', () => {
    expect(ship.isSunk()).toBe(false);
})
