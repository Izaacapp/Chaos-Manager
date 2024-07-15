import { Router } from 'express';
import { exportToExcel } from '../services/exportService.js';

const router = Router();

let tabData = [
  { id: 1, url: 'https://example.com', title: 'Example', category: 'Example', summary: 'Example summary' },
  // Add more tab data as needed
];

router.get('/tabs', (req, res) => {
  res.json(tabData);
});

router.get('/enhanced-tabs', (req, res) => {
  // AI-enhanced tab data logic
  const enhancedData = enhanceTabs(tabData);
  res.json(enhancedData);
});

router.get('/export', (req, res) => {
  const workbook = exportToExcel(tabData);
  workbook.xlsx.write(res).then(() => {
    res.status(200).end();
  });
});

const enhanceTabs = (tabs) => {
  // AI logic to enhance and group tabs
  return tabs; // Modify this with actual enhancement logic
};

export default router;
