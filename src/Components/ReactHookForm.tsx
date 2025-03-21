/** @format */

import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' }) // 🔹 For empty input
    .min(2, { message: 'Name must be at least 2 characters' }), // 🔹 If user enters something but it's too short

  age: z
    .number({ invalid_type_error: 'Age is required' }) // 🔹 Ensures empty field shows "Age is required"
    .min(19, { message: 'Age should be 18+' }), // 🔹 If user enters age but it's too low

  email: z
    .string()
    .min(1, { message: 'Email is required' }) // 🔹 Empty email
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: 'Enter a valid email' }), // 🔹 Invalid email format

  password: z
    .string()
    .min(1, { message: 'Password is required' }) // 🔹 Empty password
    .min(8, { message: 'Password must be at least 8 characters long' }), // 🔹 Too short password
});

type FORMDATA = z.infer<typeof schema>;

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FORMDATA>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name:
        </label>
        <input {...register('name')} id='name' type='text' className='form-control' />
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age:
        </label>
        <input {...register('age', { valueAsNumber: true })} id='age' type='number' className='form-control' />
        {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email:
        </label>
        <input {...register('email')} id='email' type='email' className='form-control' />
        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password:
        </label>
        <input {...register('password')} id='password' type='password' className='form-control' />
        {errors.password && <p className='text-danger'>{errors.password.message}</p>}
      </div>

      <button disabled={!isValid} className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
