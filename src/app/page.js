"use client";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const countryCodes = [
  { code: '+1', name: 'United States' },
  { code: '+1', name: 'Canada' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+61', name: 'Australia' },
  { code: '+64', name: 'New Zealand' },
  { code: '+91', name: 'India' },
  { code: '+86', name: 'China' },
  { code: '+81', name: 'Japan' },
  { code: '+82', name: 'South Korea' },
  { code: '+33', name: 'France' },
  { code: '+49', name: 'Germany' },
  { code: '+39', name: 'Italy' },
  { code: '+34', name: 'Spain' },
  { code: '+7', name: 'Russia' },
  { code: '+55', name: 'Brazil' },
  { code: '+52', name: 'Mexico' },
  { code: '+971', name: 'UAE' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+65', name: 'Singapore' },
  { code: '+60', name: 'Malaysia' },
  { code: '+62', name: 'Indonesia' },
  { code: '+63', name: 'Philippines' },
  { code: '+84', name: 'Vietnam' },
  { code: '+66', name: 'Thailand' },
  { code: '+95', name: 'Myanmar' },
  { code: '+880', name: 'Bangladesh' },
  { code: '+94', name: 'Sri Lanka' },
  { code: '+977', name: 'Nepal' },
  { code: '+92', name: 'Pakistan' },
  { code: '+98', name: 'Iran' },
  { code: '+90', name: 'Turkey' },
  { code: '+20', name: 'Egypt' },
  { code: '+27', name: 'South Africa' },
  { code: '+234', name: 'Nigeria' },
  { code: '+254', name: 'Kenya' },
  { code: '+351', name: 'Portugal' },
  { code: '+31', name: 'Netherlands' },
  { code: '+32', name: 'Belgium' },
  { code: '+41', name: 'Switzerland' },
  { code: '+46', name: 'Sweden' },
  { code: '+47', name: 'Norway' },
  { code: '+358', name: 'Finland' },
  { code: '+45', name: 'Denmark' },
  { code: '+353', name: 'Ireland' },
  { code: '+54', name: 'Argentina' },
  { code: '+56', name: 'Chile' },
  { code: '+57', name: 'Colombia' },
  { code: '+51', name: 'Peru' },
  { code: '+593', name: 'Ecuador' },
  { code: '+507', name: 'Panama' },
  { code: '+506', name: 'Costa Rica' },
  { code: '+502', name: 'Guatemala' },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    amount: '',
    message: '',
    isAnonymous: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+91',
          amount: '',
          message: '',
          isAnonymous: false
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      <Head>
        <title>गौशाला दान - श्री गढ़शंकर गौशाला</title>
        <meta name="description" content="गढ़शंकर गौशाला के लिए दान करें और गौ माता की सेवा में सहयोग करें" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <motion.header 
        className="bg-white shadow-sm sticky top-0 z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">श्री गढ़शंकर गौशाला</h1>
        </div>
      </motion.header>

      <main className="max-w-4xl mx-auto py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="w-full md:w-1/2 bg-gradient-to-br from-yellow-600 to-green-500 p-6 md:p-8 text-white"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">गौ सेवा है सबसे बड़ी सेवा</h2>
              <p className="mb-4 md:mb-6 text-yellow-100 text-sm md:text-base">
                आपका दान हमारी गौशाला को गढ़शंकर में गायों की देखभाल, उनके भोजन और चिकित्सा की व्यवस्था करने में सहायता करेगा।
              </p>

              <div className="flex justify-center mb-4">
                <div className="bg-white/20 w-full h-48 rounded-lg flex items-center justify-center text-yellow-100 relative overflow-hidden">
                  <Image 
                    src="/cute-little-baby-krishna-with-sacred-cow-hindu-god-lord-krishna-with-calf-krishna-janmashtami_1131930-26519.png" 
                    alt="प्यारा छोटा बाल कृष्ण पवित्र गाय के साथ" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg"
                  />
                </div>
              </div>

              <motion.div className="space-y-2 md:space-y-3">
                {[
                  "100% धन गौ सेवा में उपयोग",
                  "व्हाट्सएप पर तुरंत पुष्टि",
                  "सुरक्षित दान प्रणाली",
                  "प्रत्येक दान की रसीद"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="mr-2 mt-0.5 bg-green-300 rounded-full p-1 flex-shrink-0">
                      <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs md:text-sm">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-yellow-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-xs text-yellow-200 italic">
                  &ldquo;गाय हमारी माता है, इसकी सेवा करना हमारा कर्तव्य है।&rdquo;
                </p>
              </motion.div>
            </motion.div>

            {/* Donation Form */}
            <motion.div 
              className="w-full md:w-1/2 p-6 md:p-8"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h3 
                className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center text-gray-700"
                animate={{ 
                  scale: isHovered ? 1.02 : 1,
                  color: isHovered ? '#92400e' : '#374151'
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                गौ कल्याण हेतु दान करें
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {!formData.isAnonymous && (
                  <Input 
                    label="पूरा नाम" 
                    name="name" 
                    type="text" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required={!formData.isAnonymous}
                  />
                )}
                
                <div className="flex items-center">
                  <input
                    id="anonymous"
                    name="isAnonymous"
                    type="checkbox"
                    checked={formData.isAnonymous}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="ml-2 block text-xs md:text-sm text-gray-700">
                    गुप्त दान करें (नाम &apos;गुप्त सेवक&apos; दिखेगा)
                  </label>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    फोन नंबर <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-1/3 md:w-1/4 px-2 py-2 text-xs md:text-sm border border-gray-300 rounded-l-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code + c.name} value={c.code}>
                          {c.code} {c.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 px-3 py-2 text-xs md:text-sm border-t border-r border-b border-gray-300 rounded-r-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                      placeholder="9876543210"
                    />
                  </div>
                </div>
                
                <Input 
                  label="दान राशि (₹)" 
                  name="amount" 
                  type="number" 
                  value={formData.amount} 
                  onChange={handleChange} 
                  required 
                  min="1"
                  placeholder="500"
                />
                
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    संदेश (वैकल्पिक)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                    placeholder="गौ माता की सेवा के लिए यह छोटा सा योगदान"
                  ></textarea>
                </div>
                
                <div className="pt-1 md:pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 md:py-3 px-4 rounded-md text-white font-medium transition-all ${isSubmitting ? 'bg-yellow-400' : 'bg-yellow-600 hover:bg-yellow-700'} focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 text-sm md:text-base flex items-center justify-center`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        प्रक्रिया कर रहे हैं...
                      </>
                    ) : isSuccess ? (
                      'दान सफल! धन्यवाद'
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        दान करें
                      </>
                    )}
                  </button>
                </div>
                
                {isSuccess && (
                  <div className="p-2 md:p-3 bg-green-100 text-green-700 rounded-md text-xs md:text-sm text-center">
                    गौ माता की सेवा में आपके योगदान के लिए धन्यवाद! जय गौ माता 🙏
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <motion.footer 
        className="bg-white border-t mt-6 md:mt-8 py-3 md:py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} श्री गढ़शंकर गौशाला. सर्वाधिकार सुरक्षित.
          <div className="mt-1">
            <a href="#" className="text-yellow-600 hover:text-yellow-700 mx-2">हमारे बारे में</a>
            <a href="#" className="text-yellow-600 hover:text-yellow-700 mx-2">संपर्क करें</a>
            <a href="#" className="text-yellow-600 hover:text-yellow-700 mx-2">80G प्रमाणपत्र</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

function Input({ label, name, type, value, onChange, required, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
        className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
      />
    </div>
  );
}