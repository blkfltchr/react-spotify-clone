import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import PlayButtons from './PlayButtons'

const styles = theme => ({
  root: {
    height: '115px',
    backgroundColor: '#282828',
    borderTop: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    bottom: '0',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height: '220px',
    },
  },
  listItem: {
    width: '250px',
    [theme.breakpoints.down('xs')]: {
      width: 'auto'
    },
  },
  avatar: {
    borderRadius: '0',
  },
  primary: {
    color: 'white',
  },
  secondary: {
    color: 'lightGray',
    fontSize: '12px',
  },
  volumeStyle: {
    width: '250px',
    [theme.breakpoints.down('xs')]: {
      width: 'auto'
    },
    display: 'flex',
  },
})

const CurrentSong = props => {
  const { 
    song: { trackName, artistName, artworkUrl }, 
    classes: { root, listItem, avatar, primary, secondary, volumeStyle }, 
    handlePlayToggle, 
    isPlaying, 
    volume, 
    setVolume, 
    played, 
    onSeekMouseDown, 
    onSeekChange, 
    onSeekMouseUp, 
    handleNextSong, 
    handlePreviousSong,
    toggleLoop,
    loop
  } = props
  return ( 
    <div className={root}>
      <ListItem className={listItem}>
        <ListItemAvatar>
          <Avatar 
            src={artworkUrl}
            title={`${trackName} by ${artistName} cover`}
            className={avatar} /> 
        </ListItemAvatar>
        <ListItemText
          primary={<Typography className={primary}>{trackName}</Typography>}
          secondary={<Typography className={secondary}>{artistName}</Typography>}
        />
      </ListItem>
      <PlayButtons 
        handlePlayToggle={handlePlayToggle} 
        isPlaying={isPlaying} 
        played={played}
        onSeekMouseDown={onSeekMouseDown}
        onSeekChange={onSeekChange}
        onSeekMouseUp={onSeekMouseUp}  
        handleNextSong={handleNextSong}
        handlePreviousSong={handlePreviousSong}
        toggleLoop={toggleLoop}
        loop={loop}
      />
      <div className={volumeStyle}>
        <IconButton>
          <VolumeUpIcon  aria-label="Repeat"
            className={primary}/>
        </IconButton>
        <input type='range'
          min={0}
          max={1}
          step='any'
          value={volume}
          onChange={setVolume} />
      </div>
    </div>

  )
}
 
CurrentSong.propTypes = {
  song: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handlePlayToggle: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  played: PropTypes.number.isRequired,
  onSeekMouseDown: PropTypes.func.isRequired,
  onSeekChange: PropTypes.func.isRequired,
  onSeekMouseUp: PropTypes.func.isRequired,
  handleNextSong: PropTypes.func.isRequired,
  handlePreviousSong: PropTypes.func.isRequired,
  toggleLoop: PropTypes.func.isRequired,
  loop: PropTypes.bool.isRequired,
}

export default withStyles(styles)(CurrentSong)