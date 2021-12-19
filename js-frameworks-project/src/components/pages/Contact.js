import React from 'react';
import { useForm } from "react-hook-form";
import PokemonGroup from '../images/PokemonGroup'
import Heading from '../Heading';
import Backhome from '../Backhome';

function Contact() {
    document.title = "Contact Pokemon cards";
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
        const form = document.querySelector("form");
        form.innerHTML = `<p class="contact-form_sumitted">Yay, thanks! Your request is submitted. You will hear from us shortly.</p>`;
    }

    return (
        <div className="contact-main">
                <Heading content="Contact us" secondHeadline="Please write your enquiry below.."/>

                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Your name" {...register("name", { required: true })} />
                    {errors.name && <span className="form-error">Your name is missing</span>}

                    <input type="tel" placeholder="Phone number" {...register("phoneNumber", {required: true, pattern: /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{2}$/ })} />
                    {errors.phoneNumber && <span className="form-error">Phone number is missing</span>}

                    <select {...register("type", { required: true })}>
                        <option value="enquiry">Enquiry</option>
                        <option value="complaint">Complaint</option>
                        <option value="compliment">Compliment</option>
                        <option value="general">General Message</option>
                    </select>

                    <textarea placeholder="Question or comment here" {...register("comment", { required: true })} />
                    {errors.comment && <span className="form-error">Please write a comment</span>}

                    <button className="contact-form_submit">Send</button>
                </form>

                <PokemonGroup />
                <Backhome />
            </div>

    );
}

export default Contact
