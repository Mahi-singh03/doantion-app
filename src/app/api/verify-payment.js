import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Head from 'next/head';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export async function getServerSideProps(context) {
  const { id, token } = context.query;

  try {
    const docRef = doc(db, 'donations', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists() || docSnap.data().token !== token) {
      return { notFound: true };
    }

    return {
      props: {
        donation: { id, ...docSnap.data() },
      },
    };
  } catch (error) {
    console.error('Error fetching donation:', error);
    return { notFound: true };
  }
}

export default function Receipt({ donation }) {
  const router = useRouter();

  if (!donation) {
    return <div className="min-h-screen flex items-center justify-center">Receipt not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Head>
        <title>Donation Receipt - Charity Foundation</title>
        <meta name="description" content="Your donation receipt" />
      </Head>

      <motion.div
        className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Donation Receipt
          </h1>
          <div className="space-y-4 text-gray-700">
            <p><strong>Receipt ID:</strong> {donation.receiptId}</p>
            <p><strong>Name:</strong> {donation.name}</p>
            <p><strong>Amount:</strong> ₹{donation.amount}</p>
            <p><strong>Date:</strong> {new Date(donation.date).toLocaleString()}</p>
            <p><strong>Transaction ID:</strong> {donation.transactionId}</p>
            <p><strong>Message:</strong> {donation.message}</p>
            <p className="italic">
              This donation is eligible for tax deduction under Section 80G.
            </p>
            <p className="text-center text-sm text-gray-500">
              Thank you for supporting Charity Foundation!
            </p>
          </div>
          <button
            onClick={() => router.push('/')}
            className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}