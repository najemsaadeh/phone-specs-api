export default async function handler(req, res) {
  const { phone1, phone2 } = req.query;

  if (!phone1 || !phone2) {
    return res.status(400).json({ error: 'يجب تحديد كل من phone1 و phone2' });
  }

  const baseURL = 'https://mobile-phone-specs-database.p.rapidapi.com/phones/';
  const headers = {
    'X-RapidAPI-Key': '43a7e199bbmsh352e9bc0c3acaaap15259ejsn269a8ac851e8',
    'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com',
  };

  try {
    const [res1, res2] = await Promise.all([
      fetch(baseURL + phone1, { headers }),
      fetch(baseURL + phone2, { headers }),
    ]);

    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

    res.status(200).json({ phone1: data1, phone2: data2 });
  } catch (err) {
    res.status(500).json({ error: 'حدث خطأ أثناء جلب البيانات', details: err.message });
  }
}
