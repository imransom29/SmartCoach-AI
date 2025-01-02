import { Award, Target, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Elevate Your Game
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-inter mb-8">
            "Champions aren't made in the gym. They are made by the things they choose to do when no one is watching."
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <Target className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-montserrat font-semibold mb-2">Personalized Training</h3>
            <p className="text-gray-400">One-on-one sessions tailored to your skill level and goals</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <Zap className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-montserrat font-semibold mb-2">Expert Techniques</h3>
            <p className="text-gray-400">Master footwork, smashing, and defensive skills</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <Award className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-montserrat font-semibold mb-2">Professional Experience</h3>
            <p className="text-gray-400">Learn from national-level expertise and proven strategies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;