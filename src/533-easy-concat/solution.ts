import { Equal, Expect } from "@type-challenges/utils"

type MyConcat<K,V> = K extends (any)[] ? ( V extends (any)[] ? [...K, ...V]: [K]) : V extends (any)[]? [V]: never
type Result = MyConcat<[1], [2]>

type cases = [
    Expect<Equal<Result, [1, 2]>>,
    Expect<Equal<MyConcat<[1], ['2']>, [1, '2']>>,

]


