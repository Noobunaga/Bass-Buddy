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

router.get('/details/:lureId', (req, res) => {
    const lureId = req.params.lureId;
    const queryText = `
        SELECT *
        FROM "lures"
        WHERE "id" = $1;
        `;
    pool.query(queryText, [lureId])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('ERROR: Get lure details', err);
            res.sendStatus(500)
        })
});

module.exports = router;