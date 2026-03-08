  import { Mail, MapPin, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

  export const ContactData = [
    {
      type: 'Github',
      value: 'SumaniqueCode',
      icon: Github,
      link: 'https://github.com/sumaniquecode',
      gradient: 'bg-gradient-to-br from-gray-700 to-gray-900',
      color: '#333333',
      displayValue: '@SumaniqueCode'
    },
    {
      type: 'LinkedIn',
      value: 'suman-regmi-0b2440244',
      icon: Linkedin,
      link: 'https://linkedin.com/in/suman-regmi-0b2440244',
      gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
      color: '#0A66C2',
      displayValue: 'Suman Regmi'
    },
    {
      type: 'Instagram',
      value: '@regmisuman_2000',
      icon: Instagram,
      link: 'https://instagram.com/regmisuman_2000',
      gradient: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500',
      color: '#E4405F',
      displayValue: '@regmisuman_2000'
    },
    {
      type: 'YouTube',
      value: '@SumaniqueCode',
      icon: Youtube,
      link: 'https://www.youtube.com/@sumaniquecode',
      gradient: 'bg-gradient-to-br from-red-600 to-red-700',
      color: '#FF0000',
      displayValue: '@SumaniqueCode'
    },
    {
      type: 'Email',
      value: 'helpmeforhelp@gmail.com',
      icon: Mail,
      link: 'mailto:helpmeforhelp@gmail.com',
      gradient: 'bg-gradient-to-br from-green-600 to-emerald-700',
      color: '#34A853',
      displayValue: 'helpmeforhelp@gmail.com'
    },
    {
      type: 'Location',
      value: 'Itahari, Nepal',
      icon: MapPin,
      link: 'https://maps.google.com/?q=Itahari,Nepal',
      gradient: 'bg-gradient-to-br from-[#4285F4] via-[#34A853] to-yellow-600',
      color: '#4285F4',
      displayValue: 'Itahari, Nepal'
    }
  ];