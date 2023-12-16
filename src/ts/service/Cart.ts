import Buyable from '../domain/Buyable';

export default class Cart {

  private _totalAmount = 0;
  private _items: { id: number, data: Buyable, count: number }[] = [];

  add(item: Buyable): void {
    const id: number = item.id;
    if (this._items.length === 0) {
      this._items.push({'id': id, 'data': item, 'count': 1});
      this.sum();
      return;
    }

    for (let i of this._items) {
      if (i.id === id && item.type === 'tech') {
        i.count++;
        this.sum();
        return;
      } else if (i.id === id && item.type !== 'tech') {
        return;
      }
    }

    this._items.push({'id': id, 'data': item, 'count': 1});
    this.sum();
  }

  get items(): { id: number, data: Buyable, count: number }[] {
    return [...this._items];
  }

  sum(): void {
    this._totalAmount = [...this.items].reduce((sum: number, item: { id: number, data: Buyable, count: number }) =>
      sum + item.data.price, 0)
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
