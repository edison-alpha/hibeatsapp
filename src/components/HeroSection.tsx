const HeroSection = () => {
  return (
    <WavyLime
      containerClassName="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      className="max-w-5xl mx-auto text-center"
    >
      <div className="relative z-10">
        <p className="text-gray-400 text-sm mb-6 tracking-wide">
          Music empowerment through our ecosystem
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          The Firt{' '}
          <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full text-black text-5xl md:text-6xl font-bold mx-2 align-middle">
            O
          </span>{' '}
          SocialFi for AI<br />
          Music Creation
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          powered by <span className="text-white font-bold">SUNTIER</span>
        </p>

        <a href="https://hibeats.xyz/feed" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-accent transition-all hover:scale-105 mb-20 inline-block">
          Join Beta!
        </a>

        {/* Leaderboard */}
        <div className="relative max-w-sm mx-auto">
          <p className="text-gray-400 text-sm mb-6">Your Leaderboard</p>

          <div className="bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-800/60 rounded-2xl p-3 aspect-square flex items-center justify-center border border-gray-700/30">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3">
              <button className="w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700 transition border border-gray-700">
                <span className="text-xl">←</span>
              </button>
              <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-accent transition font-bold">
                <span className="text-xl">▶</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </WavyLime>
  )
}

export default HeroSection
