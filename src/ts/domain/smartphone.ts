import Buyable from './Buyable';

export default class Smartphone implements Buyable {
  constructor(
    readonly type:string,
    readonly id: number,
    readonly name: string,
    readonly country: string,
    readonly price: number,
    readonly model: string,
  ) { }
}
