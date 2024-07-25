import React from 'react'
import { ESPKey } from '../../../../../types/types'


interface ApiKeys {
    keys: ESPKey[]
}

export default function ApiKeys({ keys } : ApiKeys) {
  return (
    <div>
        <div className=' flex'>
            api keys
        </div>
        <div>

        </div>
    </div>
  )
}
