const express = require('express');
const pool = require ('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { default: Axios } = require('axios');


//GET all lures into library
router.get('/', (req,res) => {
    
    const query = `
        SELECT * FROM "lures" ORDER BY "id" ASC;`;
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('Error getting items', err);
        res.sendStatus(500);
    })
});

//ADD a lure to the library 
router.post('/', rejectUnauthenticated, (req,res) => {
    const now = new Date();
    console.log(req.body);
    const insertLure = `
    INSERT INTO "lures" ("name", "image", "description", "date", "weather", "wind", "depth", "clarity", "temperature", "habitat", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
    `;

    pool.query(insertLure, [req.body.name, req.body.image, req.body.description, now, req.body.weather, req.body.wind, req.body.depth, req.body.clarity, req.body.temperature, req. body.habitat, req.user.id])
    .then(results => {
        console.log('ADD lure for user successful');
        res.sendStatus(201);
    })  
    .catch(err => {
        console.log('COULD NOT ADD lure', err);
        res.sendStatus(500)
    })
});

//DELETE a lure of user logged in
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
        DELETE FROM "lures"
        WHERE "user_id" = $1 and "id" = $2;`;
    pool.query(queryText, [req.user.id, req.params.id])
    .then(result => {
        res.sendStatus(201)
    })
    .catch(error => {
        console.log('Error Deleting', error);
        res.sendStatus(500)
    })
});

//UPDATE a user added lure, they can update the description 
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('what is id', req.params.id);
    console.log('what is the', req.body);
    const queryText = `
        UPDATE "lures"
        SET "image" = $1,
         "description" = $2,
         "weather" = $3,
         "wind" = $4,
         "depth" = $5,
         "clarity" = $6,
         "temperature" = $7,
         "habitat" = $8
        WHERE "user_id" = $9 AND "id" = $10;`;
    pool.query(queryText, [
        req.body.image,
        req.body.description, 
        req.body.weather, 
        req.body.wind, 
        req.body.depth, 
        req.body.clarity, 
        req.body.temperature, 
        req.body.habitat, 
        req.user.id, 
        req.params.id])
    .then(result => {
        console.log('Item updated');
        res.sendStatus(201)
    })
    .catch(error => {
        console.log('Error updating', error);
        res.sendStatus(500)
    })
});

//RETURN lures added by current user
router.get('/userLures', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT * FROM "lures"
        WHERE "lures"."user_id" = $1;`;
    pool.query(queryText, [req.user.id])
    .then(result => {
        console.log('Get Lures by user');
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error get by user', error);
        res.sendStatus(500)
    })
});

//SEARCH lures
router.get('/:search', (req, res) => {
    const search = req.params.search;
    Axios.get()
    .then(result => {
        console.log('Searching lures');
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error get by user', error);
        res.sendStatus(500)
    })
});

module.exports = router;

// router.post('/', async (req, res) => {
//  await pool.connect();

//     try {
//         const {
//             customer_name,
//             street_address,
//             city,
//             zip,
//             type,
//             total,
//             pizzas
//         } = req.body;
//         await client.query('BEGIN')
//         await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
//         VALUES ($1, $2, $3, $4, $5, $6)
//         await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
//         VALUES ($1, $2, $3, $4, $5, $6)
//         await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
//         VALUES ($1, $2, $3, $4, $5, $6)
//         await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
//         VALUES ($1, $2, $3, $4, $5, $6)
//         await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
//         VALUES ($1, $2, $3, $4, $5, $6)
//         RETURNING id;`, [customer_name, street_address, city, zip, type, total]);
//         const orderId = orderInsertResults.rows[0].id;

//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /api/order', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });

//ORIGIN CODE
// const now = new Date();
//     const insertLure = `
//     WITH lures_list as (
//         INSERT INTO "lures" ("name", "image", "description", "user_id")
//         VALUES ($1, $2, $3, $4)
//         RETURNING "id" as lure_id
//     )

//     INSERT INTO "lures_weather" ("weather_id", "lures_id")VALUES($5, lures_list.lure_id);
//     INSERT INTO "lures_wind" ("wind_id", "lures_id")VALUES($6, lures.lure_id)
//     INSERT INTO "lures_water_depth" ("water_depth_id", "lures_id")VALUES($7, lures.lure_id)
//     INSERT INTO "lures_water_clarity" ("water_clarity_id", "lures_id")VALUES($8, lures.lure_id)
//     INSERT INTO "lures_water_temp" ("water_temp_id", "lures_id")VALUES($9, lures.lure_id)
//     INSERT INTO "lures_habitat" ("habitat_id", "lures_id")VALUES($10, lures.lure_id)
//     ;`;
//         console.log(now);
//     pool.query(insertLure, [
//         req.body.name,
//         req.body.image, 
//         req.body.description, 
//         req.user.id,
//         req.body.type
//         // req.body.speed,
//         // req.body.depth,
//         // req.body.clarity,
//         // req.body.temp,
//         // req.body.area
//     ])
//     .then(result => {
//     res.sendStatus(201);
//     })
//     .catch(err => {
//         console.log(err);
//         res.sendStatus(500)
//     })