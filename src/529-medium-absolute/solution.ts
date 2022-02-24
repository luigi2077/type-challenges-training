import { Equal, Expect } from "@type-challenges/utils"

type MyAbsolute<T extends number| string| bigint> = `${T}` extends `-${infer N}`? N: `${T}`


type cases = [
    Expect<Equal<MyAbsolute<-199>, '199'>>,
    Expect<Equal<MyAbsolute<19>, '19'>>,
    Expect<Equal<MyAbsolute<19>, '19'>>,
]