import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import MainContainer from './MainContainer'
import { Form } from './Form'
import { Input } from './Input'
import { PrimaryButton } from './PrimaryButton'
import Typography from '@material-ui/core/Typography'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useData } from '../components/DataContext'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field')
})
const Step1 = () => {
  const { setValues, data } = useData()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })
  const history = useHistory()
  const onSubmit = data => {
    history.push('/step2')
    setValues(data)
  }
  return (
    <MainContainer>
      <Typography component='h2' variant='h5' color='initial'>
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={!!errors.firstName}
          ref={register}
          name='firstName'
          type='text'
          label='First name'
          helperText={errors?.firstName?.message}
        />
        <Input
          error={!!errors.lastName}
          ref={register}
          name='lastName'
          type='text'
          label='Last name'
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}

export default Step1
