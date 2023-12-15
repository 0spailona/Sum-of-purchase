import Buyable from '../domain/Buyable';

export default class Cart {

  private _totalAmount = 0
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
    this.sum();
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): void {
    this._totalAmount = [...this.items].reduce((sum, item) =>
      sum + item.price, 0)
  }

  get totalAmount(): number {
    return this._totalAmount;
  }

  sumWithDiscount(discount: number): number {
    return this._totalAmount - (this._totalAmount * discount / 100)
  }

  deleteItem(id: number): void {
    [...this._items] = [...this._items].filter(item => item.id !== id)
  }
}
