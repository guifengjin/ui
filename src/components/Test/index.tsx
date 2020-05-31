import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

const Test: FC = () => {
  const [data, setData] = useState({hits: [{
    objectID: '',
    url: '',
    title: ''
  }]})
  const [query, setQuery] = useState('redux')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {  
      const result = await axios.get(`http://hn.algolia.com/api/v1/search?query=${search}`)
      console.log(result)
      setData(result.data)
    }
    fetchData()
  }, [search])

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>

      <ul>
      {
        data.hits.map( item => 
          item.url && item.title 
          ? <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
          : null
        )
      }
      </ul>
    </div>
  )
}

export default Test
