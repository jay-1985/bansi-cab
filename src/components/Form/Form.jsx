import React, {useState} from 'react';
import { useForm } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";


export default function Form() {
  const [state, originalHandleSubmit] = useForm(import.meta.env.VITE_EMAIL_SERVICE);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    const newErrors = {};
    if (!name.match(/^[A-Za-z\s]+$/)) newErrors.name = "Enter a valid name.";
    if (!phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit number.";
    if (!captchaToken) newErrors.captcha = "Please verify reCAPTCHA.";
    

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Inject captcha token into the form
    let existingInput = form.querySelector('input[name="g-recaptcha-response"]');
    if (!existingInput) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "g-recaptcha-response";
      form.appendChild(input);
      existingInput = input;
    }
    existingInput.value = captchaToken;

    originalHandleSubmit(e).then(() => {
      if (!state.submitting) {
        setSuccess(true);
      }
    });
  };
  return (
    <div>
      <div className="sm:grid sm:place-items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-5xl mx-auto "
              noValidate
            >
              <div className="w-full space-y-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    pattern="^[A-Za-z\s]+$"
                    className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Contact Number"
                    pattern="^\d{10}$"
                    className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center space-y-4 w-full">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded-md"
                >
                  {state.submitting ? "Sending..." : "Submit"}
                </button>
              </div>

              {success && (
                <p className="text-green-400 text-center font-semibold mt-4">
                  Thanks! We'll be in touch soon.
                </p>
              )}
            </form>
          </div>
    </div>
  )
}