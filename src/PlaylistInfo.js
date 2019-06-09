import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '2rem 0',
  },
  avatar: {
    width: '157px',
    height: '157px',
    borderRadius: '0',
    paddingRight: '20px',
  },
  playlistText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  playlistTitle: {
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: 'bold',
  },
  playlistOwner: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  by: {
    color: 'lightGray',
  },
  playlistLength: {
    color: 'lightGray',
    fontSize: '12px',
    lineHeight: '16px',
  },
  button: {
    backgroundColor: '#1db954',
    padding: '11px 44px',
    borderRadius: '16px',
    color: 'white',
    maxWidth: '130px',
  },
  more: {
    color: 'white',
  },
}

const PlaylistInfo = props => {
  const { classes, handlePlayToggle, playlistLength, isPlaying } = props
  const playPause = isPlaying ? 'Pause' : 'Play'
  return ( 
    <div className={classes.root}>
      <Avatar alt="My sodatone playlist" src="https://cps-static.rovicorp.com/3/JPG_500/MI0003/626/MI0003626958.jpg?partner=allrovi.com" className={classes.avatar} />
      <div className={classes.playlistText}>
        <div>
          <Typography className={classes.playlistTitle}>My sodatone playlist</Typography>
          <Typography className={classes.playlistOwner}><span className={classes.by}>By </span>Blake Fletcher</Typography>
          <Typography className={classes.playlistLength}>{`${playlistLength} SONGS`}</Typography>
        </div>
        <div>
          <Button variant="contained" className={classes.button} onClick={handlePlayToggle}>{playPause}</Button>
          <IconButton aria-label="More" className={classes.more} >
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

PlaylistInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  handlePlayToggle: PropTypes.func.isRequired,
  playlistLength: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
}
 
export default withStyles(styles)(PlaylistInfo)