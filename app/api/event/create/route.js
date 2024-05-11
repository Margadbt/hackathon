// pages/api/postData.js
import { postDataToFirebase } from '../../utils/firebase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const response = await postDataToFirebase(data);
      res.status(200).json({ message: 'Data posted successfully', data: response });
    } catch (error) {
      console.error('Failed to post data:', error);
      res.status(500).json({ error: 'Failed to post data to Firebase' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
