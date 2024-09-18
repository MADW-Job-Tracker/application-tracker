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
    industry: string,
    subIndustry: string,
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
            industry: "retail",
            subIndustry: "risk analyst"
        },
        {
            id: 2,
            company: "companyB",
            jobTitle: "titleB",
            description: "a job B",
            salary: 72000,
            status: "interviewed",
            date: "January 3",
            industry: "construction",
            subIndustry: "architect"
        },
        {
            id: 3,
            company: "companyC",
            jobTitle: "titleC",
            description: "a job C",
            salary: 70000,
            status: "offer",
            date: "January 5",
            industry: "manufacturing",
            subIndustry: "foreman"
        },
    ]
    const updateHandler = (): void => {
        //update request here
        setUpdate(!update);
        //console.log(update);
    }
    //this useEffect will eventually go off when the user creates, deletes, or modifies
    useEffect(() => { 
        const fetchData = async (): Promise<void> => {
            try{
                const getUpdatedData = await fetch("http://localhost:8080/api/application/something", {
                    method: "GET",
                });
            }
            catch (error) {
                if(error instanceof Error){
                    console.error(error);
                }
            }


        }
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