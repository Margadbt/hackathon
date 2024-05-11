import { db } from '../../../firebase'; 
import { collection, getDocs } from 'firebase/firestore';


export async function GET(req, res) {
  if (req.method === 'GET') {
    try {
      const eventCollection = collection(db, "event");

      // Retrieve all documents from the 'event' collection
      const querySnapshot = await getDocs(eventCollection);

      // Extract data from each document
      const eventData = [];
      querySnapshot.forEach((doc) => {
        eventData.push(doc.data());
      });

      // Return the array of event data as JSON response
      return new Response(JSON.stringify(eventData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return new Response("Failed to fetch event data", {
        status: 500,
      });
    }
  } else {
    return new Response("Method Not Allowed", {
      status: 405,
    });
  }
}
