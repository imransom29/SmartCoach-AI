import { Award, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1613922508791-b6e237e4d051?auto=format&fit=crop&q=80")',
          filter: 'brightness(0.2)'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Elevate Your Game
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 font-inter mb-8"
          >
            "Champions aren't made in the gym. They are made by the things they choose to do when no one is watching."
          </motion.p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Target className="w-12 h-12 text-blue-500 mb-4" />,
              title: "Personalized Training",
              description: "One-on-one sessions tailored to your skill level and goals",
              delay: 0.2
            },
            {
              icon: <Zap className="w-12 h-12 text-blue-500 mb-4" />,
              title: "Expert Techniques",
              description: "Master footwork, smashing, and defensive skills",
              delay: 0.4
            },
            {
              icon: <Award className="w-12 h-12 text-blue-500 mb-4" />,
              title: "Professional Experience",
              description: "Learn from national-level expertise and proven strategies",
              delay: 0.6
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-montserrat font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;