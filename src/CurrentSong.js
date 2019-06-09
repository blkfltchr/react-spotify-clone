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

const styles = {
  root: {
    height: '115px',
    backgroundColor: '#282828',
    borderTop: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
  listItem: {
    width: '250px',
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
    display: 'flex',
  },
}

const CurrentSong = props => {
  const { song: { trackName, artistName, artworkUrl }, classes: { root, listItem, avatar, primary, secondary, volumeStyle }, handlePlayToggle, isPlaying, volume, setVolume } = props
  return ( 
    <div className={root}>
      <ListItem className={listItem}>
        <ListItemAvatar>
          <Avatar src={artworkUrl} title={`${trackName} by ${artistName} cover`} className={avatar} /> 
        </ListItemAvatar>
        <ListItemText
          primary={<Typography className={primary}>{trackName}</Typography>}
          secondary={<Typography className={secondary}>{artistName}</Typography>}
        />
      </ListItem>
      <PlayButtons handlePlayToggle={handlePlayToggle} isPlaying={isPlaying} />
      <div className={volumeStyle}>
        <IconButton>
          <VolumeUpIcon  aria-label="Repeat" className={primary}/>
        </IconButton>
        <input type='range' min={0} max={1} step='any' value={volume} onChange={setVolume} />
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
}

export default withStyles(styles)(CurrentSong)