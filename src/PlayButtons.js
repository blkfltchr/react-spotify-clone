import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import SkipNextIcon from '@material-ui/icons/SkipNext'

const styles = {
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}

const PlayButtons = props => {
  const {handlePlayToggle, classes, isPlaying} = props

  const playPause = !isPlaying ? <PlayArrowIcon className={classes.playIcon} /> : <PauseIcon className={classes.playIcon} />
  return (
    <div className={classes.controls}>
      <IconButton aria-label="Previous" >
        <SkipPreviousIcon />
      </IconButton>
      <IconButton aria-label="Play/pause" onClick={handlePlayToggle} >
        {playPause}
      </IconButton>
      <IconButton aria-label="Next" >
        <SkipNextIcon />
      </IconButton>
    </div>
  )
}

PlayButtons.propTypes = {
  handlePlayToggle: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
}

export default withStyles(styles)(PlayButtons)
