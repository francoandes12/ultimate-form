import React from 'react'
import MainContainer from './MainContainer';
import Typography from '@material-ui/core/Typography'
import { Form } from './Form';
import { Input } from './Input';
import { useHistory } from 'react-router-dom';
import { useData } from './DataContext';
import { useForm } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { PrimaryButton } from './PrimaryButton';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have a correct format')
    .required('Email is a required field')
})
const Step2 = () => {
  const history = useHistory()
  const { setValues, data } = useData()
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })
  const hasPhone = watch('hasPhone')
  const onSubmit = data => {
    history.push('/step3')
    setValues(data)
  }
  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if (!phoneNumber) {
      return value
    }
    return phoneNumber.formatInternational()
  }
  return <MainContainer>
    <Typography variant="h5" color="initial">Step 2</Typography>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input helperText={errors?.email?.message} error={!!errors.email} ref={register} type='email' name='email' label='email' required />
      <FormControlLabel control={<Checkbox defaultChecked={data.hasPhone} inputRef={register} name='hasPhone' color='primary' defaultValue={data.hasPhone} />} label='Do you have a phone?' />
      {hasPhone && <Input
        ref={register}
        name='phoneNumber'
        type='tel'
        label='Phone Number'
        onChange={event => { event.target.value = normalizePhoneNumber(event.target.value) }}
      />}
      <PrimaryButton>Next</PrimaryButton>
    </Form>
  </MainContainer>
}

export default Step2
