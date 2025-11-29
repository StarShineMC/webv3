import React from 'react';
import { Compass, Hammer, Sword, BookOpen } from 'lucide-react';

const Future: React.FC = () => {
  return (
    <section id="future" className="py-20 bg-slate-900 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-6">
              <Compass className="w-4 h-4" />
              <span>未来展望 Roadmap</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              不止于建筑 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                探索无限可能
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              目前 StarShine 处于<strong>建筑服务器</strong>阶段，我们专注于为玩家提供广阔的创作空间与丰富的建筑工具。但这仅仅是开始。
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-slate-800 p-3 rounded-lg h-fit">
                  <Sword className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">RPG 剧情冒险</h3>
                  <p className="text-gray-400 text-sm">计划引入宏大的世界观剧情与副本挑战，让每一位玩家都能成为故事的主角。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-slate-800 p-3 rounded-lg h-fit">
                  <BookOpen className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">硬核生存模式</h3>
                  <p className="text-gray-400 text-sm">回归本质的生存体验，不仅有原汁原味的荒野求生，更有特色的领地与经济系统。</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <p className="text-gray-300 italic border-l-4 border-yellow-400 pl-4">
                 “我们致力于不断丰富游戏体验，每一块方块都承载着未来的希望。诚邀您积极参与，共同建设 StarShine 的未来！”
               </p>
            </div>
          </div>

          {/* Right: Visual/Cards */}
          <div className="relative">
             {/* Decorative gradient blob */}
             <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-purple-500/20 rounded-full blur-3xl transform rotate-12"></div>
             
             <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border border-white/5 shadow-xl">
                     <Hammer className="w-8 h-8 text-yellow-400 mb-4" />
                     <h4 className="font-bold text-white">当前阶段</h4>
                     <p className="text-xs text-gray-400 mt-2">创造模式 / 建筑比赛 / 地皮系统</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 shadow-xl opacity-50">
                     <div className="h-2 w-12 bg-gray-600 rounded mb-4"></div>
                     <div className="h-4 w-20 bg-gray-600 rounded"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                   <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 shadow-xl opacity-50">
                     <div className="h-2 w-12 bg-gray-600 rounded mb-4"></div>
                     <div className="h-4 w-20 bg-gray-600 rounded"></div>
                   </div>
                   <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-2xl border border-indigo-500/30 shadow-xl">
                     <Compass className="w-8 h-8 text-indigo-400 mb-4" />
                     <h4 className="font-bold text-white">下一阶段</h4>
                     <p className="text-xs text-gray-400 mt-2">生存服开启 / RPG内测 / 更多玩法</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Future;