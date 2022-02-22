import { Equal , Expect} from "@type-challenges/utils"

type MyFilteredKeys<T, V> = {
    [K in keyof T]: K extends V? never: K 
}[keyof T]

type MyExclude<T, V> = { 
    [K in MyFilteredKeys<T, V>]:T[K]
}

interface Person {
    name: string
    age: number
}
type Age = MyExclude<Person, 'name'>
type cases = [
    Expect<Equal<Age, { age: number}>>,
]