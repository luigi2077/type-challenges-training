import { Equal, Expect } from "@type-challenges/utils"



type MyIncludes<A extends any[], S> =  S extends A[number] ? true : false

type cases = [
    Expect<Equal<MyIncludes<[1,3,4,5,2], 3>, true>>,
    Expect<Equal<MyIncludes<['this', 'var', 'const'], 'var'>, true>>,
    Expect<Equal<MyIncludes<['this', 'var', 'const'], 'val'>, false>>,
]
