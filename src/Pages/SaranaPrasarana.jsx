import React, { useContext, useEffect } from 'react'
import Layout from '../Components/Layout'
import { GlobalState } from '../Context/Context'

const SaranaPrasarana = () => {
  const {dispatch} = useContext(GlobalState)
  
  useEffect(() => {
    dispatch({type: "UPDATE_PAGE", payload: "Sarana prasarana"})
  }, [])
  return (
    <Layout>
      <div>SaranaPrasarana</div>
    </Layout>
  )
}

export default SaranaPrasarana