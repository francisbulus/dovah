import React from "react"
import useSpotify from "../hooks/use-spotify-recent"

const IndexPage = () => {
  const recentTracks = useSpotify()
  console.log(recentTracks)
  return <p>dsnce</p>
}

export default IndexPage