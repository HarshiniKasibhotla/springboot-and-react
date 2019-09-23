import axios from 'axios';

const COURSE='computers';
const STUDENT_API_URL='http://localhost:8080';
const COURSE_API_URL=`${STUDENT_API_URL}/courses/${COURSE}`;

class StudentDataService
{
    retrieveAllStudents(name)
    {
        return axios.get(`${COURSE_API_URL}/students`);
    }
     retrieveStudent(name, id) {
        //console.log('executed service')
        return axios.get(`${COURSE_API_URL}/students/${id}`);
    }

    deleteStudent(name, id) {
        //console.log('executed service')
        return axios.delete(`${COURSE_API_URL}/students${id}`);
    }

    updateStudent(name, id, student) {
        //console.log('executed service')
        return axios.put(`${COURSE_API_URL}/students/${id}`, student);
    }

    createStudent(name, student) {
        //console.log('executed service')
        return axios.post(`${COURSE_API_URL}/courses/`, student);
    }
}

export default new StudentDataService();


