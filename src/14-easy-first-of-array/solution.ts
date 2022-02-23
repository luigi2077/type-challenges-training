import { Equal, Expect } from "@type-challenges/utils"

type MyFirst<T extends any[]> = T extends []? never: T[0]

type cases = [
    Expect<Equal<MyFirst<[1,2,3]>, 1>>,
]