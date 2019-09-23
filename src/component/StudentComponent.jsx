import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentDataService from '../service/StudentDataService';

const COURSE = 'computers'

class StudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        StudentDataService.retrieveStudent(COURSE, this.state.id)
            .then(response => this.setState({
                name: response.data.name
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a name'
        } else if (values.name.length < 1) {
            errors.name = 'Enter atleast a character in name'
        }

        return errors

    }

    onSubmit(values) {
        let course = COURSE

        let student = {
            id: this.state.id,
            name: values.name
        }

        if (this.state.id === -1) {
            StudentDataService.createStudent(course, student)
                .then(() => this.props.history.push('/students'))
        } else {
            StudentDataService.updateStudent(course, this.state.id, student)
                .then(() => this.props.history.push('/students'))
        }

        console.log(values);
    }

    render() {

        let { name, id } = this.state

        return (
            <div>
                <h3>Student</h3>
                <div className="container">
                    <Formik
                       initialValues={{}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}

                    
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default StudentComponent