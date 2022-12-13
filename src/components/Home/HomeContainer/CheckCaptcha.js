import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Button from 'react-bootstrap/Button';

const CheckCaptcha = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div className='mt-4'>
            <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
            />
            <Button className='my-2' variant="primary" type="submit">
                Submit Request
            </Button>
        </div>
    );
};

export default CheckCaptcha;