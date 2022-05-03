import React from "react";
import { Form, Field } from "react-final-form";

export default function Precios() {
  const onSubmit = (e) => {
    debugger;
  };

  const validate = (e) => {
    const errors = {};

    if (e.message && e.message.length < 5) {
      errors.message = "El mínimo de caractéres es 5.";
    }

    return errors;
  };

  return (
    <div className="w-auto min-h-screen flex bg-slate-800 font-sans pt-16">
      <div className="m-auto max-w-screen-sm pt-0 px-0 pr-0 text-center w-1/2">
        <div className="bg-slate-800 text-center py-16">
          Precios
        </div>
        <div className="bg-slate-800 min-h-screen text-center py-16">
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="min-w-full flex justify-between py-4">
                  <label className="text-rose-500">Nombre</label>
                  <Field
                    className="w-80 text-black"
                    name="name"
                    component="input"
                    placeholder="Juan"
                  />
                </div>

                <div className="min-w-full flex justify-between py-4">
                  <label className="text-rose-500">Apellido</label>
                  <Field
                    className="w-80 text-black"
                    name="lastName"
                    component="input"
                    placeholder="Perez"
                  />
                </div>

                <div className="min-w-full flex justify-between py-4">
                  <label className="text-rose-500">Correo Electrónico</label>
                  <Field
                    className="w-80 text-black"
                    name="email"
                    component="input"
                    placeholder="juanperez@gmail.com"
                  />
                </div>

                <div className="min-w-full py-4">
                  <Field name="phone">
                    {({ input, meta }) => (
                      <div className="flex justify-between flex-wrap mt-1">
                        <label className="text-rose-500">Teléfono</label>
                        <input
                          className="w-80 text-black"
                          type="text"
                          {...input}
                          placeholder="(011) 555-5555"
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>

                <div className="min-w-full py-4">
                  <Field
                    name="message"
                    render={({ input, meta }) => (
                      <div className="flex justify-between mt-1 flex-wrap">
                        <label className="text-rose-500">Mensaje</label>
                        <textarea className="w-80 text-black" {...input} />
                        {meta.touched && meta.error && (
                          <div className="text-red-600 flex relative text-sm w-full justify-end">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  />
                </div>

                <button
                  className="btn btn-primary flex ml-auto mr-0"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
