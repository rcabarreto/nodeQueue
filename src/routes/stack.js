import express from 'express';
import Stack from '../lib/stack';

const router = express.Router();

router.post('/add', (req, res) => {
  const json = req.body;
  const stack = new Stack();
  stack.push(json);
  res.status(200).json(json);
});


router.get('/remove', (req, res) => {
  const stack = new Stack();
  if (stack.count() > 0) {
    res.status(200).json(stack.pop());
  } else {
    res.status(204).json();
  }
});


router.get('/list', (req, res) => {
  const stack = new Stack();
  res.status(200).json(stack.list());
});


export default router;
