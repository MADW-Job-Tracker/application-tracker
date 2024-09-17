import { useState } from 'react'
import JobAccordion from '../components/JobAccordion'

interface data {
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

export default function JobDisplay(): JSX.Element {
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
    
    return(
        
    )
}