import { useRouter } from 'next/router'
import React from 'react'

const TempOne = () => {
  const {query:{id}} = useRouter();
  return (
    <div>TempOne
      <h1>{id} 라우터 </h1>
    </div>
  )
}

export default TempOne