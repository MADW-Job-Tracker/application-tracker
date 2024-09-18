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
    const [update, setUpdate] = useState<boolean>(false); //flips between true/false in order to force a rerender
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
    const updateHandler = (): void => {
        //fetch request here
        setUpdate(!update);
        //console.log(update);
    }
    //this useEffect will eventually go off when the user creates, deletes, or modifies
    useEffect(() => { 
        const accordionHolder: JSX.Element[] = fakeData.map((element) => {
            return <JobAccordion data={element} updater={updateHandler}/>;
        });
        setjobList(accordionHolder);
    }, [update]); //<- dependency for when data changes


    
    return(
        <div className="jobList">
            {jobList.map((job, i) => (
                <div key={i}>
                    {job}
                </div>
            ))}
        </div>
    )
}