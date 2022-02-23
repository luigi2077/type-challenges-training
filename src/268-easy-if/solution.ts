import { Equal, Expect } from "@type-challenges/utils"

type MyIf<CONDITION extends Boolean, T, F> =  CONDITION extends true ? T: F

type A = MyIf<true, 'a', 'b'>

type B = MyIf<false, 'a', 'b'>

type cases = [
    Expect<Equal<A, 'a'>>,
    Expect<Equal<B, 'b'>>,
]