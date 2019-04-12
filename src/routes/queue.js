import express from 'express';
import Queue from '../lib/queue';

const router = express.Router();

router.post('/add', (req, res) => {
  const json = req.body;
  const queue = new Queue();
  queue.add(json);
  res.status(200).json(json);
});


router.get('/remove', (req, res) => {
  const queue = new Queue();
  if (queue.count() > 0) {
    res.status(200).json(queue.remove());
  } else {
    res.status(204).json();
  }
});


router.get('/list', (req, res) => {
  const queue = new Queue();
  res.status(200).json(queue.list());
});


export default router;
