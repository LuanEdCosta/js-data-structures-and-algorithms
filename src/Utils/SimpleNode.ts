export default class SimpleNode<T = any> {
  data: T
  next: SimpleNode<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
  }
}
