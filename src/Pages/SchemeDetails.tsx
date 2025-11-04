import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SchemeDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  if (!title) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">योजना सापडली नाही</h1>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            मागे जा
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-blue-800 mb-6 font-martel"
        >
          {decodeURIComponent(title)}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose lg:prose-xl font-martel"
        >
          <p className="text-gray-700">
            {/* Content will be expanded based on scheme details */}
            ही योजना महाराष्ट्र शासनाच्या महाआमृत कार्यक्रमाचा एक महत्वपूर्ण भाग आहे. अधिक माहितीसाठी कृपया संपर्क साधा.
          </p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate('/')}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-martel"
        >
          मागे जा
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SchemeDetails;