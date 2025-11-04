import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const tabData = [
  {
    id: 'ebook',
    title: 'ई-बुक',
    content: 'महाआमृत योजनेची सविस्तर माहिती येथे उपलब्ध आहे. आमच्या ई-बुक मध्ये सर्व योजनांची तपशीलवार माहिती आणि मार्गदर्शक तत्त्वे समाविष्ट आहेत.'
  },
  {
    id: 'circular',
    title: 'परिपत्रक',
    content: 'महाआमृत योजनेची सर्व अधिकृत परिपत्रके आणि महत्त्वाची दस्तऐवज येथे उपलब्ध आहेत.'
  },
  {
    id: 'feedback',
    title: 'Feedback / अभिप्राय',
    content: 'आपला अभिप्राय आमच्यासाठी महत्त्वाचा आहे. योजनेविषयी आपले मत, सूचना किंवा तक्रारी येथे नोंदवा.'
  },
  {
    id: 'rti',
    title: 'RTI',
    content: 'माहितीच्या अधिकारांतर्गत (RTI) माहिती मिळवण्यासाठी आवश्यक प्रक्रिया आणि फॉर्म येथे उपलब्ध आहेत.'
  },
  {
    id: 'gr',
    title: 'Govt. Resolutions',
    content: 'महाआमृत योजनेशी संबंधित सर्व शासकीय निर्णय (GR) येथे पाहता येतील.'
  }
];

const TabDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tabInfo = tabData.find(tab => tab.id === id);

  if (!tabInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Page Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back
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
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-blue-800 mb-6 font-martel"
        >
          {tabInfo.title}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose lg:prose-xl font-martel"
        >
          <p className="text-gray-700">{tabInfo.content}</p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate('/')}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TabDetails;