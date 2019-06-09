import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    '&:hover': {
      background: 'rgb(64, 72, 69)',
    },
  },
  avatar: {
    borderRadius: '0',
  },
  secondary: {
    color: 'lightGray',
    fontSize: '12px',
  },
  duration: {
    color: 'lightGray',
  }
}

const TrackList = props => {
  const { tracks, classes, handleSongSelect, handlePlayToggle } = props
  return ( 
    <List>
      {
        tracks.map((track) => {
          return (
            <ListItem key={track.id} className={classes.root} onClick={() => handleSongSelect(track.id)} onDoubleClick={handlePlayToggle}>
              <ListItemAvatar>
                <Avatar alt={`${track.trackName} by ${track.artistName} cover`} src={track.artworkUrl} className={classes.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={track.trackName}
                secondary={<Typography className={classes.secondary}>{track.artistName}</Typography>}
              />
              <Typography className={classes.duration}><Moment format="m:s">{track.durationMilliseconds}</Moment></Typography>
            </ListItem>
          )
        })
      }
    </List>
  )
}

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  handleSongSelect: PropTypes.func.isRequired,
  handlePlayToggle: PropTypes.func.isRequired,
}
 
export default withStyles(styles)(TrackList)