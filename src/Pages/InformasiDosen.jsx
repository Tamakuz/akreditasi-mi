import React, { useContext, useEffect } from 'react'
import Layout from '../Components/Layout'
import { GlobalState } from '../Context/Context'

const InformasiDosen = () => {
  const {dispatch} = useContext(GlobalState)
  
  useEffect(() => {
    dispatch({type: "UPDATE_PAGE", payload: { page: "Informasi", subPage: "Informasi Dosen" }})
  }, [])
  return (
    <Layout>
      <div>InformasiDosen</div>
    </Layout>
  )
}

export default InformasiDosen