import React, {Component} from 'react';
import {Table} from 'reactstrap';

import ConfirmRemovalModal from './ConfirmRemovalModal';
import NewStudentModal from './NewStudentModal';

class StudentList extends Component{
    render(){
        const students = this.props.students;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Document</th>
                        <th>Phone</th>
                        <th>Registration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!students || students.lengt <= 0 ?(
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Oops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        students.map(student=> (
                            <tr key={student.pk}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.document}</td>
                                <td>{student.phone}</td>
                                <td>{student.regustrationDate}</td>
                                <td align="center">
                                    <NewStudentModal
                                        create={false}
                                        student={student}
                                        resetstate={this.props.resetstate}
                                    />
                                    &nbsp;&nbsp;
                                    <ConfirmRemovalModal
                                        pk={student.pk}
                                        resetState={this.props.resetstate}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}
export default StudentList;