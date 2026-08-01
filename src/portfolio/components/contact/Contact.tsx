import { MessageSquareMore } from 'lucide-react';
import ContactCard from './components/ContactCard';
import LazySection from '../../../components/LazySection';
import SectionIcon from '@/components/SectionIcon';
import { contacts } from '../../../data/ContactData';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  return (
    <section id='contact' className='py-6 md:py-10 relative overflow-hidden'>
      <LazySection>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-end justify-center gap-3 mb-3">
              <SectionIcon icon={MessageSquareMore} />
              <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900" }`}
              >
                Get In{" "}
                <span
                  className={darkMode ? "text-blue-400" : "text-blue-600"}
                >
                  Touch
                </span>
              </h2>
            </div>
            <p className={`text-base max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600" }`} >
              Let's connect! Feel free to reach out through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {contacts.map((info, index) => (
              <ContactCard darkMode={darkMode} key={index} info={info} index={index} />
            ))}
          </div>

        </div>
      </LazySection>
    </section>
  );
};

export default Contact;