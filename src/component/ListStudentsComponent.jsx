import React, { Component } from 'react';
import StudentDataService from '../service/StudentDataService';

const COURSE='computers';
class ListStudentsComponent extends  Component
{
    constructor(props) {
        super(props)
        this.state = {
           students: [],
            message: null
        }
        this.deleteStudentClicked = this.deleteStudentClicked.bind(this)
        this.updateStudentClicked = this.updateStudentClicked.bind(this)
        this.addStudentClicked = this.addStudentClicked.bind(this)
        this.refreshStudents = this.refreshStudents.bind(this)
    }

    componentDidMount() {
        this.refreshStudents();
    }

    refreshStudents() {
       StudentDataService.retrieveAllStudents(COURSE)//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ students: response.data })
                }
            )
    }

    deleteStudentClicked(id) {
        StudentDataService.deleteStudent(COURSE, id)
            .then(
                response => {
                    this.setState({ message: `Delete of student ${id} Successful` })
                    this.refreshStudents()
                }
            )

    }

    addStudentClicked() {
        this.props.history.push(`/students/-1`)
    }

    updateStudentClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/students/${id}`)
    }
    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Students</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateStudentClicked(student.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteStudentClicked(student.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addStudentClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }

} 
export default ListStudentsComponent