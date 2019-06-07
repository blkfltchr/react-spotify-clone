import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    maxWidth: '250px'
  },
  media: {
    height: '90px',
    width: '160px',
  },
}

const CurrentSong = props => {
  const { song: { trackName, artistName, artworkUrl }, classes: { root, media } } = props
  return ( 
    <Card className={root}>
      <CardMedia image={artworkUrl} title={`${trackName} by ${artistName} cover`} className={media} /> 
      <CardContent>
        <Typography>{trackName}</Typography>
        <Typography>{artistName}</Typography>
      </CardContent>
    </Card>
  )
}
 
CurrentSong.propTypes = {
  song: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CurrentSong)