/*
  10 - 元组转合集
  -------
  by Anthony Fu (@antfu) #中等 #infer #tuple #union

  ### 题目

  实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。

  例如

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  > 在 Github 上查看：https://tsch.js.org/10/zh-CN
*/

/* _____________ 你的代码 _____________ */

// type TupleToUnion<T extends ReadonlyArray<any>> = T[number]
type TupleToUnion<T> = T extends Array<infer Items> ? Items : never

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

const v1 = [1, 2, '3'] as const

// never
type t1 = TupleToUnion<typeof v1>

type TupleToUnion2<T extends readonly any[]> = T[number]

// 1 | 2 | "3"
type t2 = TupleToUnion2<typeof v1>

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/10/answer/zh-CN
  > 查看解答：https://tsch.js.org/10/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
