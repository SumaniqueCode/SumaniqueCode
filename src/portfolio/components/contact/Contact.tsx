import ContactCard from './components/ContactCard';
import LazySection from '../../../global/LazySection';
import { contacts } from '../../../data/ContactData';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  return (
    <section id='contact' className='relative overflow-hidden'>
      <LazySection>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-4 md:mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900" }`} style={{ animation: "fadeInDown 0.6s ease-out" }}
            >
              Get In{" "}
              <span
                className={`bg-gradient-to-r ${darkMode
                  ? "from-blue-400 to-purple-400"
                  : "from-blue-600 to-purple-600"
                  } bg-clip-text text-transparent`}
              >
                Touch
              </span>
            </h2>
            <p className={`text-base max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600" }`} style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }} >
              Let's connect! Feel free to reach out through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 max-w-7xl mx-auto">
            {contacts.map((info, index) => (
              <ContactCard darkMode={darkMode} key={index} info={info} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center" style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }} >
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Available for freelance opportunities and collaborations
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-green-500 animate-pulse`}></div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Usually responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </LazySection>
    </section>
  );
};

export default Contact;