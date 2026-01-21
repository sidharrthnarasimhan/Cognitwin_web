import { motion } from 'framer-motion';
import { Database, Brain, Server, Cpu, Sparkles, ArrowDown, Zap } from 'lucide-react';

const DataFlowDiagram = () => {
  const nodeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15
      }
    })
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.15 + 0.3
      }
    })
  };

  const topNodes = [
    {
      icon: Database,
      title: 'Data Sources',
      subtitle: 'Shopify • Stripe • QuickBooks',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/50'
    },
    {
      icon: Server,
      title: 'Digital Twin',
      subtitle: 'Graph-based business model',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/50'
    }
  ];

  const parallelNodes = [
    {
      icon: Cpu,
      title: 'ML Forecasting',
      subtitle: 'Prophet + LSTM models',
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/50'
    },
    {
      icon: Brain,
      title: 'AI Council',
      subtitle: '6 specialized agents',
      gradient: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/50'
    }
  ];

  const bottomNode = {
    icon: Sparkles,
    title: 'Actionable Insights',
    subtitle: 'Recommendations & optimizations',
    gradient: 'from-indigo-500 to-blue-500',
    glow: 'shadow-indigo-500/50'
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          The Power of{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Integrated Intelligence
          </span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400"
        >
          Data flows through our AI-powered platform in real-time
        </motion.p>
      </div>

      {/* Flow Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Flow Layout */}
        <div className="relative py-8">
          {/* Top Nodes - Data Sources & Digital Twin */}
          <div className="flex flex-col items-center gap-6 mb-8">
            {topNodes.map((node, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={nodeVariants}
                whileHover={{ scale: 1.02 }}
                className={`
                  relative w-full max-w-lg
                  bg-gradient-to-br ${node.gradient}
                  rounded-2xl p-6 shadow-2xl ${node.glow}
                  backdrop-blur-sm cursor-pointer
                  transition-all duration-300
                `}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                    <node.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{node.title}</h4>
                    <p className="text-sm text-white/80">{node.subtitle}</p>
                  </div>
                </div>

                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/10"
                  animate={{
                    opacity: [0, 0.2, 0],
                    scale: [0.95, 1, 0.95]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Animated connector from Digital Twin splitting to parallel nodes */}
          <div className="flex justify-center mb-8">
            <div className="relative w-px h-12">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-transparent" />
              <motion.div
                className="absolute w-2 h-2 bg-purple-400 rounded-full left-1/2 -translate-x-1/2"
                animate={{
                  top: ['0%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </div>

          {/* Split indicator */}
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>
          </div>

          {/* Parallel Processing Nodes - ML Forecasting & AI Council */}
          <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto px-4">
            {parallelNodes.map((node, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Animated connector down to node */}
                <div className="relative w-px h-8 mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-b ${index === 0 ? 'from-green-500/50' : 'from-orange-500/50'} to-transparent`} />
                  <motion.div
                    className={`absolute w-2 h-2 ${index === 0 ? 'bg-green-400' : 'bg-orange-400'} rounded-full left-1/2 -translate-x-1/2`}
                    animate={{
                      top: ['0%', '100%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.3
                    }}
                  />
                </div>

                <motion.div
                  custom={index + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={nodeVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`
                    relative w-full
                    bg-gradient-to-br ${node.gradient}
                    rounded-2xl p-6 shadow-2xl ${node.glow}
                    backdrop-blur-sm cursor-pointer
                    transition-all duration-300
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                      <node.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{node.title}</h4>
                      <p className="text-sm text-white/80">{node.subtitle}</p>
                    </div>
                  </div>

                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-white/10"
                    animate={{
                      opacity: [0, 0.2, 0],
                      scale: [0.95, 1, 0.95]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (index + 2) * 0.3
                    }}
                  />

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-1 h-1 bg-white/60 rounded-full"
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                </motion.div>

                {/* Animated connector down from node */}
                <div className="relative w-px h-8 mt-4">
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${index === 0 ? 'to-green-500/50' : 'to-orange-500/50'}`} />
                  <motion.div
                    className={`absolute w-2 h-2 ${index === 0 ? 'bg-green-400' : 'bg-orange-400'} rounded-full left-1/2 -translate-x-1/2`}
                    animate={{
                      top: ['0%', '100%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.5 + index * 0.3
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Merge indicator */}
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            </div>
          </div>

          {/* Animated connector merging to insights */}
          <div className="flex justify-center mb-8">
            <div className="relative w-px h-12">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500" />
              <motion.div
                className="absolute w-2 h-2 bg-indigo-400 rounded-full left-1/2 -translate-x-1/2"
                animate={{
                  top: ['0%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
              />
            </div>
          </div>

          {/* Bottom Node - Actionable Insights */}
          <div className="flex justify-center">
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={nodeVariants}
              whileHover={{ scale: 1.05 }}
              className={`
                relative w-full max-w-lg
                bg-gradient-to-br ${bottomNode.gradient}
                rounded-2xl p-6 shadow-2xl ${bottomNode.glow}
                backdrop-blur-sm cursor-pointer
                transition-all duration-300
              `}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                  <bottomNode.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1">{bottomNode.title}</h4>
                  <p className="text-sm text-white/80">{bottomNode.subtitle}</p>
                </div>
              </div>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/10"
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
              />

              {/* Sparkle effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${30 + i * 20}%`,
                    right: `${20 + i * 15}%`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
      >
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            &lt;2s
          </div>
          <div className="text-slate-400 text-sm">End-to-end Processing</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Real-time
          </div>
          <div className="text-slate-400 text-sm">Data Sync</div>
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
