import { motion } from 'framer-motion';
import { Brain, TrendingUp, Sparkles, Target, Users, Zap, Building2, ShoppingCart, UtensilsCrossed, Briefcase, Stethoscope, Truck, Code, ArrowRight, CheckCircle2, BarChart3, Layers, Shield, Rocket, AlertTriangle, LineChart, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataFlowDiagram from '@/components/DataFlowDiagram';

const Landing = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Early Development Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          <Rocket className="w-4 h-4" />
          <span>Early in Development • Exciting updates coming soon • Stay tuned!</span>
          <Rocket className="w-4 h-4" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CogniTwin
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#industries" className="text-slate-300 hover:text-white transition-colors">Industries</a>
              <a href="#council" className="text-slate-300 hover:text-white transition-colors">AI Council</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Powered by Multi-Agent AI</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Your Business,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perfectly Simulated
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              Forecasting • Anomaly Detection • Cognitive Agents • Operational Optimization
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Multi-industry Digital Business Twin Platform with AI-powered insights. Connect your data and let 6 specialized AI agents analyze your business in real-time.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6">
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">85-90%</div>
                <div className="text-slate-400 text-sm">Forecast Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">&lt;10s</div>
                <div className="text-slate-400 text-sm">Simulation Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">6</div>
                <div className="text-slate-400 text-sm">AI Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">99.9%</div>
                <div className="text-slate-400 text-sm">Uptime SLA</div>
              </div>
            </motion.div>

            {/* Investor/Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-6 mt-12 text-slate-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC 2 Aligned</span>
              </div>
              <div className="w-px h-4 bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Multi-Tenant Secure</span>
              </div>
              <div className="w-px h-4 bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Real-time Insights</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-slate-400">Transform data into decisions in minutes</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: Layers, title: 'Connect Data', desc: 'Link Shopify, Stripe, QuickBooks & more' },
              { icon: Brain, title: 'Generate Twin', desc: 'AI builds your business model' },
              { icon: TrendingUp, title: 'Forecast', desc: 'Predict revenue, demand, churn' },
              { icon: Target, title: 'Simulate', desc: 'Test "What if?" scenarios' },
              { icon: Sparkles, title: 'Get Insights', desc: 'Multi-agent AI council advises' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <DataFlowDiagram />
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-400">Everything you need to simulate and optimize your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'AI Forecasting',
                desc: 'Predict revenue, demand, churn with Prophet + LSTM models. 85-90% accuracy out of the box.',
                features: ['Prophet & PyTorch models', 'Multi-horizon predictions', 'Ensemble learning'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: AlertTriangle,
                title: 'Anomaly Detection',
                desc: 'Real-time pattern deviation alerts with industry-specific thresholds and context.',
                features: ['Isolation Forest baseline', 'Industry thresholds', 'Root cause analysis'],
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: Brain,
                title: 'Cognitive Agents',
                desc: 'Multi-agent AI Council with 6 specialized agents debating and synthesizing insights.',
                features: ['6 expert agents', 'Multi-agent debate', 'Confidence scoring'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Settings,
                title: 'Optimization',
                desc: 'Industry-specific operational recommendations for inventory, pricing, and staffing.',
                features: ['Industry playbooks', 'Constraint solving', 'Actionable insights'],
                gradient: 'from-green-500 to-emerald-500'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Feature Detail Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Your Competitive Moat</h3>
                  <p className="text-slate-400">What makes CogniTwin different</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300"><strong className="text-white">Multi-Agent Orchestration:</strong> 1,500+ LOC of custom agent debate logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300"><strong className="text-white">Industry Playbooks:</strong> 300+ domain expertise rules across 6 industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300"><strong className="text-white">Integrated Intelligence:</strong> End-to-end workflow from data to insights</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise-Ready</h3>
                  <p className="text-slate-400">Built for scale and security</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300"><strong className="text-white">99.9% Uptime SLA:</strong> Production-grade infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300"><strong className="text-white">SOC 2 Aligned:</strong> Enterprise security & compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300"><strong className="text-white">Multi-Tenant:</strong> Complete data isolation per customer</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Your Industry</h2>
            <p className="text-xl text-slate-400">Specialized modules with industry-specific intelligence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShoppingCart, name: 'E-commerce', desc: 'Inventory optimization, demand forecasting, pricing strategies' },
              { icon: UtensilsCrossed, name: 'Restaurants', desc: 'Staff scheduling, ingredient planning, menu optimization' },
              { icon: Briefcase, name: 'Agencies', desc: 'Resource allocation, project profitability, capacity planning' },
              { icon: Stethoscope, name: 'Clinics', desc: 'Appointment optimization, staffing levels, patient flow' },
              { icon: Truck, name: 'Logistics', desc: 'Route optimization, fleet management, delivery forecasting' },
              { icon: Code, name: 'SaaS', desc: 'Churn prediction, growth modeling, pricing experiments' }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all cursor-pointer group"
              >
                <industry.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-sm">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-400">Scale through software, not services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 mb-6">Perfect for small businesses getting started with AI insights</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Open-source forecasting models',
                  'Basic anomaly detection',
                  'LLM Council (generic prompts)',
                  'Rule-based optimization',
                  'Email support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-slate-700 hover:bg-slate-600">Start Free Trial</Button>
            </motion.div>

            {/* Professional Tier - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-2 border-blue-500 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$799</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 mb-6">Industry-specific intelligence for growing businesses</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Starter, plus:',
                  'Industry-specific playbooks ⭐',
                  'Enhanced Industry Expert agent',
                  'Custom anomaly thresholds',
                  'Priority support',
                  'Dedicated success manager'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Free Trial
              </Button>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$2,999</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 mb-6">Advanced features and dedicated support for scale</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Professional, plus:',
                  'Per-customer fine-tuning',
                  'Custom integrations',
                  'Advanced optimization',
                  'SLA guarantees',
                  'Optional: Custom forecasting models'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Contact Sales
              </Button>
            </motion.div>
          </div>

          <p className="text-center text-slate-400 mt-8">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* AI Council Section */}
      <section id="council" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Unique to CogniTwin</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The AI Council</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Multi-agent reasoning that reduces hallucinations and provides trustworthy, multi-perspective insights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { role: 'Analyst', focus: 'Data-driven insights', color: 'from-blue-500 to-cyan-500' },
                { role: 'Operator', focus: 'Practical execution', color: 'from-green-500 to-emerald-500' },
                { role: 'Strategist', focus: 'Long-term planning', color: 'from-purple-500 to-pink-500' },
                { role: 'Risk Officer', focus: 'Risk assessment', color: 'from-red-500 to-orange-500' },
                { role: 'Industry Expert', focus: 'Domain knowledge', color: 'from-yellow-500 to-amber-500' },
                { role: 'Synthesizer', focus: 'Final recommendations', color: 'from-indigo-500 to-blue-500' }
              ].map((agent, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${agent.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{agent.role}</h3>
                  <p className="text-slate-400 text-sm">{agent.focus}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-300 mb-6">Each decision analyzed from multiple expert perspectives with confidence scoring</p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Learn More About AI Council
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to See Your Business in a New Light?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join forward-thinking businesses using CogniTwin to predict, simulate, and optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CogniTwin
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Making predictive, simulation-driven decision-making accessible to every business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 CogniTwin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
