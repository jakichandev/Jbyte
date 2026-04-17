import Button from "../ui/Button";
import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import { useEffect, useState } from "react";
import * as emailjs from "@emailjs/browser";
import { FormField } from "./FormField";
import type { FormValues, MailErrors } from "../../types/Form/Form";
import { initialValues } from "../../data/formValues";
import { sendMail } from "../../services/emailHandler";
import { FormLoader } from "../ui/Loaders";
import { SendOutlined } from "@ant-design/icons";

export const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<MailErrors>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen py-24 md:px-sections flex items-center justify-center">
        <GlassContainer
          variant="highlight"
          className="w-full max-w-3xl flex flex-col items-center justify-center px-5 py-20 md:py-24"
        >
          <FormLoader />
        </GlassContainer>
      </section>
    );
  }

  if (success) {
    return (
      <section className="min-h-screen py-24 md:px-sections flex items-center justify-center">
        <GlassContainer
          variant="highlight"
          className="w-full max-w-3xl flex flex-col items-center justify-center px-5 py-20 md:py-24"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Icona di successo */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-theme-aqua-500/20 rounded-full animate-ping"></div>
              <div className="relative flex items-center justify-center w-20 h-20 bg-theme-aqua-500 rounded-full">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Testo di successo */}
            <div className="flex flex-col items-center gap-2">
              <Heading level="primary" color="sunsetEnd"></Heading>
              <p className="text-white/70 font-p-1 text-lg text-center max-w-md">
                Your message has been sent successfully! I will get back to you
                as soon as possible.
              </p>
            </div>

            {/* Button to send another message */}
            <Button
              onClick={() => setSuccess(false)}
              level={2}
              color="sunsetEnd"
            >
              Send another message
            </Button>
          </div>
        </GlassContainer>
      </section>
    );
  }

  return (
    <>
      <GlassContainer
        variant="highlight"
        className="w-full max-w-3xl flex flex-col items-center px-5 py-8 md:py-12"
      >
        <form
          onSubmit={(e) =>
            sendMail(
              e,
              setErrors,
              setLoading,
              formValues,
              setFormValues,
              setSuccess
            )
          }
          className="text-white relative z-20 font-p-1 space-y-3 w-full"
        >
          <FormField
            name="name"
            label="Nome"
            placeholder="enter your name"
            setFormValues={setFormValues}
            formValues={formValues}
          />
          <FormField
            name="surname"
            label="Surname"
            placeholder="enter your surname"
            setFormValues={setFormValues}
            formValues={formValues}
          />
          <FormField
            name="email"
            label="Email"
            placeholder="enter your valid email"
            inputType="email"
            setFormValues={setFormValues}
            formValues={formValues}
          />
          <FormField
            name="message"
            label="Tell me about your idea!"
            placeholder="Minimum 30 characters"
            inputType="textarea"
            setFormValues={setFormValues}
            formValues={formValues}
          />
          <Button
            type="submit"
            level={2}
            color="sunsetEnd"
            className="mx-auto mt-6 w-full"
          >
            Send Message
            <SendOutlined className="ml-2" />
          </Button>
        </form>
        {errors && (
          <div className="font-p-1 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-4 space-y-1 mt-4 w-full">
            {errors?.name && <p>• {errors.name[0]}</p>}
            {errors?.surname && <p>• {errors.surname[0]}</p>}
            {errors?.email && <p>• {errors.email[0]}</p>}
            {errors?.message && <p>• {errors.message[0]}</p>}
          </div>
        )}
      </GlassContainer>
    </>
  );
};
