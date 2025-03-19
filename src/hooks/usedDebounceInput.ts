import { useEffect, useState } from "react"



export const usedDebounceInput = (query: string) => {
    const [input, setInput] = useState(query)


    useEffect(() => {
        let timeout =  setTimeout(() => {
            setInput(query)
        } , 2000)

        return () => {
            clearTimeout(timeout)
        }
    }, [query])


    return input


}

