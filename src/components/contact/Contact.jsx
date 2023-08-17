import React from "react";
import "./Contact.css";
import formImage from "../../assets/images/form_main_img.jpg";
import { Formik } from "formik";
import Map from "./Map";
import Channnels from "./Channnels";

const Contact = () => {
  return (
    <section className="contact section-p-top bg-black" id="contact">
      <div className="container">
        <div className="contact-content grid text-center">
          <div className="contact-left">
            <div className="section-t">
              <h3>Fale com a gente!</h3>
              <p className="text">
                Responderemos sua mensagem o mais rápido possível (até o fim do dia)
              </p>
            </div>
            <Formik
              initialValues={{ name: "", email: "", address: "" }}
              validate={(values) => {
                const errors = {};

                if (!values.name) {
                  errors.name = "*Name is required";
                } else if (!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/i.test(values.name)) {
                  errors.name = "*Invalid name format";
                }

                if (!values.email) {
                  errors.email = "*Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "*Invalid email address";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-element">
                    <div className="form-field flex flex-column">
                      <label htmlFor="name" className=" text-white">
                        Nome:
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className="form-control"
                      />
                    </div>
                    <span className="form-error-message">
                      {errors.name && touched.name && errors.name}
                    </span>
                  </div>
                  <div className="form-element">
                    <div className="form-field flex flex-column">
                      <label htmlFor="email" className="text-white">
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        style={{
                          backgroundColor: "transparent",
                        }}
                      />
                    </div>
                    <span className="form-error-message">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                  <div className="form-element">
                    <div className="form-field flex flex-column">
                      <label htmlFor="message" className="text-white">
                        Mensagem:
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="3"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        className="form-control-textarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit-btn-content flex flex-center">
                    <button
                      type="submit"
                      className="submit-btn text-upper"
                      disabled={isSubmitting}
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className="contact-right">
            <img src={formImage} alt="Contact" />
          </div>
        </div>
      </div>
      <Map />
      <Channnels />
    </section>
  );
};

export default Contact;
