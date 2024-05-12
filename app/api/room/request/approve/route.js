import { db } from "../../../..//firebase";
import { doc, setDoc, collection, addDoc, updateDoc } from "firebase/firestore";

export async function POST(req, res) {
  if (req.method === "POST") {
    try {
        const data = await req.json();
        console.log("Request body:", data);
        const { id, status } = data;

      const requestRef = doc(db, "request", id);

      await updateDoc(requestRef, {
        status: status,
      });

      return new Response("Amjilttai nemegdlee!", {
        status: 200,
      });
    } catch (error) {
      console.error("Failed to post data:", error);
      return new Response("Dotood asuudal!", {
        status: 500,
      });
    }
  } else {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
}
