import { Equal, Expect } from "@type-challenges/utils"

type Length<T extends unknown[]> = T['length'] 


type cases = [
    Expect<Equal<Length<[1,2,3,4,5,6]>, 6>>,
]

