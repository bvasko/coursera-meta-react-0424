export default function MenuSection(props) {
    // get an array of objects
    const data = props.data[props.selected];
    console.log('section', data)
    return (
        <div style={{textAlign: "left", paddingLeft: "40px", float: "left"}}>
        <h2>{props.selected}</h2>
        <ul>
           {data.map( (item, index) => (
                <li key={index} style={{display: "block", paddingLeft: "20px"}}>
                    {Object.keys(item)} ... {Object.values(item)}
                </li>
            ) )} 
        </ul>
        </div>
    )
}