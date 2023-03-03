import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import GuestNumberHandler from "./formComponents/GuestNumberHandler";

const FormReservation = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [formError, setFormError] = useState("");
  const [numOfGuests, setNumOfGuests] = useState(1);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too short.").max(20, "Too long. ").required("Name is required. "),
    email: Yup.string().email("Not email format. ").required("Email is required. "),
    dateMonth: Yup.number()
      .min(1, "No such month. ")
      .max(12, "No such month. ")
      .required("Month is required. "),
    dateDay: Yup.number()
      .min(1, "No such day. ")
      .max(31, "No such day. ")
      .required("Day is required. "),
    dateYear: Yup.number()
      .min(currentYear, "Passed year. ")
      .max(currentYear + 1, `Reservations available until ${currentYear + 1} inclusive. `)
      .required("Year is required. "),
    timeHour: Yup.number()
      .when(["timeMeridiem"], {
        is: "AM",
        then: (schema) => schema.oneOf([9, 10, 11], "Reservation hours: 09:00AM-5:00PM.  "),
        otherwise: (schema) =>
          schema.oneOf([12, 1, 2, 3, 4, 5], "Reservation hours: 09:00AM-5:00PM. "),
      })
      .required("Hour is required. "),
    timeMeridiem: Yup.string().required("Meridiem is required. "),
    timeMinute: Yup.number()
      .min(0, "Select minutes from 0 to 59. ")
      .max(59, "Select minutes from 0 to 59. ")
      .required("Minute field is required. "),
  });

  const isDateValid = (year, month, day) => {
    const dayCount = new Date(year, month, 0).getDate();
    return day > 0 && day <= dayCount;
  };

  return (
    <>
      <div className="formReservation">
        <h1>Reservation</h1>
        <Formik
          enableReinitialize
          initialValues={{
            name: "",
            email: "",
            dateMonth: "",
            dateDay: "",
            dateYear: currentYear,
            timeHour: "",
            timeMinute: "",
            timeMeridiem: "AM",
            numOfGuests: numOfGuests,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setFormError("");
            if (!isDateValid(values.dateYear, values.dateMonth, values.dateDay)) {
              setFormError("Invalid date. Indicated month does not contain such day.");
              return;
            }
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="nameInput">
                <Field name="name" placeholder="Name" />
                <div className="errorWrap">
                  <ErrorMessage className="errMsg" component="span" name="name" />
                </div>
              </div>
              <div className="emailInput">
                <Field name="email" placeholder="Email" />
                <div className="errorWrap">
                  <ErrorMessage className="errMsg" component="span" name="email" />
                </div>
              </div>
              <div className="dateInput">
                <div className="dateLabel">
                  <label>
                    Pick a date
                    <Field name="dateMonth" placeholder="MM" />
                    <Field name="dateDay" placeholder="DD" />
                    <Field name="dateYear" placeholder="YYYY" />
                  </label>
                  <div className="errorWrap">
                    <ErrorMessage className="errMsg" component="span" name="dateMonth" />
                    <ErrorMessage className="errMsg" component="span" name="dateDay" />
                    <ErrorMessage className="errMsg" component="span" name="dateYear" />
                    <span className="errMsg">{formError}</span>
                  </div>
                </div>
              </div>
              <div className="timeInput">
                <div className="timeLabel">
                  <label>
                    Pick a time
                    <Field name="timeHour" placeholder="09" />
                    <Field name="timeMinute" placeholder="00" />
                    <Field as="select" name="timeMeridiem">
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </Field>
                  </label>
                  <div className="errorWrap">
                    <ErrorMessage className="errMsg" component="span" name="timeHour" />
                    <ErrorMessage className="errMsg" component="span" name="timeMinute" />
                    <ErrorMessage className="errMsg" component="span" name="timeMeridiem" />
                  </div>
                </div>
              </div>
              <div className="numOfGuestsInput">
                <GuestNumberHandler numOfGuests={numOfGuests} setNumOfGuests={setNumOfGuests} />
                <div className="hidden">
                  <label htmlFor="numOfGuests">Number of Guests</label>
                  <Field name="numOfGuests" />
                </div>
              </div>
              <div className="reserveBtn">
                <button type="submit">make reservation</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormReservation;
