import { useState, useEffect } from 'react'
import JobAccordion from './JobAccordion'

export interface data {
    id: number,
    company: string,
    jobTitle: string,
    description: string,
    salary: number,
    status: string,
    date: string,
}

export default function JobDisplay() {
    const [jobList, setjobList] = useState<JSX.Element[]>([]); //stores job list in state
    const fakeData: data[] = [{
            id: 1,
            company: "companyA",
            jobTitle: "titleA",
            description: "a job A",
            salary: 75000,
            status: "applied",
            date: "January 2",
        },
        {
            id: 2,
            company: "companyB",
            jobTitle: "titleB",
            description: "a job B",
            salary: 72000,
            status: "interviewed",
            date: "January 3",
        },
        {
            id: 3,
            company: "companyC",
            jobTitle: "titleC",
            description: "a job C",
            salary: 70000,
            status: "offer",
            date: "January 5",
        },
    ]
    useEffect(() => { //this useEffect will eventually go off when the user creates, deletes, or modifies
        const accordionHolder: JSX.Element[] = fakeData.map((element) => {
            return <JobAccordion data={element}/>;
        });
        setjobList(accordionHolder);
    }, []); //<- dependcy for when data changes

    
    return(
        <div>
            {jobList.map((job, i) => (
                <div key={i}>
                    {job}
                </div>
            ))}
        </div>
    )
}