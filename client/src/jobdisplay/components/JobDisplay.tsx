import { useState, useEffect } from 'react'
import JobAccordion from './JobAccordion'

export interface data {
    id: number | null,
    company: string,
    title: string | null,
    description: string | null,
    salary: number | null,
    status: string,
    date: string | null,
    date: string | null,
}

export default function JobDisplay() {
    const [jobList, setjobList] = useState<JSX.Element[]>([]); //stores job list in state
    const [update, setUpdate] = useState<boolean>(false); //flips between true/false in order to force a rerender
    const updateHandler = (): void => {
        setUpdate(!update);
        //console.log(update);
    }
    //this useEffect will eventually go off when the user creates, deletes, or modifies
    useEffect(() => { 
        const fetchData = async (): Promise<void> => {
            try{
                const getUpdatedData = await fetch("http://localhost:8080/application/all", {
                const getUpdatedData = await fetch("http://localhost:8080/application/all", {
                    method: "GET",
                });
                const processedData: data[] = await getUpdatedData.json();
                console.log(processedData);

                const accordionHolder: JSX.Element[] = processedData.map((element) => {
                    return <JobAccordion data={element} updater={updateHandler}/>;
                });
                setjobList(accordionHolder);
                const processedData: data[] = await getUpdatedData.json();
                console.log(processedData);

                const accordionHolder: JSX.Element[] = processedData.map((element) => {
                    return <JobAccordion data={element} updater={updateHandler}/>;
                });
                setjobList(accordionHolder);
            }
            catch (error) {
                if(error instanceof Error){
                    console.error(error);
                }
            }

        }
        fetchData();

        fetchData();

    }, [update]); //<- dependency for when data changes



    
    return (
        <>
            <div className="jobList">
                 {jobList.slice().reverse().map((job, i) => (
                    <div key={i}>
                        {job}
                    </div>
                ))}
            </div>
        </>
    );
}