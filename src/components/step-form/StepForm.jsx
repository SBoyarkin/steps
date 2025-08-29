import S from './StepForm.module.css'
export function StepForm(data, updateHandle) {

    return(

        <>
            <form className={S.form} onSubmit={ (event) => {
                event.preventDefault()

            }
            }>
                <div>
                <div className={S.title}>Дата (ДД.ММ.ГГ)</div>
                <input className={S.inputForm} name={'data'} type='text'/>
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