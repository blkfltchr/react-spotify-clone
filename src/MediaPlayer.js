import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import ReactPlayer from 'react-player'
import TrackList from './TrackList'
import CurrentSong from './CurrentSong'
import PlaylistInfo from './PlaylistInfo'

const styles = {
  root: {
    backgroundImage: 'linear-gradient(to right bottom, rgb(64, 72, 69), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)',
  },
  playlistContainer: {
    padding: '0 2rem',
    color: 'white',
    height: '100vh',
  },
  divider: {
    backgroundColor: 'lightGray',
  }
}

class MediaPlayer extends React.Component {
    state = {
      isPlaying: false,
      song: {
        trackName: 'The Pretender',
        artistName: 'Foo Fighters',
        artworkUrl: 'https://images.sk-static.com/images/media/profile_images/artists/29315/huge_avatar',
        mediaUrl: 'https://p.scdn.co/mp3-preview/6aba2f4e671ffe07fd60807ca5fef82d48146d4c?cid=1cef747d7bdf4c52ac981490515bda71',
        durationMilliseconds: 30000 
      },
      volume: 0.8,
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

    setVolume = e => {
      this.setState({ volume: parseFloat(e.target.value) })
    }

    render() {
      const { isPlaying, song, song: { mediaUrl }, volume } = this.state
      const { tracks, classes } = this.props
      return (
        <div className={classes.root}>
          <div className={classes.playlistContainer}>
            <PlaylistInfo handlePlayToggle={this.handlePlayToggle} playlistLength={tracks.length} isPlaying={isPlaying} />
            <Divider className={classes.divider} />
            <TrackList tracks={tracks} handleSongSelect={this.handleSongSelect} handlePlayToggle={this.handlePlayToggle} />
          </div>
          <CurrentSong song={song} handlePlayToggle={this.handlePlayToggle} isPlaying={isPlaying} volume={volume} setVolume={this.setVolume} />
          <ReactPlayer
            ref="reactPlayer"
            playing={isPlaying}
            height="0px"
            width="0px"
            config={{ file: { forceAudio: true } }}
            volume={volume}
            url={mediaUrl} /> 
        </div>
      )
    }
}

MediaPlayer.propTypes = {
  tracks: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaPlayer)