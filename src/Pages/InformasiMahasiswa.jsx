import React, { useContext, useEffect } from 'react'
import Layout from '../Components/Layout'
import { GlobalState } from '../Context/Context'

const InfoemasiMahasiswa = () => {
  const {dispatch} = useContext(GlobalState)
  
  useEffect(() => {
    dispatch({type: "UPDATE_PAGE", payload: "Informasi Mahasiswa"})
  }, [])
  return (
    <Layout>
      <div>InfoemasiMahasiswa</div>
    </Layout>
  )
}

export default InfoemasiMahasiswa