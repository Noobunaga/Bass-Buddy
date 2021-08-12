const express = require('express');
const pool = require ('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


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
    console.log(req.body);
    // const insertLure = `
    //     INSERT INTO "lures" ("name", "image", "description", "user_id")
    //     VALUES ($1, $2, $3, $4)
    //     RETURNING "id(";`;
    const now = new Date();
    const insertLure = `
    WITH lures as (
        INSERT INTO "lures" ("name", "image", "description", "user_id")
        VALUES ($1, $2, $3, $4)
        RETURNING "id" as lure_id
    )

    INSERT INTO "lures_weather" ('weather_id', 'lures_id')VALUES($5, lure_id)
    INSERT INTO "lures_wind" ('wind_id', 'lures_id')VALUES($6, lure_id)
    INSERT INTO "lures_water_depth" ('water_depth_id', 'lures_id')VALUES($7, lure_id)
    INSERT INTO "lures_water_clarity" ('water_clarity_id', 'lures_id')VALUES($8, lure_id)
    INSERT INTO "lures_water_temp" ('water_temp_id', 'lures_id')VALUES($9, lure_id)
    INSERT INTO "lures_habitat" ('habitat_id', 'lures_id')VALUES($10, lure_id)
    ;`
        console.log(now);
    pool.query(insertLure, [
        req.body.name,
        req.body.image, 
        req.body.description, 
        req.user.id,
        req.body.type,
        req.body.speed,
        req.body.depth,
        req.body.clarity,
        req.body.temp,
        req.body.area
    ])
    .then(result => {
    res.sendStatus(201);
    })
    .catch(err => {
        console.log(err);
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
    const queryText = `
        UPDATE "lures"
        SET "description" = $1
        WHERE "user_id" = $3 AND "id" = $2;`;
    pool.query(queryText, [req.body.description, req.user.id, req.params.id])
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

module.exports = router;