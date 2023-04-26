import {useState} from 'react';

export default function Form() {
    const [form, setForm] = useState({
        firstName: "Bonnie",
        lastName: "BoBonnie",
        email: "bonnie@bdipasquale.com"
    });

    return (
        <>
        <label>First Name:</label>
        <input 
            value={form.firstName} 
            onChange={e => setForm({...form, firstName: e.target.value})} 
        />
        <br />
        <label>Last Name:</label>
        <input 
            value={form.lastName}
            onChange={e => setForm({...form, lastName: e.target.value})}
        />
        <br />
        <label>Email</label>
        <input 
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
        />
        </>
    );
}