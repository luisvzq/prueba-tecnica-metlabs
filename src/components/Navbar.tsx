import { useEffect, useState } from "react";
import type { NavbarProps } from "../types/models";

const Navbar = ({ currentUser }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Node) {
        const menu = document.querySelector(".dropdown-menu");
        const avatarButton = document.querySelector(".avatar-button");
        if (
          menu &&
          !menu.contains(event.target) &&
          avatarButton &&
          !avatarButton.contains(event.target)
        ) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar-container flex justify-between items-center px-10 py-4 bg-[#0D0D12]">
      <div className="navbar-logo-container flex items-center gap-2 mr-4">
        <img
          src="/polygon-logo.png"
          alt="Polygon"
          className="navbar-logo w-[145px] h-[37px] object-cover"
        />
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-6">
        <button
          className="h-[39px] text-white bg-[#54399F85] hover:bg-[#54399F] transition-all flex items-center justify-center gap-2 rounded-full sm:rounded-[20px] w-[39px] sm:w-[101px] px-2 sm:px-4 py-1"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path d="M5.5 9H8.5V14.25H5.5V9Z" fill="#D0C0FF" />
            <path
              d="M13.3151 6.13502L7.53259 0.225023C7.46286 0.154726 7.37991 0.0989305 7.28852 0.060854C7.19712 0.0227775 7.0991 0.00317383 7.00009 0.00317383C6.90108 0.00317383 6.80305 0.0227775 6.71165 0.060854C6.62026 0.0989305 6.53731 0.154726 6.46759 0.225023L0.685086 6.14252C0.545164 6.28357 0.434657 6.45102 0.359983 6.63513C0.285308 6.81924 0.247953 7.01635 0.250087 7.21502V13.5C0.249505 13.884 0.396166 14.2535 0.659867 14.5325C0.923568 14.8116 1.28423 14.9789 1.66759 15H4.00009V8.25002C4.00009 8.05111 4.0791 7.86034 4.21976 7.71969C4.36041 7.57904 4.55117 7.50002 4.75009 7.50002H9.25009C9.449 7.50002 9.63976 7.57904 9.78042 7.71969C9.92107 7.86034 10.0001 8.05111 10.0001 8.25002V15H12.3326C12.7159 14.9789 13.0766 14.8116 13.3403 14.5325C13.604 14.2535 13.7507 13.884 13.7501 13.5V7.21502C13.7507 6.81222 13.5947 6.42496 13.3151 6.13502Z"
              fill="#D0C0FF"
            />
          </svg>
          <span
            style={{ fontWeight: 600, lineHeight: "14.4px" }}
            className="hidden sm:inline font-raleway text-left text-[#D0C0FF] text-[15px]"
          >
            Home
          </span>
        </button>

        <button
          className="text-gray-400 hover:text-white transition-colors font-raleway text-left text-[13px] sm:text-[15px]"
          style={{ fontWeight: 600, lineHeight: "14.4px" }}
          onClick={() => setIsMenuOpen(false)}
        >
          Descubrir
        </button>

        <button
          className="text-gray-400 hover:text-white transition-colors font-raleway text-left text-[13px] sm:text-[15px]"
          style={{ fontWeight: 600, lineHeight: "14.4px" }}
          onClick={() => setIsMenuOpen(false)}
        >
          Favoritos
        </button>

        <button
          className="px-4 py-2 bg-[#7855DC] text-white rounded-full hover:bg-purple-700 transition-all font-raleway text-left whitespace-nowrap"
          onClick={() => setIsMenuOpen(false)}
        >
          <span
            className="text-[13px] sm:text-[15px]"
            style={{ fontWeight: 600, lineHeight: "14.4px" }}
          >
            Subir Obra
          </span>
        </button>

        {currentUser ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative avatar-button"
          >
            <div className="w-[38px] h-[38px] rounded-full overflow-hidden flex items-center justify-center bg-gray-800">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/placeholder/38/38";
                }}
              />
            </div>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl z-50 dropdown-menu">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 font-raleway text-left"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "14.4px",
                  }}
                >
                  Perfil
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 font-raleway text-left"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "14.4px",
                  }}
                >
                  Configuración
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 font-raleway text-left"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "14.4px",
                  }}
                >
                  Cerrar Sesión
                </a>
              </div>
            )}
          </button>
        ) : (
          <button
            className="text-white hover:text-purple-400 transition-all font-raleway text-left"
            style={{ fontSize: "15px", fontWeight: 600, lineHeight: "14.4px" }}
          >
            Iniciar Sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
