import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import RepeatIcon from '@material-ui/icons/Repeat'
import ShuffleIcon from '@material-ui/icons/Shuffle'

const styles = {
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  playIcon: {
    height: 55,
    width: 55,
    color: 'white'
  },
  skipButtons: {
    color: 'white',
  },
}

const PlayButtons = props => {
  const {handlePlayToggle, classes, isPlaying} = props

  const playPause = !isPlaying ? <PlayArrowIcon className={classes.playIcon} /> : <PauseIcon className={classes.playIcon} />
  return (
    <div className={classes.controls}>
      <IconButton>
        <ShuffleIcon  aria-label="Shuffle" className={classes.skipButtons}/>
      </IconButton>
      <IconButton aria-label="Previous" className={classes.skipButtons}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton aria-label="Play/pause" onClick={handlePlayToggle} >
        {playPause}
      </IconButton>
      <IconButton aria-label="Next" className={classes.skipButtons}>
        <SkipNextIcon />
      </IconButton>
      <IconButton>
        <RepeatIcon  aria-label="Repeat" className={classes.skipButtons}/>
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
