import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/ProjectData';
import { useThemeContext } from '@/ThemeContext';
import imagePlaceHolder from '@/assets/images/placeholders/place-holder-image.jpeg';

const ProjectDetailCard = () => {
  const { darkMode } = useThemeContext();
  const { id } = useParams();
  const projectId: string | undefined = (id ? parseInt(id, 10) : undefined) + "";
  const project = projects.find((proj) => proj.id.toString() === projectId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lastDirection, setLastDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    setZoom(1);
  }, []);

  const handlePrevImage = () => {
    setLastDirection(-1);
    setSelectedImage(selectedImage - 1);
  };

  const handleNextImage = () => {
    setLastDirection(1);
    setSelectedImage(selectedImage + 1);
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(z + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((z) => Math.max(z - 0.5, 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, closeFullscreen]);

  useEffect(() => {
    thumbnailRefs.current[selectedImage]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }, [selectedImage]);

  if (!project) {
    return (
      <div className={`min-h-screen ${darkMode ? ' text-white' : ' text-gray-900'}`}>
        <div className="max-w-7xl mx-auto p-6">
          <Link to="/projects" className={`inline-flex items-center gap-2 mb-6 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <p className={`text-center text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Project not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <div className={`rounded-2xl overflow-hidden border-2 hover:shadow-blue-200 shadow-lg duration-300 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="relative aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    draggable={false}
                    loading='lazy'
                    src={project.images.length > 0 ? project.images[selectedImage] : imagePlaceHolder}
                    alt={`${project.name} - Image ${selectedImage + 1}`}
                    className="w-full h-full object-contain absolute inset-0"
                    onDoubleClick={openFullscreen}
                    initial={{ x: lastDirection > 0 ? 60 : -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: lastDirection > 0 ? -60 : 60, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                  />
                </AnimatePresence>
                {project.images.length > 1 && (
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {selectedImage + 1} / {project.images.length}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); openFullscreen(); }}
                      className="bg-black/70 hover:bg-black/80 text-white p-1.5 rounded-full transition-all backdrop-blur-sm cursor-pointer"
                      title="Fullscreen"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                    </button>
                  </div>
                )}
                {!project.images.length || project.images.length === 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); openFullscreen(); }}
                    className="absolute top-3 right-3 bg-black/70 hover:bg-black/80 text-white p-1.5 rounded-full transition-all backdrop-blur-sm cursor-pointer"
                    title="Fullscreen"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </button>
                )}
                                {selectedImage > 0 && (
                  <button
                    onClick={() => handlePrevImage()}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all backdrop-blur-sm cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                {selectedImage < project.images.length - 1 && (
                  <button
                    onClick={() => handleNextImage()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all backdrop-blur-sm cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>

              {project.images.length > 1 && (
                <div className={'p-3'}>
                  <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    {project.images.map((image, index) => (
                      <motion.button
                        key={index}
                        ref={(el) => { thumbnailRefs.current[index] = el; }}
                        onClick={() => setSelectedImage(index)}
                        className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 snap-start ${selectedImage === index
                          ? darkMode ? 'border-blue-500' : 'border-blue-600'
                          : darkMode ? 'border-gray-600 opacity-60 hover:opacity-100' : 'border-gray-300 opacity-60 hover:opacity-100'
                          }`}
                        style={{ width: '80px', height: '54px' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img draggable={false} loading='lazy' src={image} alt={`Thumbnail ${index + 1}`} className={`w-full h-full object-cover ${darkMode ? 'bg-gray-700' : 'bg-white'}`} />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {project.features && project.features.length > 0 && (
              <div className={`rounded-2xl p-6 border-2 shadow-xl ${darkMode ? ' border-gray-700' : ' border-gray-200'}`}>
                <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Key Features
                </h2>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-md">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.challenges && (
              <div className={`rounded-2xl p-5 border-2 shadow-xl ${darkMode ? ' border-gray-700' : ' border-gray-200'}`}>
                <h2 className={`text-lg font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Challenges
                </h2>
                <p className={`text-md leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.challenges}
                </p>
              </div>
            )}
            {project.outcome && (
              <div className={`rounded-2xl p-5 border-2 shadow-xl ${darkMode ? ' border-gray-700' : ' border-gray-200'}`}>
                <h2 className={`text-lg font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Outcome
                </h2>
                <p className={`text-md leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.outcome}
                </p>
              </div>
            )}
          </div>
          <div className="lg:col-span-2 space-y-4 lg:sticky lg:top-6 lg:self-start">
            <div className={`rounded-2xl p-6 border-2 shadow-xl ${darkMode ? ' border-gray-700' : ' border-gray-200'}`}>
              <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.name}
              </h1>
              <div>
                <p className={`text-md leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
              </div>
            </div>
            <div className={`rounded-2xl p-6 border-2 shadow-xl ${darkMode ? ' border-gray-700' : ' border-gray-200'}`}>
              <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${darkMode ? 'bg-green-900/30 text-green-300 border-green-700' : 'bg-green-50 text-green-700 border-green-200'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className={`rounded-2xl p-6 border-2 shadow-xl ${darkMode ? ' border-gray-700' : ' border-gray-200'}`}>
              <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.codelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-medium transition-all ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                    } text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source Code
                </a>
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-medium transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    } shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close button */}
            <button
              onClick={(e) => { e.stopPropagation(); closeFullscreen(); }}
              className="absolute top-4 right-4 z-[60] bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all cursor-pointer"
              title="Close fullscreen (ESC)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full text-sm font-medium z-[60]">
              {selectedImage + 1} / {project.images.length}
            </div>

            {/* Main image */}
            <div className="relative w-full h-full flex items-center justify-center p-16" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  draggable={false}
                  src={project.images[selectedImage]}
                  alt={`${project.name} - Fullscreen ${selectedImage + 1}`}
                  className="max-w-full max-h-full object-contain"
                  style={{ transform: `scale(${zoom})` }}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ x: lastDirection > 0 ? 80 : -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: lastDirection > 0 ? -80 : 80, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Previous button */}
              {selectedImage > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-[60] cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next button */}
              {selectedImage < project.images.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-[60] cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 rounded-full p-1 z-[70]">
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                disabled={zoom <= 1}
                className="bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-all disabled:opacity-30"
                title="Zoom out"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35M8 11h6" />
                </svg>
              </button>
              <span className="text-white text-xs px-2 min-w-[40px] text-center">{Math.round(zoom * 100)}%</span>
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                disabled={zoom >= 3}
                className="bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-all disabled:opacity-30"
                title="Zoom in"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                </svg>
              </button>
            </div>

            {/* Thumbnail strip */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-xl overflow-x-auto max-w-[90vw] z-[60]">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-blue-500 opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                    style={{ width: '60px', height: '40px' }}
                  >
                    <img
                      draggable={false}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetailCard;