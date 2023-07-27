import React, { useContext, useEffect } from 'react'
import Layout from '../Components/Layout'
import { GlobalState } from '../Context/Context'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const SaranaPrasaranaImage = () => {
  const {dispatch} = useContext(GlobalState)
  const location = useLocation()
  const queryParams = queryString.parse(location.search)
  console.log(queryParams);
  
  useEffect(() => {
    dispatch({type: "UPDATE_PAGE", payload: "Sarana prasarana"})
  }, [])
  return (
    <Layout>
      <div>SaranaPrasaranaImage</div>
    </Layout>
  )
}

export default SaranaPrasaranaImage