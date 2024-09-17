import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import JobAccordion from './JobAccordion';
export default function JobDisplay() {
    const [jobList, setjobList] = useState([]); //stores job list in state
    const fakeData = [{
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
    ];
    useEffect(() => {
        const accordionHolder = fakeData.map((element) => {
            return _jsx(JobAccordion, { data: element });
        });
        setjobList(accordionHolder);
    }, []); //<- dependcy for when data changes
    return (_jsx("div", { children: jobList.map((job, i) => (_jsx("div", { children: job }, i))) }));
}
