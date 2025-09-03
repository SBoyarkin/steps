import S from './StepForm.module.css'
import {sortByDate} from "../../script.js";
export function StepForm({data, updateHandle}) {
    const FeedBack = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const entries = formData.entries()
        const newData = Object.fromEntries(entries)
        data = new Array(...data)

        const updatedData = data.map((elem) => {
            if (elem.date === newData.date) {
                return {
                    ...elem,
                    distance: Number(elem.distance) + Number(newData.distance)
                };
            }
            return elem;
        });

        const wasUpdated = data.some(elem => elem.date === newData.date)
        const sortedData = sortByDate(updatedData);
        if (wasUpdated) {
            event.target.reset()
            updateHandle(sortedData);
        } else {
            event.target.reset()
            updateHandle([...sortedData, {
                date: newData.date,
                distance: Number(newData.distance)

            }]);
        }
    }





    return(
        <>
            <form className={S.form} onSubmit={FeedBack}>
                <div>
                <div className={S.title}>Дата (ДД.ММ.ГГ)</div>
                <input className={S.inputForm} name={'date'} type='text'/>
                </div>
                <div>
                <div className={S.title}>Пройдено км</div>
                <input className={S.inputForm} name='distance' type='text'/>
                </div>
                    <button className={S.btn}>ОК</button>
            </form>
        </>
    )

}