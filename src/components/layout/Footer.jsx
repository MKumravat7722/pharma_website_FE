const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Brew Café. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-400">
          Fresh coffee • Cozy vibes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
