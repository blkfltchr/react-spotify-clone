import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'

const MoreInfo = props => {
  const { open, handleOpenClose } = props
  return ( 
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <h2>This project was built using:</h2>
          <ul>
            <li>React for the front end</li>
            <li>Material UI for styling</li>
            <li>react-player for the media player features</li>
            <li>Spotify for design inspiration</li>
          </ul>
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          <h2>Features include:</h2>
          <ul>
            <li>Play/Pause/Next/Previous/Repeat buttons</li>
            <li>Current track info</li>
            <li>Volume control</li>
            <li>Song progress and seeking control</li>
            <li>Background color change onHover and when song is playing</li>
          </ul>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary"
          onClick={handleOpenClose}>
            Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

MoreInfo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpenClose: PropTypes.func.isRequired,
}
 
export default MoreInfo