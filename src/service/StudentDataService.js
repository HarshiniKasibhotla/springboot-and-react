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

}
export default StudentDataService;
