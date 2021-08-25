
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';


function LureDescription(lureId) {
    const dispatch = useDispatch();
    const history = useHistory();
    const lure = useSelector(store => store.luresReducer.luresReducer);
    const {lures} = useParams();


    const goToLibrary = () => {
        history.push('/info')
    };

    useEffect(() => {
        dispatch({type: 'FETCH_LURE_DETAILS'})
        console.log('What lure description is coming in js',lure);
    }, []);

    return(
        <div className="box full" id={lure.id}>
            <h1>Lure Description</h1>
            <table>
                <thead>
                    <tr>
                        <th>{lure.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <td><img src={lure.image} width="200"/></td>
                    <td>Weather: {lure.weather}</td>
                    <td>Wind: {lure.wind}</td>
                    <td>Water Depth:{lure.depth}</td>
                    <td>Water Clarity:{lure.clarity}</td>
                    <td>Water Temperature:{lure.temperature}</td>
                    <td>Habitat: {lure.habitat}</td>
                </tbody>
            </table>
        </div>
    )
}

export default LureDescription;