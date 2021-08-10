const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    const queryText = `SELECT "habitat".type
    FROM "habitat"
    JOIN "lures_habitats" ON "habitat".id = "lures_habitats".habitat_id
    JOIN "lures" ON "lures".id = "lures_habitats".lures_id
    WHERE "lures".id = $1;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error', err);
        res.sendStatus(500)
    })
});

router.get('/all', (req, res) => {
    const queryText = `SELECT * FROM "habitat";`
    pool.query(queryText, [req.params.id])
    .then(results => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error getting habitats', err);
        res.sendStatus(500)
    })
});

module.exports = router;