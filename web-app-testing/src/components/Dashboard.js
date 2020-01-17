import React, { useState } from 'react';

const Dashboard = (props) => {
    const foulLogic = () => {
        if (props.strikes >= 2){
            return props.strikes;
        }else{
            return props.strikes + 1;
        }
    }
    const strikeLogic = () => {
        if (props.strikes >= 2){
            return (props.setStrikes(0), props.setBalls(0))
                
        } else {
            return props.setStrikes(props.strikes + 1);
        }
    }
    const ballLogic = () => {
        if (props.balls >= 3){
            return (props.setBalls(0), props.setStrikes(0))
        } else {
            return props.setBalls(props.balls + 1);
        }
    }
    return (
        <div>
            <button onClick={() => strikeLogic()}>Strike</button>
            <button onClick={() => ballLogic()} >Ball</button>
            <button onClick={() => props.setStrikes(foulLogic())}>Foul </button>
            <button onClick={() => {props.setStrikes(0)
                                    props.setBalls(0)}}>Hit</button>
        </div>
    )
}
export default Dashboard;