import Cart from '../service/Cart';
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add new movie to cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1');
  cart.add(movie);
  expect(cart.items).toEqual([{
    country: "F", id: 1, name: "1", price: 2, release: 1, slogan: "1", style: ["e", "r", "d",], time: "123 min",
  },])
})
