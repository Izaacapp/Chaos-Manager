import ExcelJS from 'exceljs';

export const exportToExcel = (data) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Tab Data');

  worksheet.columns = [
    { header: 'URL', key: 'url', width: 30 },
    { header: 'Title', key: 'title', width: 30 },
    { header: 'Category', key: 'category', width: 20 },
    { header: 'Summary', key: 'summary', width: 50 },
  ];

  data.forEach(item => {
    worksheet.addRow({
      url: item.url,
      title: item.title,
      category: item.category,
      summary: item.summary,
    });
  });

  return workbook;
};
