import React from 'react'

const Result = ({locationText, state, estimatedPop, lat, long, totalWages}) => {
    return (
        <div>
            <div>
                <h1>{locationText}</h1>
            </div>
            <div>
                <ul>
                    <li>State: {state}</li>
                    <li>Location: ({lat}, {long})</li>
                    <li>Estimated Population: {estimatedPop}</li>
                    <li>Total Wages: {totalWages}</li>
                </ul>
            </div>
        </div>
    )
}

export default Result
