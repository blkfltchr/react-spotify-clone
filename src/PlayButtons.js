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
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
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
  const {
    handlePlayToggle,
    classes,
    isPlaying,
    played,
    onSeekMouseDown,
    onSeekChange,
    onSeekMouseUp,
    handleNextSong,
    handlePreviousSong,
    toggleLoop,
    loop,
  } = props
  const playPause = !isPlaying ? <PlayArrowIcon className={classes.playIcon} /> : <PauseIcon className={classes.playIcon} />
  const loopColor = loop ? '#1db954' : 'white'
  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <IconButton>
          <ShuffleIcon  
            aria-label="Shuffle"
            className={classes.skipButtons}/>
        </IconButton>
        <IconButton 
          aria-label="Previous"
          className={classes.skipButtons}
          onClick={handlePreviousSong}
        >
          <SkipPreviousIcon />
        </IconButton>
        <IconButton 
          aria-label="Play/pause"
          onClick={handlePlayToggle} >
          {playPause}
        </IconButton>
        <IconButton 
          aria-label="Next"
          className={classes.skipButtons}
          onClick={handleNextSong}
        >
          <SkipNextIcon />
        </IconButton>
        <IconButton onClick={toggleLoop}>
          <RepeatIcon  
            style={{color: loopColor}}
            aria-label="Repeat"
          />
        </IconButton>
      </div>
      <input
        type='range'
        min={0}
        max={1}
        step='any'
        value={played}
        onMouseDown={onSeekMouseDown}
        onChange={onSeekChange}
        onMouseUp={onSeekMouseUp}
      />
    </div>
  )
}

PlayButtons.propTypes = {
  handlePlayToggle: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  played: PropTypes.number.isRequired,
  onSeekMouseDown: PropTypes.func.isRequired,
  onSeekChange: PropTypes.func.isRequired,
  onSeekMouseUp: PropTypes.func.isRequired,
  handleNextSong: PropTypes.func.isRequired,
  handlePreviousSong: PropTypes.func.isRequired,
  toggleLoop: PropTypes.func.isRequired,
  loop: PropTypes.bool.isRequired,
}

export default withStyles(styles)(PlayButtons)
