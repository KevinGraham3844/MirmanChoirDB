import { useState } from 'react'
import { TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        console.log('logging in user')
        dispatch(loginUser(username, password))
        console.log(user)
        setUsername('')
        setPassword('')
        navigate('/')
    }

    const cancel = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <div>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField
                    label="username"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
                <TextField
                    label="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Button
                 onClick={login}
                >Login</Button>
                <Button 
                 onClick={cancel}
                >Cancel</Button>
            </form>
        </div>
    )
}

export default Login