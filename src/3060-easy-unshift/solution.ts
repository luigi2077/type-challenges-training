import { Equal, Expect } from "@type-challenges/utils"

type MyUnshift<U extends unknown[], V> = [V, ...U] 


type cases = [
    Expect<Equal<MyUnshift<[2,3], 1>,[1,2,3]>>,
    Expect<Equal<MyUnshift<[2,3], '1'>,['1',2,3]>>,
]