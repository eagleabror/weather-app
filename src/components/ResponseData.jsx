import React, { useCallback } from 'react'

const ResponseData = () => {
    const { getResponse } = useCallback(state => state.data)
  return (
    <div>ResponseData</div>
  )
}

export default ResponseData