import React from 'react';
import { useForm } from "react-hook-form";
// import Select from 'react-select'

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
        const form = document.querySelector("form");
        form.innerHTML = "<p>Form submitted. You will hear from us shortly.</p>";
    }

    // console.log(errors);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} />
                {errors.name && <span>Your name is missing</span>}

                <input type="tel" placeholder="phone number" {...register("phoneNumber", {required: true, pattern: /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{2}$/ })} />
                {errors.phoneNumber && <span>Phone number is missing</span>}

                <select {...register("type", { required: true })}>
                    <option value="enquiry">Enquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="compliment">Compliment</option>
                    <option value="general">General Message</option>
                </select>

                <textarea {...register("comment", { required: true })} />
                {errors.comment && <span>Please write a comment</span>}

                <button>Send</button>
            </form>
        </>
    );
}

export default Contact
