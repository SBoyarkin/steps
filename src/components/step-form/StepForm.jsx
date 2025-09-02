import S from './StepForm.module.css'
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

        const wasUpdated = data.some(elem => elem.date === newData.date);
        if (wasUpdated) {
            updateHandle(updatedData);
        } else {
            updateHandle([...updatedData, {
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