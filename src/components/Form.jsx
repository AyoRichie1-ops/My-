import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Form.css'
function Form() {
    const [state, handleSubmit] = useForm("xqkrgjjl");
    if (state.succeeded) {
        return <p className='message'>Thanks for joining! 👍</p>;
    }
    return (
        <form className='formbody' onSubmit={handleSubmit}>
            <label className='formlabel' htmlFor="name">
                Name
            </label>
            <input
                className='forminput d-block'
                id='name'
                type="text"
                name='name'
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <label className='formlabel' htmlFor="email">
                Email
            </label>
            <input
                className='forminput d-block'
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label className='formlabel' htmlFor="name">
                Subject
            </label>
            <input
                className='forminput d-block'
                id='name'
                type="text"
                name='subject'
            />
            <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
            />
            <label className='formlabel' htmlFor="message">
                Message
            </label>
            <textarea
                className='forminput d-block'
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button className='formbtn' type="submit" disabled={state.submitting}>
                SUBMIT
            </button>
        </form>
    );
}
export default Form