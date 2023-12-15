import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly release: number,
    readonly price: number,
    readonly country: string,
    readonly style: string[],
    readonly time: string,
    readonly slogan: string,
  ) {
  }
}
