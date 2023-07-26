import React, { useContext, useEffect } from 'react'
import Layout from '../Components/Layout'
import { GlobalState } from '../Context/Context'

const DocJurusan = () => {
  const {dispatch} = useContext(GlobalState)
  
  useEffect(() => {
    dispatch({type: "UPDATE_PAGE", payload: "Dokumentasi Jurusan"})
  }, [])
  return (
    <Layout>
      <h1>Dokumentasi jurusn</h1>
    </Layout>
  )
}

export default DocJurusan