
export default function ChartKeyDT () {
    let inputs = [];    
    for (let i = 0; i < 24; i++) {
        inputs.push(<input type="text" key={i} />)               
        }

    
    return (
        <div>
            <form>
                {inputs}
            </form>
        </div>
    )
}