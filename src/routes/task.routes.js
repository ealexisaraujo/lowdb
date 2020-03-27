const { Router } = require('express');
const router = Router();
const { getTasks } = require('../controllers/task.controller');

router.get('/tasks', getTasks);
router.get('/tasks/:id, ');
router.post('/tasks, ');
router.put('/tasks/:id, ');
router.delete('/tasks/:id, ');

module.exports = router;
