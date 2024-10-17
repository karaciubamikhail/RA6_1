export function TimeWath ({time,offset,remove}){
    if(offset.length !==0){
        return(
            offset.map((elem,key)=>{
                return(
                <div className="timer" key={key}>
                    <p className="timer-name">
                        {elem.nameOffset}
                    </p>
                    <p className="timer-body">
                        {time.getHours() - elem.offset}:{time.getMinutes()}:{time.getSeconds() }
                    </p>
                    <button onClick={remove}>Удалить</button>
                </div>
                )
            })
        )
    }
}