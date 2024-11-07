import { useState } from "react";

interface NavbarProps {
  currentUser?: {
    name: string;
    avatar: string;
  };
}

const Navbar = ({ currentUser }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-container flex justify-between items-center px-[40px] py-4 bg-[#0D0D12]">
      <div className="navbar-logo-container">
        <div className="flex items-center gap-2 mr-4">
          <img
            src="/polygon-logo.png"
            alt="Polygon"
            className="navbar-logo w-[145px] h-[37px] object-cover"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          className={`text-white hover:text-purple-400 transition-colors`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </button>
        <button
          className="text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Descubrir
        </button>
        <button
          className="text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Favoritos
        </button>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Subir Obra
        </button>
        {currentUser ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative"
          >
            <div className="w-[38px] h-[38px] rounded-full overflow-hidden flex items-center justify-center bg-gray-800">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/default-avatar.png";
                }}
              />
            </div>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Perfil
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Configuración
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Cerrar Sesión
                </a>
              </div>
            )}
          </button>
        ) : (
          <button className="text-white hover:text-purple-400">
            Iniciar Sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
