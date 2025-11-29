import { Box, Hammer, Shield, Zap, Globe, Github, Gamepad2, Layers, Cpu, Sparkles } from 'lucide-react';
import { TeamMember, Feature, SocialLink } from './types';

export const SERVER_IP = "play.starshine.cn";

export const NAV_LINKS = [
  { name: '特色', href: '#features' }, // Features
  { name: '展望', href: '#future' },   // Future
  { name: '团队', href: '#team' },     // Team
  { name: '连接', href: '#connect' },  // Connect
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "StarAdmin",
    role: "服主 / Owner",
    avatar: "https://picsum.photos/seed/admin1/150/150",
    description: "服务器主要负责人，拥有多年运维经验，致力于提供最稳定的物理机公网体验。"
  },
  {
    name: "BlockMaster",
    role: "首席建筑师 / Lead Builder",
    avatar: "https://picsum.photos/seed/builder1/150/150",
    description: "具有极高的审美与建筑造诣，负责服务器主城与RPG地图的宏大场景设计。"
  },
  {
    name: "CodeWizard",
    role: "技术总监 / Tech Lead",
    avatar: "https://picsum.photos/seed/dev1/150/150",
    description: "精通Java与插件开发，技术水平优越，保障服务器核心稳定与独家玩法实现。"
  },
  {
    name: "CommunityMod",
    role: "社区管理 / Admin",
    avatar: "https://picsum.photos/seed/mod1/150/150",
    description: "耐心细致的社区守护者，快速响应玩家需求，维护和谐友爱的游戏环境。"
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Java & 基岩互通",
    description: "打破平台壁垒，无论你是电脑端还是手机端玩家，都能在同一片星空下共同建设，数据完美同步。",
    icon: Globe
  },
  {
    title: "实体公网服务器",
    description: "拒绝VPS卡顿，采用高性能物理机托管，2024年底全新上线。高频CPU加持，为您提供极致流畅的游戏体验。",
    icon: Zap
  },
  {
    title: "技术优越的管理团队",
    description: "我们的管理组拥有深厚的技术积累与运维经验，专业护航，确保服务器长期稳定运行，只为做最好的服务。",
    icon: Cpu
  },
  {
    title: "宝藏小服",
    description: "我们是一个精致温馨的宝藏社区。这里没有复杂的商业套路，只有纯粹的热爱，期待与你开启一段美好的创作之旅。",
    icon: Sparkles
  }
];

export const SOCIALS: SocialLink[] = [
  {
    name: "Bilibili",
    url: "https://www.bilibili.com",
    icon: Box 
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github
  }
];