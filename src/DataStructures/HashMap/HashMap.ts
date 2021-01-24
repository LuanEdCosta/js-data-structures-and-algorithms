import { Hash, SimpleNode } from '../../Utils/index.js'
import { LinkedList } from '../LinkedList/index.js'

export interface BucketData<T = any> {
  key: string
  data: T
}

export class HashMap<T = any> {
  private maxSize: number
  private buckets: LinkedList<BucketData<T>>[]
  private keys: { [key: string]: number }

  constructor(maxSize: number) {
    // The map is important to create a different instance for each bucket
    // If you put "new LinkedList()" inside the fill function all buckets will point to the same memory address
    this.buckets = Array(maxSize)
      .fill(null)
      .map(() => new LinkedList())

    this.maxSize = maxSize
    this.keys = {}
  }

  private getHash(key: string) {
    return Math.abs(Hash.hashCode(key) % this.maxSize)
  }

  set(key: string, data: T) {
    // The hash number should never be bigger than the maxSize
    const hash = this.getHash(key)
    this.keys[key] = hash

    const bucket = this.buckets[hash]
    const nodeData = bucket.find(({ key: nodeKey }) => nodeKey === key)

    if (nodeData) {
      // Update the data because nodeData points to the node data in memory
      nodeData.data = data
    } else {
      const newNode = new SimpleNode<BucketData>({ key, data })
      bucket.append(newNode)
    }
  }

  delete(key: string): BucketData<T> | null {
    const hash = this.getHash(key)
    const bucket = this.buckets[hash]
    const nodeData = bucket.find(({ key: nodeKey }) => nodeKey === key)

    if (nodeData) {
      delete this.keys[key]
      return bucket.delete(nodeData)
    }

    return null
  }

  get(key: string): BucketData<T> | null {
    const hash = this.getHash(key)
    const bucket = this.buckets[hash]
    const nodeData = bucket.find(({ key: nodeKey }) => nodeKey === key)
    return nodeData
  }

  has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key)
  }

  getKeys(): string[] {
    return Object.keys(this.keys)
  }

  getValues(): T[] {
    return this.buckets.reduce<T[]>((values, bucket) => {
      const bucketDataArray = bucket.toArray().map(({ data }) => data)
      return values.concat(bucketDataArray)
    }, [])
  }

  toObjectArray(): BucketData<T>[] {
    return this.buckets.reduce<BucketData<T>[]>((values, bucket) => {
      const bucketDataArray = bucket.toArray()
      return values.concat(bucketDataArray)
    }, [])
  }
}
