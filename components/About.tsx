import React from 'react';
import { FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            服务器特色
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            致力于打造一个长期稳定、充满创造力的Minecraft社区。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-yellow-400/30 hover:bg-slate-800/80 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-400/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;