import { db } from '../../../firebase'; 
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import {v4 as uuidv4} from 'uuid'

export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      const postData = await req.json();

      const eventCollection = collection(db, "event");

      await addDoc(eventCollection, {
        date: postData.date,
        description: postData.description,
        image_url: postData.image_url,
        location: postData.location,
        name: postData.name,
        organization: postData.organization
      })

      

      return new Response("Amjilttai nemegdlee!", {
        status: 200,
      })
    } catch (error) {
      console.error('Failed to post data:', error);
      return new Response("Dotood asuudal!", {
        status: 500,
      })
    }
  } else {
    return new Response("Method not allowed", {
        status: 405,
      })
  }
}
