import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            管理团队
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm">
            经验丰富、热情友好的管理组为您保驾护航
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md dark:shadow-lg border border-slate-200 dark:border-slate-700 hover:transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-28 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700">
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-20 h-20 rounded-full border-4 border-white dark:border-slate-800 object-cover bg-slate-200 dark:bg-slate-700"
                  />
                </div>
              </div>
              <div className="pt-12 pb-6 px-5 text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                <span className="inline-block bg-yellow-100 dark:bg-yellow-400/10 text-yellow-700 dark:text-yellow-400 text-[10px] px-2 py-0.5 rounded-full font-medium mb-3 border border-yellow-200 dark:border-yellow-400/20">
                  {member.role}
                </span>
                <p className="text-slate-600 dark:text-gray-400 text-xs">
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