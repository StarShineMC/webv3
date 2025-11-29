import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            管理团队
          </h2>
          <p className="text-gray-400">
            经验丰富、热情友好的管理组为您保驾护航
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-32 bg-gradient-to-br from-indigo-600 to-purple-700">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full border-4 border-slate-800 object-cover bg-slate-700"
                  />
                </div>
              </div>
              <div className="pt-14 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs px-2 py-1 rounded-full font-medium mb-4 border border-yellow-400/20">
                  {member.role}
                </span>
                <p className="text-gray-400 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;