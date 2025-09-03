import S from './Table.module.css'
import {sortByDate} from "../../script.js";
export function Table({data, updateHandle}) {

    const editRow = function(e, item) {
        console.log(item)

    }

    const removeRow = function(e, currentItem) {
        const updatedData = data.filter(item => item.date !== currentItem);
        const sortedData= sortByDate(updatedData)
        updateHandle(sortedData)

    }

    return(
        <>
            <div className={S.table}>
                {data.map((item)=>

                    <div className={S.row} id={item.date} key={item.date}>
                        <div className={S.data}>{item.date} </div>
                        <div className={S.distance}>{item.distance}</div>
                        <div className={S.crud}>
                            <div className={S.edit} onClick={(e) =>editRow(e, item.date)}>✎</div>
                            <div className={S.delete} onClick={(e) =>removeRow(e, item.date)}>✘</div>
                        </div>
                    </div>


                )}


            </div>
        </>
    )

}