import { motion } from 'framer-motion';
import { Brain, TrendingUp, Sparkles, Target, Users, Zap, Building2, ShoppingCart, UtensilsCrossed, Briefcase, Stethoscope, Truck, Code, ArrowRight, CheckCircle2, BarChart3, Layers, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50 z-50">
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
              CogniTwin builds a living digital twin of your business. Predict outcomes, simulate decisions, and get AI-powered insights from our multi-agent council.
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
              className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">≥85%</div>
                <div className="text-slate-400">Forecast Accuracy</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">&lt;10s</div>
                <div className="text-slate-400">Simulation Speed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">6</div>
                <div className="text-slate-400">Industry Modules</div>
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

      {/* Core Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-400">Everything you need to simulate and optimize your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Advanced Forecasting',
                desc: 'Predict revenue, demand, churn, inventory needs, and staffing requirements with ML-powered models',
                features: ['Prophet & PyTorch models', 'Real-time updates', '85%+ accuracy']
              },
              {
                icon: Target,
                title: 'Scenario Simulation',
                desc: 'Test pricing changes, staffing levels, inventory strategies, and marketing campaigns before committing',
                features: ['What-if analysis', 'Risk assessment', 'Instant results']
              },
              {
                icon: Brain,
                title: 'AI Council Insights',
                desc: 'Get multi-perspective analysis from specialized AI agents: Analyst, Strategist, Risk Officer & more',
                features: ['6 expert agents', 'Confidence scoring', 'Explainable AI']
              },
              {
                icon: Layers,
                title: 'Business Modeling',
                desc: 'Automatic creation of revenue, cost, customer, and operational models tailored to your industry',
                features: ['Auto-generated models', 'Industry-specific', 'Continuously learning']
              },
              {
                icon: BarChart3,
                title: 'Synthetic Data',
                desc: 'Generate realistic customer personas, transactions, and demand curves for testing and planning',
                features: ['CTGAN powered', 'Privacy-safe', 'Unlimited scenarios']
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                desc: 'SOC 2 aligned with 99.9% uptime, encryption at rest and in transit, and full RBAC support',
                features: ['SOC 2 compliance', 'Audit logs', 'SSO ready']
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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

      {/* AI Council Section */}
      <section id="council" className="py-20 px-4 sm:px-6 lg:px-8">
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
