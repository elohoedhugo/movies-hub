import React, {useEffect, useState} from 'react'
import {OPENAI_API_KEY} from "../config"
import "../App.css"
import OpenAI from 'openai'

const Recommendations = () => {
  const openai = new OpenAI({apiKey: OPENAI_API_KEY})
  const [preferences, setPreferences] = useState("")
  const [recommendations, setRecommendations] = useState("")

  const getRecommendations = async(preferences) => {
     try{
      const response = await openai.chats.completions.create({
        
          model: "gpt-4o",
          messages:  [{
            role: "user", content:`Recommend movies based on ${preferences} `
          }]
        })
      

      if(!response.ok){
        throw new Error("Failed to fetch recommendations")
      }

      const data = await response.json()
      setRecommendations(data.choices[0].message.content)
      console.log(data)
     }
     catch(error){
      console.error("Error fetching recommedations:", error)
     }
  }
  
  
  return (
    <div>
      <input type='text' value={preferences}
      onChange={(e)=>setPreferences(e.target.value)}/>
      <button onClick={getRecommendations}>Get recommedations</button>
      <div>
      {recommendations}
      </div>
      
      </div>
  )
}

export default Recommendations