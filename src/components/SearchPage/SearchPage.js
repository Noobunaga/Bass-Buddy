import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


function SearchPage() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch('');
    const history = useHistory('');

    const searchLure = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SEARCH',
            payload: searchLure
        })
        history.push('/results')
    };

    const cancel = (event) => {
        history.push('/info');
    }

    const weatherHandler = [
        {value: 0, label: "Select Weather Type"}, {value: "Sunny", label: "Sunny"},
        {value: "Partly Sunny", label: "Partly Sunny"}, {value: "Overcast", label: "Overcast"},
        {value: "Cloudy", label: "Cloudy"}, {value: "Partly Cloudy", label: "Partly Cloudy"},
        {value: "Drizzle", label: "Drizzle"}, {value: "Rain", label: "Rain"},
        {value: "Thunderstorm", label: "Thunderstorm"}, {value: "Snow", label: "Snow"}];

    const windHandler = [
        {value: 0, label: "Select Wind Speed"}, {value: "1mph", label: "1mph"},
        {value: "2mph", label: "2mph"}, {value: "3mph", label: "3mph"},
        {value: "4mph", label: "4mph"}, {value: "5mph", label: "5mph"},
        {value: "6mph", label: "6mph"}, {value: "7mph", label: "7mph"},
        {value: "8mph", label: "8mph"}, {value: "9mph", label: "9mph"},
        {value: "10mph", label: "10mph"}, {value: "15mph", label: "15mph"},
        {value: "20mph", label: "20mph"}];

    
    const depthHandler = [
        {value: 0, label: "Select Water Depth"}, {value: "1ft", label: "1ft"},
        {value: "3ft", label: "3ft"}, {value: "5ft", label: "5ft"},
        {value: "6ft", label: "6ft"}, {value: "7ft", label: "7ft"},
        {value: "8ft", label: "8ft"}, {value: "9ft", label: "9ft"},
        {value: "10ft", label: "10ft"}, {value: "11ft", label: "11ft"},
        {value: "12ft", label: "12ft"}, {value: "13ft", label: "13ft"},
        {value: "14ft", label: "14ft"}, {value: "15ft", label: "15ft"},
        {value: "20ft", label: "20ft"}, {value: "25ft", label: "25ft"}];

    const clarityHandler = [
        {value: 0, label: "Select Water Clarity"}, {value: "1ft", label: "1ft"},
        {value: "3ft", label: "3ft"}, {value: "5ft", label: "5ft"},
        {value: "10ft", label: "10ft"}, {value: "15ft", label: "15ft"},
        {value: "20ft", label: "20ft"}];

    const tempHandler = [
        {value: 0, label: "Select Water Temperature"}, {value: "55f", label: "55f"},
        {value: "60f", label: "60f"}, {value: "65f", label: "65f"},
        {value: "70f", label: "70f"}, {value: "75f", label: "75f"},
        {value: "80f", label: "80f"}, {value: "85f", label: "85f"}];

    const habitatHandler = [
        {value: 0, label: "Select Habitat"}, {value: "Lily-pads", label: "Lily-pads"},
        {value: "Stumps", label: "Stumps"}, {value: "Submerged-weedbed", label: "Submerged-weedbed"},
        {value: "Fallen-trees", label: "Fallen-trees"}, {value: "Sparse-vegetation", label: "Sparse-vegetation"},
        {value: "Weedline", label: "Weedline"}, {value: "Dropoff", label: "Dropoff"},
        {value: "Rocky-bottom", label: "Rocky-bottom"}, {value: "Sandy-bottom", label: "Sandy-bottom"},
        {value: "Mud-bottom", label: "Mud-bottom"}, {value: "Thick-weed-mats", label: "Thick-weed-mats"},
        {value: "Boulders", label: "Boulders"}, {value: "Docks", label: "Docks"},
        {value: "Point", label: "Point"}];

    
    return(
        <section>
            <form className="box full" action="submit">
                <h2>Search Lure</h2>
                <section className="grid">
                    <figure>
                        <select 
                        className="box" 
                        id="weatherSelector" 
                        value={search.weather} 
                        onChange={(event) => setSearch(event.target.value)}>
                            {weatherHandler.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                             ))}
                        </select>
                    </figure>
                </section>
                <section className="grid">
                    <figure>
                        <select 
                        className="box" 
                        id="wind selector" 
                        value={search.wind} 
                        onChange={(event) => setSearch(event.target.value)}>
                            {windHandler.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </select>
                    </figure>
                </section>
                <section className="grid">
                    <figure>
                        <select 
                        className="box" 
                        id="depth selector" 
                        value={search.depth} 
                        onChange={(event) => setSearch(event.target.value)}>
                            {depthHandler.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </select>
                    </figure>
                </section>
                <section className="grid">
                    <figure>
                        <select 
                        className="box" 
                        id="clarity selector" 
                        value={search.clarity} 
                        onChange={(event) => setSearch(event.target.value)}>
                            {clarityHandler.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </select>
                    </figure>
                </section>
                <section className="grid">
                    <figure>
                        <select 
                        className="box" 
                        id="temp selector" 
                        value={search.temperature} 
                        onChange={(event) => setSearch(event.target.value)}>
                            {tempHandler.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </select>
                    </figure>
                </section>
                <section className="grid">
                <figure>
                    <select 
                    className="box" 
                    id="habitat selector" 
                    value={search.habitat} 
                    onChange={(event) => setSearch(event.target.value)}>
                        {habitatHandler.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </figure>
                </section>
                <section className="grid">
                    <figure className="ness">
                        <button 
                        className="box" 
                        onClick={(event) => searchLure(event)}>Search</button>
                    </figure>
                <aside className="characters">
                    <figure className="ness">
                            <button 
                            className="box" 
                            onClick={(event) => cancel(event)}>Cancel</button>
                    </figure>
                </aside>
                </section>
            </form>
        </section>
    )
}
export default SearchPage;