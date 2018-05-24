export class Queue<T> {
  data: T[];
  constructor() {
    this.data  = []
  }

  public add (item: T) {
    this.data.unshift(item);
  }

  public remove() {
    this.data.pop();
  }

  get first(): T {
    return this.data[0];
  }

  get last(): T {
    return this.data[this.data.length - 1];
  }

  get size(): number {
    return this.data.length;
  }
}
