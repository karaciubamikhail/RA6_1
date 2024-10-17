export function TimeInput ({submit}){
    return(
        <form className="timeinput" onSubmit={submit}>
            <input type="text" className="timeinput_name" name="nameOffset"/>
            <input type="text" className="timeinput_zone" name="offset"/>
            <button type="submit" className="timeinput_submit">Добавить</button>
        </form>
    )
}