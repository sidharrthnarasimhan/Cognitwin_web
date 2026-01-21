import { motion } from 'framer-motion';
import { Database, Brain, TrendingUp, Zap, Target, Sparkles, ArrowRight, Server, Cloud, Cpu } from 'lucide-react';

const DataFlowDiagram = () => {
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const flowNodes = [
    {
      id: 'data',
      icon: Database,
      title: 'Connect Data',
      subtitle: 'Shopify, Stripe, QuickBooks',
      color: 'from-blue-500 to-cyan-500',
      position: 'top-0 left-1/2 -translate-x-1/2'
    },
    {
      id: 'twin',
      icon: Server,
      title: 'Digital Twin',
      subtitle: 'Business model graph',
      color: 'from-purple-500 to-pink-500',
      position: 'top-32 left-0'
    },
    {
      id: 'ml',
      icon: Cpu,
      title: 'ML Forecasting',
      subtitle: 'Prophet + LSTM',
      color: 'from-green-500 to-emerald-500',
      position: 'top-32 right-0'
    },
    {
      id: 'council',
      icon: Brain,
      title: 'AI Council',
      subtitle: '6 expert agents',
      color: 'from-orange-500 to-red-500',
      position: 'top-64 left-1/4 -translate-x-1/2'
    },
    {
      id: 'insights',
      icon: Sparkles,
      title: 'Insights',
      subtitle: 'Actionable recommendations',
      color: 'from-indigo-500 to-blue-500',
      position: 'top-64 right-1/4 translate-x-1/2'
    }
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          The Power of <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Integrated Intelligence</span>
        </h3>
        <p className="text-xl text-slate-400">Data flows through our AI-powered platform in real-time</p>
      </div>

      {/* Diagram Container */}
      <div className="relative h-[500px] md:h-[600px]">
        {/* Animated Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"
          variants={pulseVariants}
          animate="pulse"
        />

        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Data to Twin */}
          <motion.path
            d="M 400 80 L 200 200"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            strokeDasharray="5,5"
          />

          {/* Data to ML */}
          <motion.path
            d="M 400 80 L 600 200"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            strokeDasharray="5,5"
          />

          {/* Twin to Council */}
          <motion.path
            d="M 200 250 L 300 400"
            stroke="url(#gradient2)"
            strokeWidth="3"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            strokeDasharray="5,5"
            transition={{ delay: 0.5 }}
          />

          {/* ML to Insights */}
          <motion.path
            d="M 600 250 L 500 400"
            stroke="url(#gradient2)"
            strokeWidth="3"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            strokeDasharray="5,5"
            transition={{ delay: 0.5 }}
          />

          {/* Council to Insights */}
          <motion.path
            d="M 350 450 L 450 450"
            stroke="url(#gradient2)"
            strokeWidth="3"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            strokeDasharray="5,5"
            transition={{ delay: 1 }}
          />

          {/* Animated Flow Particles */}
          <motion.circle
            r="4"
            fill="#3b82f6"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              offsetDistance: ['0%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0
            }}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path="M 400 80 L 200 200"
            />
          </motion.circle>

          <motion.circle
            r="4"
            fill="#8b5cf6"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              offsetDistance: ['0%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5
            }}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path="M 400 80 L 600 200"
            />
          </motion.circle>
        </svg>

        {/* Nodes */}
        <div className="relative h-full">
          {/* Data Source Node (Top Center) */}
          <motion.div
            className="absolute top-8 left-1/2 -translate-x-1/2"
            variants={nodeVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-2xl shadow-blue-500/50 min-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-6 h-6 text-white" />
                <h4 className="text-white font-bold">Connect Data</h4>
              </div>
              <p className="text-blue-100 text-sm">Shopify, Stripe, QuickBooks</p>
            </div>
          </motion.div>

          {/* Digital Twin Node (Left) */}
          <motion.div
            className="absolute top-40 left-8"
            variants={nodeVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl shadow-purple-500/50 min-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <Server className="w-6 h-6 text-white" />
                <h4 className="text-white font-bold">Digital Twin</h4>
              </div>
              <p className="text-purple-100 text-sm">Business graph model</p>
            </div>
          </motion.div>

          {/* ML Forecasting Node (Right) */}
          <motion.div
            className="absolute top-40 right-8"
            variants={nodeVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 shadow-2xl shadow-green-500/50 min-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-6 h-6 text-white" />
                <h4 className="text-white font-bold">ML Forecasting</h4>
              </div>
              <p className="text-green-100 text-sm">Prophet + LSTM</p>
            </div>
          </motion.div>

          {/* AI Council Node (Bottom Left) */}
          <motion.div
            className="absolute top-[400px] left-16"
            variants={nodeVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 shadow-2xl shadow-orange-500/50 min-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-6 h-6 text-white" />
                <h4 className="text-white font-bold">AI Council</h4>
              </div>
              <p className="text-orange-100 text-sm">6 expert agents</p>
            </div>
          </motion.div>

          {/* Insights Node (Bottom Right) */}
          <motion.div
            className="absolute top-[400px] right-16"
            variants={nodeVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-6 shadow-2xl shadow-indigo-500/50 min-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6 text-white" />
                <h4 className="text-white font-bold">Insights</h4>
              </div>
              <p className="text-indigo-100 text-sm">Actionable recommendations</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Flow Stats */}
      <motion.div
        className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            &lt;2s
          </div>
          <div className="text-slate-400 text-sm">Dashboard Load Time</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Real-time
          </div>
          <div className="text-slate-400 text-sm">Data Synchronization</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
            99.9%
          </div>
          <div className="text-slate-400 text-sm">Uptime SLA</div>
        </div>
      </motion.div>
    </div>
  );
};

export default DataFlowDiagram;
