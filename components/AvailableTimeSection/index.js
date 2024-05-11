import TimeSelect from "./TimeSelectTinyCard";
import "./style.css"
export default function AvailableTimeSection(){
    return(
        <div className="available-time-selection">
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
        </div>
    )
}