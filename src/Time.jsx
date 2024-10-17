import moment from "moment";
import { TimeInput } from "./TimeInput"
import { TimeWath } from "./TimeWath"
import { useState, useEffect } from "react"
export function Time (){
    const [data,setData] = useState([]);
    const [timers,setTimers] = useState(new Date);
    function submitInput (e){
        e.preventDefault();
        const {target} = e;
        const dataForm = new FormData(target)
        let date = Object.fromEntries(dataForm)
        setData([...data,date])
    }
    function remove (e){
        const {target} = e
        let element = target.parentElement;
        element.remove();
    }
    useEffect (()=>{
        const interval = setInterval(()=>{
            setTimers(new Date)
        },1000)
        return function cleanup() {
            clearInterval(interval);
            }
    })
    return(
        <div className="Time">
            <TimeInput submit = {submitInput} />
            <div className="timers">
                <TimeWath time = {timers} offset = {data} remove = {remove}/>
            </div>
        </div>
    )
}