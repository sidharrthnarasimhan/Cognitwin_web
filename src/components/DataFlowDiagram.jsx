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

  const nodes = [
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
      glow: 'shadow-purple-500/50',
      split: true
    },
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
      glow: 'shadow-orange-500/50',
      merge: true
    },
    {
      icon: Sparkles,
      title: 'Actionable Insights',
      subtitle: 'Recommendations & optimizations',
      gradient: 'from-indigo-500 to-blue-500',
      glow: 'shadow-indigo-500/50'
    }
  ];

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
      <div className="relative">
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

        {/* Nodes Flow */}
        <div className="relative flex flex-col items-center gap-0 py-8">
          {nodes.map((node, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Node Card */}
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={nodeVariants}
                className={`
                  relative w-full max-w-md
                  bg-gradient-to-br ${node.gradient}
                  rounded-2xl p-6 shadow-2xl ${node.glow}
                  backdrop-blur-sm
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

              {/* Arrow (except for last node) */}
              {index < nodes.length - 1 && (
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={arrowVariants}
                  className="flex flex-col items-center my-4"
                >
                  {/* Animated dots flowing down */}
                  <div className="relative h-16 w-1 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full left-1/2 -translate-x-1/2"
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
                  <ArrowDown className="w-6 h-6 text-slate-600 mt-1" />
                </motion.div>
              )}
            </div>
          ))}
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
