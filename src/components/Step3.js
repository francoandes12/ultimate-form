import React from 'react'
import MainContainer from './MainContainer';
import Typography from '@material-ui/core/Typography'
import { Form } from './Form';
import { useHistory } from 'react-router-dom';
import { useData } from './DataContext';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from './PrimaryButton';
import FileInput from './FileInput';
const Step3 = () => {
  const history = useHistory()
  const { setValues, data } = useData()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files
    }
  })
  const onSubmit = data => {
    history.push('/result')
    setValues(data)
  }
  return (
    <MainContainer>
      <Typography component='h2' variant="h5">Step 3</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name='files' control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}

export default Step3
