import React from 'react';
import Table from './table';

export default () => {

    const students = [
        {
            name:'Anna Tran',
            course: 'Public Health',
            grade: 85
        },
        {
            name: 'Lana Tran',
            course: 'Childhood Education',
            grade:99
        },
        {
            name:'Abbie La',
            course:'Pharmaceutical Science',
            grade: 70
        }
    ];
    
    return (
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
    )
}

