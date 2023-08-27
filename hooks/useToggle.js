import { useCallback, useState } from "react"

export default function useToggle(value) {
    const [boolValue, setBoolvalue] = useState(value)

    const toggle = useCallback(() => {
        setBoolvalue(prev => !prev)
    }, [])

    return { boolValue, toggle, setBoolvalue }
}
