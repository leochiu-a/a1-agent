import React from "react";
import { Target, Zap, CloudOff, HelpCircle, Briefcase, Map, Coffee, Copy } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 pb-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950 to-neutral-950 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/20">
            EST. Yesterday (Maybe)
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-purple-300">
            Who Are We?
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We are a disorganized group of entities dedicated to lowering the bar for technology.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-neutral-800 backdrop-blur-sm relative">
          <div className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-1 font-bold transform -rotate-6 shadow-lg">
            TRUE STORY
          </div>
          <h2 className="text-3xl font-bold mb-6 text-white">Our Origin Story</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              It all started in 2024 when our founder, who shall remain nameless (to avoid
              lawsuits), accidentally executed{" "}
              <code className="bg-neutral-800 px-2 py-1 rounded text-red-400 font-mono text-sm">
                rm -rf /
              </code>{" "}
              on our only production server.
            </p>
            <p>
              Instead of restoring the backup (which didn't exist), they had an epiphany:{" "}
              <strong className="text-white">"What if emptiness IS the product?"</strong>
            </p>
            <p>
              Thus, A1 was born. While other companies race to build AGI (Artificial General
              Intelligence), we are comfortably sprinting in the opposite direction towards{" "}
              <strong className="text-indigo-400">ANI (Artificial Non-Intelligence)</strong>. We
              believe the future is not smart; it's simpler, slower, and significantly more
              confusing.
            </p>
          </div>
        </div>
      </section>

      {/* The Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet The "Leadership"</h2>
          <p className="text-gray-500">We hired the cheapest talent we could find.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CEO */}
          <TeamMember
            image="https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?q=80&w=400&h=400&fit=crop"
            name="Rocky"
            role="Chief Executive Officer"
            bio="Literally a rock. Emotionally stable. Makes hard decisions. Hasn't moved since the company started."
          />
          {/* CTO */}
          <TeamMember
            image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&h=400&fit=crop"
            name="Sir Paws"
            role="Chief Technology Officer"
            bio="Writes 90% of our code by walking across the keyboard. Explains why our app meows sometimes."
          />
          {/* CFO */}
          <TeamMember
            image="https://images.unsplash.com/photo-1522069394066-326005dc99c2?q=80&w=400&h=400&fit=crop"
            name="R.N.G."
            role="Chief Financial Officer"
            bio="A pair of dice. We roll them to decide salaries and budget. If it's snake eyes, nobody gets paid."
          />
          {/* HR */}
          <TeamMember
            image="https://images.unsplash.com/photo-1627447879486-0775d72f12f2?q=80&w=400&h=400&fit=crop"
            name="The 8-Ball"
            role="Head of HR"
            bio="Handles all complaints. Most common response to 'Can I have a raise?': 'Outlook not so good'."
          />
        </div>
      </section>

      {/* Roadmap to Nowhere */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Our Strategy
          </span>
          <h2 className="text-4xl font-bold mt-2">The Roadmap to Nowhere</h2>
        </div>

        <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-1/2 space-y-12">
          <RoadmapItem
            year="Q1 2024"
            title="The Great Mistake"
            desc="Company founded by accident. We tried to order pizza but bought a domain name instead."
            status="done"
          />
          <RoadmapItem
            year="Q3 2024"
            title="Maximum Confusion"
            desc="We launched our beta. Users were confused. We were confused. It was a huge success."
            status="current"
          />
          <RoadmapItem
            year="Q2 2025"
            title="Project: Hibernate"
            desc="We plan to take a collective nap. Server uptime will be reduced to 'whenever we feel like it'."
            status="future"
          />
          <RoadmapItem
            year="2050"
            title="The Singularity"
            desc="We hope to finally achieve 1 active user. Just one. That's the goal."
            status="future"
          />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Corporate Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard
            icon={<Zap className="w-8 h-8 text-yellow-400" />}
            title="Low Energy"
            desc="We believe in conserving energy by doing the bare minimum required to not get sued."
          />
          <ValueCard
            icon={<CloudOff className="w-8 h-8 text-gray-400" />}
            title="Unreliability"
            desc="99.9% uptime is stressful. We aim for a chill 50% so our servers can have a work-life balance."
          />
          <ValueCard
            icon={<Target className="w-8 h-8 text-red-400" />}
            title="Aiming Low"
            desc="If you never set goals, you can never fail. This is our secret to infinite success."
          />
        </div>
      </section>

      {/* Careers Section */}
      <section className="bg-neutral-900 border-y border-neutral-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-indigo-500" /> We Are (Not) Hiring
              </h2>
              <p className="text-gray-400 max-w-xl">
                Do you hate innovation? Do you excel at looking busy while doing nothing? Join our
                team of underachievers.
              </p>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-3 bg-white text-black font-bold rounded-full opacity-50 cursor-not-allowed hover:bg-gray-200 transition-colors">
              Applications Closed (Forever)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobCard
              icon={<Copy className="text-blue-400" />}
              title="Full Stack Overflow Dev"
              salary="$0 - $0 / year"
              reqs="Must be expert at CTRL+C and CTRL+V. Ability to ignore errors is a plus."
            />
            <JobCard
              icon={<Coffee className="text-yellow-600" />}
              title="Senior Nap Engineer"
              salary="Exposure"
              reqs="10+ years experience in sleeping. Must provide own pillow. Remote (bed) only."
            />
            <JobCard
              icon={<HelpCircle className="text-purple-400" />}
              title="Chief Vibe Officer"
              salary="Good Vibes"
              reqs="Responsibilities include sighing loudly during Zoom calls and sharing memes."
            />
          </div>
        </div>
      </section>

      <div className="mt-24 text-center">
        <p className="text-gray-600 text-sm">
          * No animals were harmed in the making of this website, although the rock did get dropped
          once.
        </p>
      </div>
    </div>
  );
};

