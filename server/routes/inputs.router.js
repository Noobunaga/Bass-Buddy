const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//HABITAT GET
router.get('/:id', (req, res) => {
    const queryText = `WITH habitat_list as (
           SELECT array_agg(type) as lures_habitats_list, lures_habitats.lures_id as lures_id
                FROM habitat
               JOIN lures_habitats ON lures_habitats.habitat_id = habitat.id
               GROUP BY lures_habitats.lures_id
         )
         SELECT name, image, description, user_id, habitat_list.lures_habitats_list
         FROM lures
         JOIN habitat_list ON lures.id = habitat_list.lures_id;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error', err);
        res.sendStatus(500)
    })
});

// router.get('/all', (req, res) => {
//     const queryText = `SELECT * FROM "habitat";`
//     pool.query(queryText, [req.params.id])
//     .then(results => {
//         res.send(results.rows);
//     })
//     .catch(err => {
//         console.log('Error getting habitats', err);
//         res.sendStatus(500)
//     })
// });


//DEPTH GET
router.get('/:id', (req, res) => {
    const queryText = ` WITH depth_list as (
        SELECT array_agg(depth) as lures_depth_list, lures_water_depth.lures_id as lures_id
            FROM water_depth
            JOIN lures_water_depth ON lures_water_depth.water_depth_id = water_depth.id
            GROUP BY lures_water_depth.lures_id
      )
      SELECT name, image, description, user_id, depth_list.lures_depth_list
      FROM lures
      JOIN depth_list ON lures.id = depth_list.lures_id;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error', err);
        res.sendStatus(500)
    })
});

//CLARITY GET
router.get('/:id', (req, res) => {
    const queryText = ` WITH clarity_list as (
        SELECT array_agg(clarity) as lures_clarity_list, lures_water_clarity.lures_id as lures_id
            FROM water_clarity
            JOIN lures_water_clarity ON lures_water_clarity.water_clarity_id = water_clarity.id
            GROUP BY lures_id
      )
      SELECT name, image, description, user_id, clarity_list.lures_clarity_list
      FROM lures
      JOIN clarity_list ON lures.id = clarity_list.lures_id;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error', err);
        res.sendStatus(500)
    })
});

//TEMP GET
router.get('/:id', (req, res) => {
    const queryText = `WITH temp_list as (
        SELECT array_agg(temp) as lures_temp_list, lures_water_temp.lures_id as lures_id
            FROM water_temp
            JOIN lures_water_temp ON lures_water_temp.water_temp_id = water_temp.id
            GROUP BY lures_id
      )
      SELECT name, image, description, user_id, temp_list.lures_temp_list
      FROM lures
      JOIN temp_list ON lures.id = temp_list.lures_id;
      `;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error', err);
        res.sendStatus(500)
    })
});

//DATE/TIME
// router.get('/:id', (req, res) => {
//     const queryText = ` WITH depth_list as (
//         SELECT array_agg(depth) as lures_depth_list, lures_water_depth.lures_id as lures_id
//             FROM water_depth
//             JOIN lures_water_depth ON lures_water_depth.water_depth_id = water_depth.id
//             GROUP BY lures_water_depth.lures_id
//       )
//       SELECT name, image, description, user_id, depth_list.lures_depth_list
//       FROM lures
//       JOIN depth_list ON lures.id = depth_list.lures_id;`;
//     pool.query(queryText, [req.params.id])
//     .then(result => {
//         res.send(results.rows);
//     })
//     .catch(err => {
//         console.log('Error', err);
//         res.sendStatus(500)
//     })
// });

//WEATHER GET
router.get('/:id', (req, res) => {
    const queryText = `WITH weather_list as (
        SELECT array_agg(type) as lures_weather_list, lures_weather.lures_id as lures_id
            FROM weather
            JOIN lures_weather ON lures_weather.weather_id = weather.id
            GROUP BY lures_id
      )
      SELECT name, image, description, user_id, weather_list.lures_weather_list
      FROM lures
      JOIN weather_list ON lures.id = weather_list.lures_id;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error', err);
        res.sendStatus(500)
    })
});

//WIND GET
router.get('/:id', (req, res) => {
    const queryText = `WITH wind_list as (
        SELECT array_agg(speed) as lures_wind_list, lures_wind.lures_id as lures_id
            FROM wind
            JOIN lures_wind ON lures_wind.wind_id = wind.id
            GROUP BY lures_wind.lures_id
      )
      SELECT name, image, description, user_id, wind_list.lures_wind_list
      FROM lures
      JOIN wind_list ON lures.id = wind_list.lures_id;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error', err);
        res.sendStatus(500)
    })
});

// router.get('/:id', (req, res) => {
//     const queryText = `SELECT "habitat".type
//     FROM "habitat"
//     JOIN "lures_habitats" ON "habitat".id = "lures_habitats".habitat_id
//     JOIN "lures" ON "lures".id = "lures_habitats".lures_id
//     WHERE "lures".id = $1;`;
//     pool.query(queryText, [req.params.id])
//     .then(result => {
//         res.send(results.rows);
//     })
//     .catch(err => {
//         console.log('Error', err);
//         res.sendStatus(500)
//     })
// });


// router.post('/', (req, res) => {
//     console.log(req.body);
//     const insertLureQuery = `
//     INSERT INTO "lures" ("name", "image", "description", "user_id")
//     `
// })

module.exports = router;