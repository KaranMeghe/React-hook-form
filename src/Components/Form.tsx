/** @format */

import { FormEvent, useRef } from 'react';

const Form: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: '', age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current && ageRef.current !== null) {
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };

  return (
    <form onClick={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name:
        </label>
        <input ref={nameRef} id='name' type='text' className='form-control' />
      </div>

      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input ref={ageRef} id='age' type='number' className='form-control' />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
