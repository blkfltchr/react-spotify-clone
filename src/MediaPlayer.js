import React from "react"
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import PlayButtons from './PlayButtons'
import TrackList from './TrackList'
import CurrentSong from './CurrentSong'

class MediaPlayer extends React.Component {
    state = {
      isPlaying: false,
      song: {
        trackName: "The Pretender",
        artistName: "Foo Fighters",
        artworkUrl: "https://images.sk-static.com/images/media/profile_images/artists/29315/huge_avatar",
        mediaUrl: "https://p.scdn.co/mp3-preview/6aba2f4e671ffe07fd60807ca5fef82d48146d4c?cid=1cef747d7bdf4c52ac981490515bda71",
        durationMilliseconds: 30000 
      }
    }
    
    handlePlayToggle = () => {
      this.setState(prevState => ({
        isPlaying: !prevState.isPlaying
      }))
    }

    handleSongSelect = id => {
      const { tracks } = this.props
      const song = tracks.find(track => track.id === id)
      this.setState({
        song
      })
    }

    render() {
      const { isPlaying, song, song: { mediaUrl } } = this.state
      const { tracks } = this.props
      return (
        <div>
          <TrackList tracks={tracks} handleSongSelect={this.handleSongSelect} />
          <CurrentSong song={song} />
          <PlayButtons handlePlayToggle={this.handlePlayToggle} isPlaying={isPlaying} />
          <ReactPlayer
            ref="reactPlayer"
            playing={isPlaying}
            height="0px"
            width="0px"
            config={{ file: { forceAudio: true } }}
            // Currently populated with a sample URL.
            url={mediaUrl} /> 
        </div>
      )
    }
}

MediaPlayer.propTypes = {
  tracks: PropTypes.array.isRequired,
}

export default MediaPlayer