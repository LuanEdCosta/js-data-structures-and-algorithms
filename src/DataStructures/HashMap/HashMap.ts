import { Hash } from '../../Utils/index.js'
import { LinkedList } from '../LinkedList/index.js'

export class HashMap<T = any> {
  private buckets: LinkedList<T>[]

  constructor(size: number) {
    this.buckets = Array(size).fill(new LinkedList<T>())
  }

  add(key: string, data: T) {}

  set(key: string, data: T) {}

  delete(key: string): T | undefined {
    return
  }

  get(key: string): T | undefined {
    return
  }

  has(key: string): boolean {
    return false
  }

  getKeys(): string[] {
    return []
  }

  getValues(): T[] {
    return []
  }
}
