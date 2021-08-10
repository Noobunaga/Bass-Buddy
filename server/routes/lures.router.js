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
    const insertLure = `
        INSERT INTO "lures" ("name", "image", "description", "user_id")
        VALUES ($1, $2, $3, $4)
        RETURNING "id";`;

    pool.query(insertLure, [req.body.name, req.body.image, req.body.description, req.body.user.id])
    .then(result => {
        console.log('Add lure for logged in user Successful');
        const createLureId = result.rows[0].id

        const insertHabitatQuery = `
        INSERT INTO "lures_habitats" ("lures_id", "habitat_id")
        VALUES ($1, $2);`
        pool.query(insertHabitatQuery, [createLureId, req.body.habitat_id])
        .then(result => {
        res.sendStatus(201);
    })
    //second query catch
    .catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
    //first query catch
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
// router.put('/:id'. rejectUnauthenticated, (req, res) => {
//     const queryText = `
//         UPDATE "lures"
//         SET "description" = $1
//         WHERE "user_id" = $3 AND "id" = $2;`;
//     pool.query(queryText, [req.body.description, req.user.id, req.params.id])
//     .then(result => {
//         console.log('Item updated');
//         res.sendStatus(201)
//     })
//     .catch(error => {
//         console.log('Error updating', error);
//         res.sendStatus(500)
//     })
// });

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