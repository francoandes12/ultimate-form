import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper } from '@material-ui/core'
import { CloudUpload, InsertDriveFile } from '@material-ui/icons'
import React from 'react'
import Dropzone from 'react-dropzone'
import { Controller } from 'react-hook-form'
const useStyles = makeStyles({
  root: {
    backgroundColor: '#eee',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#333',
    padding: '10px',
    marginTop: '20PX'
  },
  icon: {
    marginTop: '16px',
    color: '#888',
    fontSize: '42px'
  }
})
const FileInput = ({ control, name }) => {
  const classes = useStyles()
  return (
    <Controller control={control} name={name} defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper className={classes.root} variant='outlined' {...getRootProps()}>
                <CloudUpload className={classes.icon} />
                <input name={name} onBlur={onBlur} {...getInputProps()} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )
            }
          </Dropzone>
          <List>
            {value.map((file, index) =>
            (<ListItem key={index}>
              <ListItemIcon>
                <InsertDriveFile />
              </ListItemIcon>
              <ListItemText primary={file.name} secondary={file.size} />
            </ListItem>)
            )}
          </List>
        </>
      )}
    />
  )
}

export default FileInput
