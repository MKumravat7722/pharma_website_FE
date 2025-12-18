export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-semibold">MediCure Pharma</p>
        <p className="text-sm mt-2">
          WHO-GMP Certified | For Healthcare Professionals Only
        </p>
        <p className="text-xs mt-4">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
