import { db } from "../../../../../app/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const elementRef = doc(db, "event", id);

    const elementDoc = await getDoc(elementRef);
    const data = elementDoc.data();

    return new Response(JSON.stringify({ id: elementDoc.id, ...data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return new Response("Failed to fetch event data", {
      status: 500,
    });
  }
}
