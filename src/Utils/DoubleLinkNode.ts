export default class DoubleLinkNode<T = any> {
  data: T
  next: DoubleLinkNode<T> | null
  previous: DoubleLinkNode<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
    this.previous = null
  }
}
