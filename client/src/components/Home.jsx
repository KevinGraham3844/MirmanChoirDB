import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeRep } from '../reducers/repertoireReducer'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import RepertoireGroup from '../components/RepertoireGroup'
import SortingButtons from '../components/SortingButtons'
import { logoutUser, retainUser } from '../reducers/userReducer'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [page, setPage] = useState('default')

  const user = useSelector(state => state.user)
  const errorMsg = useSelector(state => state.errorNotification)
  
  useEffect(() => {
    console.log('useEffect Called')
    dispatch(initializeRep())
  }, [dispatch]);

  useEffect(() => {
    console.log('dispatch')
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        dispatch(retainUser(user))
    }
  }, [dispatch])

  const handleChange = (e) => {
    e.preventDefault()
    setPage(e.target.value)
  }

  return (
    <>
    {errorMsg && (
        <div style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: '10px', color: 'white' }}> 
            {errorMsg}
        </div>
    )}
    <Header />
    <SortingButtons handleChange={handleChange} /> 
    <RepertoireGroup page={page} />
    {user && (
        <div>
            <Button
                onClick={() => navigate('/create')}
            >
                New Entry
            </Button>
            <Button
                onClick={() => dispatch(logoutUser())}
            >
                Logout
            </Button>
        </div>

    )}
    {!user && (
        <Button
            onClick={() => navigate('/login')}
        >
            Login
        </Button>
    )}

    </>
  )
}

export default Home