const TeamMember: React.FC<{
  image: string;
  name: string;
  role: string;
  bio: string;
}> = ({ image, name, role, bio }) => (
  <div className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all hover:-translate-y-2 duration-300">
    <div className="aspect-square overflow-hidden relative">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-indigo-400 text-sm font-medium mb-4 uppercase tracking-wider">{role}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
    </div>
  </div>
);

const ValueCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 hover:bg-neutral-900 transition-colors">
    <div className="bg-neutral-800 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

const RoadmapItem: React.FC<{
  year: string;
  title: string;
  desc: string;
  status: "done" | "current" | "future";
}> = ({ year, title, desc, status }) => {
  let dotClass = "bg-neutral-700";
  let textClass = "text-gray-500";

  if (status === "done") {
    dotClass = "bg-indigo-500";
    textClass = "text-gray-300";
  } else if (status === "current") {
    dotClass = "bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]";
    textClass = "text-white";
  }

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Dot */}
      <div
        className={`absolute left-[-5px] top-2 h-3 w-3 rounded-full ${dotClass} border border-neutral-950 z-10`}
      ></div>

      <div className="md:flex md:gap-8 md:items-baseline">
        <div className="md:w-32 flex-shrink-0">
          <span
            className={`text-sm font-mono font-bold ${
              status === "current" ? "text-indigo-400" : "text-gray-600"
            }`}
          >
            {year}
          </span>
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-2 ${textClass}`}>{title}</h3>
          <p className="text-gray-500 max-w-lg">{desc}</p>
        </div>
      </div>
    </div>
  );
};

const JobCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  salary: string;
  reqs: string;
}> = ({ icon, title, salary, reqs }) => (
  <div className="p-6 rounded-2xl bg-black border border-neutral-800 hover:border-gray-600 transition-all hover:scale-105 cursor-not-allowed opacity-75 hover:opacity-100">
    <div className="flex justify-between items-start mb-4">
      <div className="bg-neutral-900 p-3 rounded-xl">{icon}</div>
      <span className="text-xs font-mono bg-red-900/30 text-red-400 px-2 py-1 rounded">CLOSED</span>
    </div>
    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
    <div className="text-green-500 font-mono text-sm mb-4">{salary}</div>
    <div className="border-t border-neutral-800 pt-4">
      <p className="text-gray-500 text-sm">{reqs}</p>
    </div>
  </div>
);

export default About;
