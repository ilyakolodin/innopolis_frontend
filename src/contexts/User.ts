import * as React from 'react'
import { createContext } from 'react'

const User = {
    role: 'user', 
    name: ''
}

export const userContext = createContext(User)