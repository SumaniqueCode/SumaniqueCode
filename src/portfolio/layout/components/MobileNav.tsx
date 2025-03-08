interface mobileNavProps{
    mobileMenuOpen:boolean;
    setMobileMenuOpen:(value:boolean)=>void;
}
const MobileNav = ({mobileMenuOpen, setMobileMenuOpen}:mobileNavProps) => {
  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>    
    </>
  )
}

export default MobileNav