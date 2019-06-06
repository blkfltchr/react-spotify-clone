import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
  avatar: {
    borderRadius: '0',
  },
}

const TrackList = props => {
  const { tracks, classes, handleSongSelect } = props
  return ( 
    <List>
      {
        tracks.map((track) => {
          return (
            <ListItem key={track.id} onClick={() => handleSongSelect(track.id)}>
              <ListItemAvatar>
                <Avatar alt={`${track.trackName} by ${track.artistName} cover`} src={track.artworkUrl} className={classes.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={track.trackName}
                secondary={track.artistName}
              />
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
}
 
export default withStyles(styles)(TrackList)