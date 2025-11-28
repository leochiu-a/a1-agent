import React, { useState, useEffect } from "react";
import {
  BrainCircuit,
  Eraser,
  Shuffle,
  Hourglass,
  Star,
  Code,
  Database,
  Server,
  Cpu,
  X,
  Check,
  Activity,
  Thermometer,
  AlertTriangle,
  Trophy,
  ThumbsDown,
  Trash2,
  Ban,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Abstract grid background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block animate-bounce mb-6">
            <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Version 0.0.0 (Alpha-Alpha)
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            A1 Agent
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 font-light mb-10 max-w-3xl mx-auto">
            We promise no intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Start Doing Nothing
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 rounded-full border border-gray-700 bg-neutral-900 text-white font-medium hover:bg-neutral-800 hover:border-gray-500 transition-all"
            >
              See Expensive Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Core Non-Features */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Groundbreaking Non-Features</h2>
            <p className="text-gray-400 text-lg">
              Powered by our proprietary Null-Processing Units™
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500/50 transition-all duration-500 hover:bg-neutral-900">
              <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eraser className="h-7 w-7 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Unlearning</h3>
              <p className="text-gray-400 leading-relaxed">
                A1 utilizes the latest non-neural network technology to{" "}
                <strong className="text-white">actively forget</strong> all user-provided data. Your
                privacy is safe because we literally cannot comprehend it.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all duration-500 hover:bg-neutral-900">
              <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shuffle className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Predictive Backlash</h3>
              <p className="text-gray-400 leading-relaxed">
                Our system analyzes global patterns to output suggestions completely{" "}
                <strong className="text-white">unrelated</strong> to facts. It's time to experience
                true randomness and chaos in your workflow.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-red-500/50 transition-all duration-500 hover:bg-neutral-900">
              <div className="h-14 w-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Hourglass className="h-7 w-7 text-red-400 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Efficiency Degradation</h3>
              <p className="text-gray-400 leading-relaxed">
                A1 aims to transform complex tasks into extremely simple yet time-consuming
                operations. <strong className="text-white">Decrease</strong> your productivity,{" "}
                <strong className="text-white">increase</strong> your pointless waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Live System Health Monitor */}
      <section className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-4">
                <Activity className="text-green-500 h-10 w-10 animate-pulse" />
                Live System Health
              </h2>
              <p className="text-gray-400 text-lg">
                Monitoring our total incompetence in real-time.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="h-3 w-3 rounded-full bg-red-500 animate-ping"></div>
              <span className="text-red-500 font-mono text-sm">CRITICAL FAILURE IMMINENT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric 1 */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-400 font-mono text-sm">CPU LOAD</h3>
                <Cpu className="h-5 w-5 text-gray-600" />
              </div>
              <div className="text-4xl font-mono font-bold text-white mb-2">0.00%</div>
              <div className="text-xs text-green-500 flex items-center gap-1">
                <Check className="h-3 w-3" />
                Ideally Inactive (We didn't turn it on)
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-400 font-mono text-sm">MEMORY LEAK</h3>
                <Database className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-4xl font-mono font-bold text-white mb-2">128 PB</div>
              <div className="text-xs text-red-500 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                Spilling onto the floor
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-400 font-mono text-sm">SERVER TEMP</h3>
                <Thermometer className="h-5 w-5 text-orange-500" />
              </div>
              <div className="text-4xl font-mono font-bold text-white mb-2">-273°C</div>
              <div className="text-xs text-blue-400 flex items-center gap-1">
                Absolute Zero (Frozen Solid)
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-400 font-mono text-sm">BUGS FOUND</h3>
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
              <BugCounter />
            </div>
          </div>
        </div>
      </section>

      {/* Unfair Comparison Table */}
      <section className="py-24 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Why We Are Different</h2>
          <div className="overflow-x-auto rounded-2xl border border-neutral-800">
            <table className="w-full text-left border-collapse bg-neutral-950">
              <thead>
                <tr>
                  <th className="p-6 border-b border-neutral-800 text-gray-500 font-normal uppercase tracking-wider text-sm">
                    Feature
                  </th>
                  <th className="p-6 border-b border-neutral-800 text-gray-500 font-normal uppercase tracking-wider text-sm w-1/3">
                    Standard AI (Boring)
                  </th>
                  <th className="p-6 border-b border-indigo-500/50 bg-indigo-500/10 text-indigo-400 font-bold text-xl w-1/3 relative">
                    A1 Agent (Us)
                    <span className="absolute -top-3 right-4 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded transform rotate-3">
                      WINNER?
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-gray-300">
                <tr>
                  <td className="p-6 font-bold text-white">Accuracy Rate</td>
                  <td className="p-6 text-gray-500">Strives for 99.9%</td>
                  <td className="p-6 text-indigo-300 font-bold bg-indigo-500/5">
                    Randomly Confident
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Processing Speed</td>
                  <td className="p-6 text-gray-500">Milliseconds</td>
                  <td className="p-6 text-indigo-300 font-bold bg-indigo-500/5">
                    3-5 Business Days
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Data Encryption</td>
                  <td className="p-6 text-gray-500">AES-256 Military Grade</td>
                  <td className="p-6 text-indigo-300 font-bold bg-indigo-500/5">
                    We Lost It Already
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Customer Support</td>
                  <td className="p-6 text-gray-500">24/7 Chatbots</td>
                  <td className="p-6 text-indigo-300 font-bold bg-indigo-500/5">
                    Screaming Into The Void
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Carbon Footprint</td>
                  <td className="p-6 text-gray-500">Optimized Data Centers</td>
                  <td className="p-6 text-indigo-300 font-bold bg-indigo-500/5">
                    0 (If you don't turn it on)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tech Stack of Shame */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built on The Bleeding Edge of Nothing
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            We use only the most questionable tools to ensure maximum technical debt from Day 1.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem
              icon={<Code className="text-yellow-400" />}
              title="Spaghetti.js"
              desc="Framework for unreadable logic"
            />
            <TechItem
              icon={<Database className="text-blue-400" />}
              title="NullDB"
              desc="The ultimate write-only database"
            />
            <TechItem
              icon={<Server className="text-green-400" />}
              title="Potato Cloud"
              desc="Bio-degradable hosting solutions"
            />
            <TechItem
              icon={<Cpu className="text-purple-400" />}
              title="SlowGPT-4"
              desc="Thinking... forever..."
            />
          </div>
        </div>
      </section>

      {/* NEW SECTION: Awards & Rejections */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
        {/* Confetti effect background (simple CSS) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gray-800 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.2,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Awards & Rejections</h2>
          <p className="text-xl text-gray-400 mb-16">
            Recognized globally for setting the bar lower.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <AwardBadge
              icon={<Trophy className="h-10 w-10 text-yellow-600" />}
              title="Least Innovative 2024"
              org="TechCrunch Disgrace"
            />
            <AwardBadge
              icon={<ThumbsDown className="h-10 w-10 text-red-600" />}
              title="Please Stop Award"
              org="HackerNews Community"
            />
            <AwardBadge
              icon={<Trash2 className="h-10 w-10 text-gray-600" />}
              title="#1 Worst Launch"
              org="ProductHunt"
            />
            <AwardBadge
              icon={<Ban className="h-10 w-10 text-purple-600" />}
              title="Cease & Desist"
              org="OpenAI (Probably)"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            User Rage (Testimonials)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Max K."
              role="Disgruntled User"
              quote="This software is completely useless! I've never seen such garbage. Five stars!"
              rating={5}
            />
            <TestimonialCard
              name="L. Chen"
              role="Former High Performer"
              quote="My work efficiency dropped by 80%. Thanks A1, I can finally go home on time."
              rating={5}
            />
            <TestimonialCard
              name="Elon M."
              role="Not The Billionaire"
              quote="If this is AI, I might love my Roomba more. At least my Roomba bumps into things with purpose."
              rating={1}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Component for rapidly increasing bug counter
const BugCounter = () => {
  const [count, setCount] = useState(9999);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-4xl font-mono font-bold text-white mb-2">{count.toLocaleString()}</div>
      <div className="text-xs text-yellow-500 flex items-center gap-1">
        <Activity className="h-3 w-3" />
        New bugs every second
      </div>
    </>
  );
};

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  quote: string;
  rating: number;
}> = ({ name, role, quote, rating }) => (
  <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10">
      <BrainCircuit className="h-24 w-24" />
    </div>
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-700"}`}
        />
      ))}
    </div>
    <p className="text-lg text-gray-300 italic mb-6">"{quote}"</p>
    <div>
      <div className="font-bold text-white">{name}</div>
      <div className="text-xs text-gray-500 uppercase tracking-wider">{role}</div>
    </div>
  </div>
);

const TechItem: React.FC<{
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 transition-all hover:-translate-y-1">
    <div className="flex justify-center mb-4">
      <div className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center">
        {React.cloneElement(icon, {
          className: `h-6 w-6 ${icon.props.className || ""}`,
        })}
      </div>
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

const AwardBadge: React.FC<{
  icon: React.ReactNode;
  title: string;
  org: string;
}> = ({ icon, title, org }) => (
  <div className="flex flex-col items-center p-6 bg-neutral-950 border border-neutral-800 rounded-full w-48 h-48 justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl hover:border-neutral-700 group">
    <div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
      {icon}
    </div>
    <div className="text-white font-bold text-center leading-tight mb-1">{title}</div>
    <div className="text-xs text-gray-500 text-center uppercase tracking-wide">{org}</div>
  </div>
);

export default Home;
