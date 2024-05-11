import { db } from '@/app/firebase'; 
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function GET(req, { params }) {
  try {
    const { event_id } = params; // Extracting the event_id from the params object
    
    // Reference to the 'event' collection in Firestore
    const eventCollectionRef = collection(db, 'event');
    
    // Query for documents where 'event_id' field matches the provided event_id
    const q = query(eventCollectionRef, where('event_id', '==', event_id));
    
    // Retrieve matching documents
    const querySnapshot = await getDocs(q);

    // Check if any documents match the query
    if (querySnapshot.empty) {
      return new Response(`Event with ID ${event_id} not found`, {
        status: 404,
      });
    }

    // Extract the data from the first matching document (assuming event_id is unique)
    const eventData = querySnapshot.docs[0].data();

    // Return the document data
    return new Response(JSON.stringify({ eventData }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return new Response('Failed to fetch event data', {
      status: 500,
    });
  }
}
