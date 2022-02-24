import { Equal, Expect } from "@type-challenges/utils"

type MyPush<T extends any[], U> = [...T, U]



type cases = [
    Expect<Equal<MyPush<[1,2], 3>, [1,2,3]>>,
]