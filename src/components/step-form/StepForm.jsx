import S from './StepForm.module.css'
import {sortByDate} from "../../script.js";

export function StepForm({data, updateHandle}) {
    const isValidDate = (dateString) => {
        const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
        if (!regex.test(dateString)) return false;

        const parts = dateString.split('.');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);

        if (month < 1 || month > 12) return false;
        if (day < 1 || day > 31) return false;

        const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (day > daysInMonth[month - 1]) return false;

        return true;
    }

    const FeedBack = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const entries = formData.entries()
        const newData = Object.fromEntries(entries)
        const {date, distance} = newData
        if (!date.trim() || !distance.trim()) {
            alert('Заполните все поля');
            return;
        }
        if (!isValidDate(date)) {
            alert('Введите корректную дату в формате ДД.ММ.ГГГГ');
            return;
        }

        if (isNaN(distance) || distance <= 0) {
            alert('Введите корректное расстояние');
            return;
        }

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
                    <input className={S.inputForm} name={'date'} type='text' placeholder="ДД.ММ.ГГГГ"/>
                </div>
                <div>
                    <div className={S.title}>Пройдено км</div>
                    <input className={S.inputForm} name='distance' type='text' placeholder="0"/>
                </div>
                <button className={S.btn}>ОК</button>
            </form>
        </>
    )
}