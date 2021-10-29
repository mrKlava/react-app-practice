import React, {useState, useEffect} from 'react';

function ListItem(props) {

    const [total, setTotal] = useState("works")

    let morStart = props.item.morStart
    let morEnd = props.item.morEnd

    let aftStart = props.item.aftStart
    let aftEnd = props.item.aftEnd

    function roundNumber(num, digits) {
        return Math.round( (num).toFixed(digits) * 100 ) / 100
    }

    function countMin(minutes, init, initHours) {
        // if (morEnd - morHourEnd > 0) {
        if (init - initHours > 0) {
            // morMinuesEnd = roundNumber( (roundNumber((morEnd - morHourEnd), 2) / 0.6), 1)
            minutes = roundNumber( (roundNumber((init - initHours), 2) / 0.6), 2)

            return minutes
        } else {
            return minutes = 0
        }
    }

    function countPeriod(periodStart, periodEnd, periodHours) {
        if (periodEnd !== 0) {

            let hourStart = Math.floor(periodStart)
            let hourEnd = Math.floor(periodEnd)

            let minutesStart 
            let minutesEnd 
            
            minutesStart = countMin(minutesStart, periodStart, hourStart)
            minutesEnd = countMin(minutesEnd, periodEnd, hourEnd)

            return periodHours = roundNumber( (hourEnd + minutesEnd) - (hourStart + minutesStart), 2 )
  
        } else {
            return periodHours = 0
        }
    }
    
    useEffect(
        function countTotal() {

            let morHours
            let aftHours
            
            morHours = countPeriod(morStart, morEnd, morHours)
            aftHours = countPeriod(aftStart, aftEnd, aftHours)

            setTotal(morHours + aftHours)
        }
    )

    return (

        <div className="list">

            <div className="list-item--date">
                {props.item.date}
            </div>

            <div className="list-item--time">
                {morStart}
            </div>

            <div className="list-item--time">
                {morEnd}
            </div>
            
            <div className="list-item--time">
                {props.item.aftStart}
            </div>

            <div className="list-item--time">
                {props.item.aftEnd}
            </div>

            <div className="list-item--total">
                {total}
            </div>

        </div>
    )
}

export default ListItem;