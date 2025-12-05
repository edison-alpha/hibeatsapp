const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Main Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">
          Create,{' '}
          <span className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full text-black text-4xl md:text-5xl font-bold mx-2 align-middle">
            O
          </span>{' '}
          wn song, Trade,<br />
          Share and Earn
        </h2>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gradient-to-br from-teal-900/40 to-teal-700/20 rounded-3xl p-8 border border-teal-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">One platform for boost engagement your song</h3>
              <div className="bg-black/40 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <img 
                  src="/assets/phone.png" 
                  alt="Platform" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
