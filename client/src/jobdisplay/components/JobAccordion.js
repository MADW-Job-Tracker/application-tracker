import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, TextField } from "@mui/material";
export default function JobAccordion(props) {
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState(0);
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');
    const { data } = props;
    useEffect(() => {
        setCompany(data.company);
        setTitle(data.jobTitle);
        setDescription(data.description);
        setSalary(data.salary);
        setStatus(data.status);
        setDate(data.date);
    }, [company, title, description, salary, status, date]);
    return (_jsx("div", { children: _jsxs(Accordion, { children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel1-content", id: "panel1-header", children: company }), _jsxs(AccordionDetails, { children: [_jsx("span", { children: _jsx(TextField, { id: "filled-basic", label: "Company", variant: "filled", defaultValue: company }) }), _jsx("br", {}), _jsx("span", { children: _jsx(TextField, { id: "filled-basic", label: "Job Title", variant: "filled", value: title }) }), _jsx("br", {}), _jsx("span", { children: _jsx(TextField, { id: "filled-basic", label: "Description", variant: "filled", value: description }) }), _jsx("br", {}), _jsx("span", { children: _jsx(TextField, { id: "filled-basic", label: "Salary", variant: "filled", value: salary }) }), _jsx("br", {}), _jsx("span", { children: _jsx(TextField, { id: "filled-basic", label: "Status", variant: "filled", value: status }) }), _jsx("br", {}), _jsx("span", { children: _jsx(TextField, { id: "filled-basic", label: "Date", variant: "filled", value: date }) }), _jsx("br", {})] })] }) }));
}
