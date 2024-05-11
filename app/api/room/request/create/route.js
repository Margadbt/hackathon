import { db } from '@/app/firebase'; 
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';

export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      const postData = await req.json();

      const eventCollection = collection(db, "request");

      await addDoc(eventCollection, {
        date: postData.date,
        description: postData.description,
        people_count: postData.people_count,
        phone_num_one: postData.phone_num_two,
        phone_num_two: postData.phone_num_two,
        purpose: postData.purpose,
        room: postData.room,

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
