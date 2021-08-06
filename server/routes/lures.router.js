const express = require('express');
const pool = require ('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET all lures into library
router.get('/', (req,res) => {
    const query = `SELECT * FROM "lures" ORDER BY "id" ASC;`;
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
    const insertLure = `INSERT INTO "lures" ("name", "image", "description", "user_id")
    VALUES ($1, $2, $3, $4);`;

    pool.query(insertLure, [req.body.name, req.body.image, req.body.description, req.body.user.id])
    .then(results => {
        console.log('Add lure for logged in user Successful');
        res.sendStatus(201);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
});