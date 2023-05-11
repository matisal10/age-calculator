import React, { useState } from 'react'
import CalculatorAge from './calculatorAge';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './css/ageForm.css'

export default function AgeForm() {

    const [form, setForm] = useState([]);

    const ageShema = Yup.object().shape({
        day: Yup.number()
            .positive('Must be a valid day')
            .min(1, 'Must be a valid day')
            .max(31, 'Must be a valid day')
            .required('Day is required'),
        month: Yup.number()
            .positive('Must be a valid month')
            .min(1, 'Must be a valid month')
            .max(12, 'Must be a valid month')
            .required('Month is required'),
        year: Yup.number()
            .positive('Must be a valid year')
            .max(new Date().getFullYear(), 'Must be a valid year')
            .required("Year is required")
    })

    const initialValues = { day: '', month: '', year: '' }

    function handleSubmitForm(va) {
        setForm(va)
    }

    return (
        <div className='containerAgeForm'>
            <Formik
                initialValues={initialValues}
                validationSchema={ageShema}
                onSubmit={(values) => handleSubmitForm(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} className='formContainer'>
                        <div className='inputContainer'>
                            <label >DAY</label>
                            <input
                                type="number"
                                name="day"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.day}
                                placeholder='DD'
                            />
                            {errors.day && touched.day && (
                                <ErrorMessage name='day' className='errorMessage' component='div'></ErrorMessage>
                            )}
                        </div>
                        <div className='inputContainer'>
                            <label >MONTH</label>
                            <input
                                type="number"
                                name="month"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.month}
                                placeholder='MM'
                            />
                            {errors.month && touched.month && (
                                <ErrorMessage name='month' className='errorMessage' component='div'></ErrorMessage>
                            )}
                        </div>

                        <div className='inputContainer'>
                            <label >YEAR</label>
                            <input
                                type="number"
                                name="year"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.year}
                                placeholder='YYYY'
                            />
                            {errors.year && touched.year && (
                                <ErrorMessage name='year' className='errorMessage' component='div'></ErrorMessage>
                            )}

                        </div>
                        <div className='buttonContainer'>
                            <div className='line'>
                                <hr style={{ borderBottom: '1px solid gray;' }}></hr>
                            </div>
                            <button type="submit" className=''>
                                <img style={{marginTop:'15px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2TMQ6DMAxFuQQR3P8mdKKUBYYe51VRM6URxLEjIZonMQX7xZjfdY3G7QEm4AU4g14OWIFHzstPvuwaeZD6Hp45p6AHtlDwBsYCadxjKC0cq0s1crW0RG4mlchNpCTiFP2hu/BMFycSAsGF5hyxZDrxVyjea3T2s1OLOLmTiZbw6Cf9zzgpd24nPZJXl0rjVAVO4lRb7lJxajQuwQdpOdhjIFDWzQAAAABJRU5ErkJggg=="/>
                            </button>

                        </div>
                    </form>
                )}
            </Formik>
            <div className='containerCalculator'>
                <CalculatorAge ageData={form} />
            </div>

        </div>
    )
}
