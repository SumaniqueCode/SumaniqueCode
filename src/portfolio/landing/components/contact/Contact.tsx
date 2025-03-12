import { Mail, Phone, MapPin, Linkedin, Instagram, } from 'lucide-react';
import ContactCard from './components/ContactCard';


interface contactProps {
  darkMode: boolean,
}
const Contact = ({ darkMode }: contactProps) => {

  const contactInfo = [
    {
      type: 'LinkedIn',
      value: 'suman-regmi-0b2440244',
      icon: <Linkedin className="w-6 h-6" />,
      link: 'https://linkedin.com/in/suman-regmi-0b2440244',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    // {
    //   type: 'Twitter',
    //   value: '@regmisuman_2000',
    //   icon: <Twitter className="w-6 h-6" />,
    //   link: 'https://twitter.com/regmisuman_2000',
    //   color: 'text-sky-500',
    //   bgColor: 'bg-sky-50',
    //   hoverColor: 'hover:bg-sky-100'
    // },
    {
      type: 'Instagram',
      value: '@regmisuman_2000',
      icon: <Instagram className="w-6 h-6" />,
      link: 'https://instagram.com/regmisuman_2000',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      type: 'Email',
      value: 'helpmeforhelp@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      link: 'mailto:helpmeforhelp@gmail.com',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      type: 'Phone',
      value: '+977 9800000000',
      icon: <Phone className="w-6 h-6" />,
      link: 'tel:+9779800000000',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      type: 'Location',
      value: 'Itahari, Nepal',
      icon: <MapPin className="w-6 h-6" />,
      link: 'https://maps.google.com/?q=Itahari,Nepal',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    }
  ];



  return (
    <div id='contact'>
      <div className="mx-auto">
        <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <ContactCard darkMode={darkMode} key={index} info={info} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Feel free to reach out through any of these channels. I'll get back to you as soon as possible!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;