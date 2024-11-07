const HeroBanner = () => {
  return (
    <div className="relative w-[1360] h-[354px] bg-gradient-to-r from-[#7953DC] to-[#3AAAD9] rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between px-12">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-6">
            Membresía
            <br />
            Premium
          </h1>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
              Suscribirse
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors">
              Descubrir planes
            </button>
          </div>
        </div>
        <div className="relative w-1/2 h-full">
          <img
            src="/heroimage.svg"
            alt="Premium"
            className="absolute bottom-0 right-0 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
