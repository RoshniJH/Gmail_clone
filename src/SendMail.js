import React from 'react'
import "./SendMail.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';
function SendMail() {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) =>{
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
           }
           );
           dispatch(closeSendMessage());
    };
    return (
            <div className="sendMail">
                <div className="sendMail__header">
                    <h3>Send Message</h3>
                    <CloseIcon onClick={()=>dispatch(closeSendMessage()) } className="sendMail__close"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        autocomplete="off"
                        className="input_to" 
                        type="email" 
                        placeholder="To" 
                        {...register("to", { required: true })}
                        />
                        {errors.to && <p className="sendMail__error">To is Required!</p>}
                    <input 
                        autocomplete="off"
                        className="input_subject" 
                        type="text" 
                        placeholder="Subject" 
                        {...register("subject", { required: true })}
                    />
                    {errors.subject && <p className="sendMail__error">Subject is Required!</p>}
                    <textarea 
                        autocomplete="off"
                        className="sendMail__message" 
                        type="text" 
                        placeholder="Message..." 
                        {...register("message", { required: true })}
                        />
                    {errors.message && <p className="sendMail__error">Message is Required!</p>}
                    <div className="sendMail__options">
                    <Button className="sendMail__send"
                    variant="contained"
                    color="primary"
                    type="submit"
                    >
                    Send
                    </Button>
                    </div>
                </form>
            </div>
    )
}

export default SendMail