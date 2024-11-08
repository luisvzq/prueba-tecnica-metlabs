const HeroBanner = () => {
  return (
    <div className="relative w-full h-[354px] mx-auto rounded-xl overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #7953DC 0%, #3AAAD9 100%)",
        }}
      >
        <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10">
          <h1
            className="font-raleway text-[45px] font-bold mb-6 text-left text-white"
            style={{
              lineHeight: "45px",
              letterSpacing: "-0.04em",
            }}
          >
            Membresía
            <br />
            Premium
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
            <button
              className="font-inter text-[13px] font-semibold bg-[rgba(255,255,255,0.08)] text-white w-[132px] h-[37px] rounded-[40px] inline-flex items-center justify-center whitespace-nowrap"
              style={{
                padding: "12px 30px",
                gap: "10px",
              }}
            >
              Suscribirse
            </button>
            <button
              className="font-inter text-[13px] font-semibold bg-transparent text-white w-[168px] h-[37px] rounded-[40px] inline-flex items-center justify-center border border-white whitespace-nowrap"
              style={{
                padding: "12px 30px",
                gap: "10px",
              }}
            >
              Descubrir planes
            </button>
          </div>
        </div>

        <div className="absolute top-0 right-0 h-full hero-image-container">
          <img
            src="/heroimage.svg"
            alt="Hero"
            className="h-[354px] w-auto object-contain transition-all duration-300 hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
