import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthenticationContext'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(function(){
        if(!isAuthenticated) navigate("/")

    },[isAuthenticated])
  return (
    children
  )
}

export default ProtectedRoute