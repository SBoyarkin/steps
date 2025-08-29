import S from './Table.module.css'
export function Table({data}) {
    return(
        <>
            <div className={S.table}>
                {data.map((item)=>

                    <div className={S.row} key={item.data}>
                        <div className={S.data}>{item.data} </div>
                        <div className={S.distance}>{item.distance}</div>
                        <div className={S.crud}>
                            <div className={S.edit}>✎</div>
                            <div className={S.delete}>✘</div>
                        </div>
                    </div>


                )}


            </div>
        </>
    )

}