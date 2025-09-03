import S from './Step.module.css'
import {Table} from "../table/Table.jsx";
import {StepForm} from "../step-form/StepForm.jsx";
import {useState} from "react";

export function Step() {
    const [dataArray, updateHandle] =  useState([
        {
            date: '20.07.2019',
            distance: 5.7,
        },

    ])

    return (
        <>
            <StepForm data={dataArray} updateHandle={updateHandle}/>

            <Table data={dataArray} updateHandle={updateHandle}/>

        </>
    )
}
