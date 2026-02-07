const LavaBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-slate-900"></div>

      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>

      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-3000"></div>

      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-5000"></div>

      <div className="absolute inset-0 bg-darker/40 backdrop-blur-sm"></div>
    </div>
  );
};

export default LavaBackground;
