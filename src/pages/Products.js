import React from 'react'
import { DefaultTable } from '../components/DefaultTable '
import { Sidebar } from '../components/Sidebar'

function Products() {
    return (
      
        <div className='flex'>
            <Sidebar/>
            <DefaultTable />
        </div>
      
  )
}

export default Products