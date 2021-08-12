import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';



function AddLure() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [weather, setWeather] = useState('');
    const [wind, setWind] = useState('');
    const [depth, setDepth] = useState('');
    const [clarity, setClarity] = useState('');
    const [temp, setTemp] = useState('');
    const [habitat, setHabitat] = useState('');
    


    const weatherHandler = [
        {value: 0, label: "Select Weather Type"}, {value: 1, label: "Sunny"},
        {value: 2, label: "Partly Sunny"}, {value: 3, label: "Overcast"},
        {value: 4, label: "Cloudy"}, {value: 5, label: "Partly Cloudy"},
        {value: 6, label: "Drizzle"}, {value: 7, label: "Rain"},
        {value: 8, label: "Thunderstorm"}, {value: 9, label: "Snow"}];

    const windHandler = [
        {value: 0, label: "Select Wind Speed"}, {value: 1, label: "1mph"},
        {value: 2, label: "2mph"}, {value: 3, label: "3mph"},
        {value: 4, label: "4mph"}, {value: 5, label: "5mph"},
        {value: 6, label: "6mph"}, {value: 7, label: "7mph"},
        {value: 8, label: "8mph"}, {value: 9, label: "9mph"},
        {value: 10, label: "10mph"}, {value: 11, label: "15mph"},
        {value: 12, label: "20mph"}];

    
    const depthHandler = [
        {value: 0, label: "Select Water Depth"}, {value: 1, label: "1ft"},
        {value: 2, label: "3ft"}, {value: 3, label: "5ft"},
        {value: 4, label: "6ft"}, {value: 5, label: "7ft"},
        {value: 6, label: "8ft"}, {value: 7, label: "9ft"},
        {value: 8, label: "10ft"}, {value: 9, label: "11ft"},
        {value: 10, label: "12ft"}, {value: 11, label: "13ft"},
        {value: 12, label: "14ft"}, {value: 13, label: "15ft"},
        {value: 14, label: "20ft"}, {value: 15, label: "25ft"}];

    const clarityHandler = [
        {value: 0, label: "Select Water Clarity"}, {value: 1, label: "1ft"},
        {value: 2, label: "3ft"}, {value: 3, label: "5ft"},
        {value: 4, label: "10ft"}, {value: 5, label: "15ft"},
        {value: 6, label: "20ft"}];

    const tempHandler = [
        {value: 0, label: "Select Water Temperature"}, {value: 1, label: "55f"},
        {value: 2, label: "60f"}, {value: 3, label: "65f"},
        {value: 4, label: "70f"}, {value: 5, label: "75f"},
        {value: 6, label: "80f"}, {value: 7, label: "85f"}];

    const habitatHandler = [
        {value: 0, label: "Select Habitat"}, {value: 1, label: "Lily-pads"},
        {value: 2, label: "Stumps"}, {value: 3, label: "Submerged-weedbed"},
        {value: 4, label: "Fallen-trees"}, {value: 5, label: "Sparse-vegetation"},
        {value: 6, label: "Weedline"}, {value: 7, label: "Dropoff"},
        {value: 8, label: "Rocky-bottom"}, {value: 9, label: "Sandy-bottom"},
        {value: 10, label: "Mud-bottom"}, {value: 11, label: "Thick-weed-mats"},
        {value: 12, label: "Boulders"}, {value: 13, label: "Docks"},
        {value: 14, label: "Point"}];

    const submitLure = (event) => {
        event.preventDefault();
        const lureToAdd = {
            //date: date,
            name: name,
            image: image,
            description: description,
            type: weather,
            speed: wind,
            depth: depth,
            clarity: clarity,
            temp: temp,
            area: habitat,
        };
        console.log(lureToAdd);
        dispatch({
            type:"ADD_LURE",
            payload: lureToAdd
        });
        //setDate('');
        setName('');
        setImage('');
        setDescription('');
        setWeather('');
        setWind('');
        setDepth('');
        setClarity('');
        setTemp('');
        setHabitat('');
    };
    console.log(name, image, description);

    return(
        <section>
            <form action="submit">
                <h2 className="box full">Add A New Lure</h2>
                <section className="grid">
                        <figure>
                            <input className="box" name="lureName" type="text" label ="lureName" onChange={(event) => setName(event.target.value)} />
                        </figure>
                    </section>
                <section className="grid">
                        <figure>
                            <input className="box" name="lureImage" type="text" label ="image" onChange={(event) => setImage(event.target.value)} />
                        </figure>
                    </section>
                    <section className="grid">
                        <figure>
                            <input className="box" name="lureDescription" type="text" label ="description" onChange={(event) => setDescription(event.target.value)} />
                        </figure>
                    </section>
                <section className="grid">
                <figure>
                <select className="box" id="weatherSelector" label="Select Weather" onChange={(event) => setWeather(event.target.value)}>
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
                <select className="box" id="wind selector" label="Select Wind" onChange={(event) => setWind(event.target.value)}>
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
                <select className="box" id="depth selector" label="Select Depth" onChange={(event) => setDepth(event.target.value)}>
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
                <select className="box" id="clarity selector" label="Select Clarity" onChange={(event) => setClarity(event.target.value)}>
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
                <select className="box" id="temp selector" label="Select Temp" onChange={(event) => setTemp(event.target.value)}>
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
                    <select className="box" id="habitat selector" label="Select Habitat" onChange={(event) => setHabitat(event.target.value)}>
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
                        <button className="box" onClick={(event) => submitLure(event)}>Add</button>
                    </figure>
                <aside className="characters">
                    <figure className="ness">
                        <figcaption className="box">
                            <button>Clear</button>
                        </figcaption>
                    </figure>
                </aside>
                </section>
            </form>
        </section>
    )
}

export default AddLure;