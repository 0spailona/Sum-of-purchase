import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from "./domain/Movie";
import Smartphone from "./domain/smartphone";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,'book'));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 'music'));
cart.add(new Movie(347,'Lola', 1999,100, 'Canada', ['horror','drama'],'137 min / 2:17', 'The first for you','movie'))

console.log(cart.items);
