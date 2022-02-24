import { Equal, Expect } from "@type-challenges/utils"

type MyParameters<T> = T extends (...args: infer P) => any ? P: never


type cases = [
    Expect<Equal<MyParameters<() => string>, []>>,
    Expect<Equal<MyParameters<(s: string) => string>, [string]>>,
    Expect<Equal<MyParameters<(s: string, n: number) => void>, [string, number]>>,
]