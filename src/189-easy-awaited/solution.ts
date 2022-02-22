import { Equal, Expect } from "@type-challenges/utils"

type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R>: T
type TEST_1 = Promise<Promise<string>>
type TEST_2 = Promise<string>


type cases = [
Expect<Equal< MyAwaited<TEST_1>, string>>,
Expect<Equal< MyAwaited<TEST_2>, string>>,
]