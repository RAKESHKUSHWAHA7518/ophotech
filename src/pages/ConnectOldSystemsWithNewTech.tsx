import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Link as LinkIcon, CheckCircle, Target, Zap, Award } from 'lucide-react';

const ConnectOldSystemsWithNewTech: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Title */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                <LinkIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Connect Old Systems with New Tech
                </h1>
                <p className="text-lg text-gray-300 mt-2">OphoTech-Specific Case Study</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl max-w-md w-full">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Connect Old Systems with New Tech"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Case Study: Integrating Legacy ERP with Cloud CRM for Seamless Sales Operations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto"></div>
          </div>

          {/* Client Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Client</h3>
              <p className="text-gray-300">Industrial Equipment Manufacturer</p>
              <p className="text-primary-400 text-sm">(15+ factories across South Asia, using Oracle E-Business Suite ERP since 2006)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Sales teams used a modern cloud CRM (Salesforce), but it had no real-time sync with the legacy ERP system. This caused duplicate data entry, inconsistent order tracking, billing mismatches, and delayed customer responses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech implemented a secure middleware-based integration between the legacy Oracle ERP and Salesforce CRM using custom APIs and ETL pipelines—without replacing either system.
              </p>
            </div>
          </div>

          {/* Enablement Process Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Enablement Process</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-400 hidden lg:block"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <h4 className="text-xl font-bold text-white">System Audit</h4>
                    </div>
                    <p className="text-gray-300">Mapped ERP data objects (orders, pricing, customer master) with CRM workflows</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <h4 className="text-xl font-bold text-white">Middleware Setup</h4>
                    </div>
                    <p className="text-gray-300">Built an integration bridge using OphoTech's pre-built connectors and custom adapters</p>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>

                {/* Step 3 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <h4 className="text-xl font-bold text-white">Data Harmonization</h4>
                    </div>
                    <p className="text-gray-300">Resolved data conflicts and schema mismatches between old ERP and modern CRM</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>

                {/* Step 4 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <h4 className="text-xl font-bold text-white">Process Automation</h4>
                    </div>
                    <p className="text-gray-300">Enabled automatic order updates, pricing sync, and invoice visibility in both systems</p>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>

                {/* Step 5 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <h4 className="text-xl font-bold text-white">Real-Time Dashboards</h4>
                    </div>
                    <p className="text-gray-300">Delivered a unified sales dashboard pulling live data from both platforms</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Business Impact</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">95%</div>
                <p className="text-gray-300">reduction in manual data entry (20+ hours/week saved per sales rep)</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">30%</div>
                <p className="text-gray-300">faster order-to-cash cycle due to real-time updates</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">Zero</div>
                <p className="text-gray-300">duplicate records across systems after 60 days of live deployment</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">100%</div>
                <p className="text-gray-300">sales team adoption due to zero-disruption UI (used existing CRM interface)</p>
              </div>
            </div>
          </div>

          {/* Website-Ready Metrics Summary */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Website-Ready Metrics Summary</h3>
            
            {/* Mobile-First Responsive Design */}
            <div className="space-y-6 lg:hidden">
              {/* Mobile Cards */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Manual Data Entry</span>
                  <span className="text-primary-400 font-bold">95% reduced</span>
                </div>
                <div className="text-sm text-gray-400">Before Integration: High → After OphoTech Integration: 95% reduced</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Order-to-Cash Time</span>
                  <span className="text-primary-400 font-bold">{"<10 days"}</span>
                </div>
                <div className="text-sm text-gray-400">Before Integration: Avg 14 days → After OphoTech Integration: {"<10 days"}</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">System Discrepancies</span>
                  <span className="text-primary-400 font-bold">Zero</span>
                </div>
                <div className="text-sm text-gray-400">Before Integration: Frequent → After OphoTech Integration: Zero</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Sales Team Satisfaction (Internal Survey)</span>
                  <span className="text-primary-400 font-bold">91%</span>
                </div>
                <div className="text-sm text-gray-400">Before Integration: 52% → After OphoTech Integration: 91%</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Impact Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before Integration</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After OphoTech Integration</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Manual Data Entry</td>
                    <td className="px-6 py-4 text-gray-300">High</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">95% reduced</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Order-to-Cash Time</td>
                    <td className="px-6 py-4 text-gray-300">Avg 14 days</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">{"<10 days"}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">System Discrepancies</td>
                    <td className="px-6 py-4 text-gray-300">Frequent</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">Zero</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Sales Team Satisfaction (Internal Survey)</td>
                    <td className="px-6 py-4 text-gray-300">52%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">91%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Value */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Strategic Value for Clients</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Preserve investments in legacy systems while embracing modern tools</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Improve data consistency and business agility</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Avoid expensive and risky system replacements</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Create a <strong>"single source of truth"</strong> across business units</p>
              </div>
            </div>
          </div>

          {/* Suggested Tagline */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
              <Award className="w-6 h-6 text-primary-400" />
              <span className="text-white font-semibold">"Modernize Without Disruption. Let Your Old Systems Talk to Today's Tools."</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectOldSystemsWithNewTech;