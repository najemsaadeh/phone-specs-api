export default async function handler(req, res) {
  const path = req.query.path;
  const url = `https://mobile-phone-specs-database.p.rapidapi.com/${path}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '43a7e199bbmsh352e9bc0c3acaaap15259ejsn269a8ac851e8',
        'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com',
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'حدث خطأ أثناء جلب البيانات', details: err.message });
  }
}