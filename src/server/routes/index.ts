import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../pages/SalesDashboard', 'index.html'));
});

export { router };