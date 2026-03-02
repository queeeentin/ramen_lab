
import { Course, Instructor, StudentStory } from './types';

export interface DetailedCourse extends Course {
  originalPrice: string;
  curriculum: { day: string; title: string; items: string[]; bonus?: string }[];
}

export const COURSES: DetailedCourse[] = [
  {
    id: 'c1',
    title: '5日制：专业拉面“大师班”',
    duration: '5 Days',
    description: '全面掌握专业拉面系统。专注于标准化、实验室研发方法及门店实战执行。从零开始，培养真正的职人。',
    price: '¥8,800',
    originalPrice: '¥12,800',
    image: 'https://imgur.com/1IgopFB.jpg',
    category: 'Workshop',
    curriculum: [
      {
        day: '第一天',
        title: '制面奥义与基础理论',
        items: ['日式拉面概论与地域流派', '小麦粉科学：蛋白质与灰分分析', '加水率与加盐量的黄金比例', 'Yamato大和制面机实操']
      },
      {
        day: '第二天',
        title: '汤底哲学与实验室炖煮',
        items: ['核心汤底炖煮技术', '豚骨/清汤/白汤的乳化科学', '标准化风味控制系统']
      },
      {
        day: '第三天',
        title: '灵魂着味：味油与酱汁',
        items: ['七大招牌风味油研发', '经典配菜预处理', '脂肪与油水的深度乳化理论']
      },
      {
        day: '第四天',
        title: '产品研发与副菜系统',
        items: ['菜单逻辑与产品线规划', '爆款单品扩充策略', '副菜研发：唐扬鸡与手工饺子'],
        bonus: '赠：秘制唐扬炸鸡 + 日式煎饺全套配方'
      },
      {
        day: '第五天',
        title: '经营实战与门店设计',
        items: ['厨房动线效率优化', '成本核算与毛利控制', '海外开店及运营指南']
      }
    ]
  },
  {
    id: 'c2',
    title: '5日制：高阶拉面“宗师班”',
    duration: '5 Days',
    description: '深度探索地域变体、发酵技术及复合层次汤底。专为资深从业者及现有店主设计，打造品牌核心竞争力。',
    price: '¥15,800',
    originalPrice: '¥19,800',
    image: 'https://imgur.com/5Dbnwpx.jpg',
    category: 'Professional',
    curriculum: [
      {
        day: '第1-2天',
        title: '高阶发酵酱汁（Tare）',
        items: ['酱油发酵物理学', '多品种味增熟成与调配', '海鲜系旨味（Umami）深度提取']
      },
      {
        day: '第3-4天',
        title: '混合汤底工程学',
        items: ['双汤头（W-Soup）黄金比例', '贝类与地鸡白汤融合', '大规模生产的一致性方案']
      },
      {
        day: '第5天',
        title: '招牌菜单深度开发',
        items: ['通过味觉构建品牌身份', '高端食材全球供应链对接', '高阶制面：口感与吸汤率控制']
      }
    ]
  },
  {
    id: 'c3',
    title: '3日制：日本大和资深导师特训班',
    duration: '3 Days',
    description: '由日本Yamato总部资深导师亲临中国 ramen lab 共同授课，针对全球拉面市场趋势、极简高效制面工艺及数字化厨政管理进行巅峰培训。',
    price: '¥18,500',
    originalPrice: '¥25,800',
    image: 'https://www.yamatonoodle.com/wp-content/uploads/2025/03/banner-front2.jpg',
    category: 'Intensive',
    curriculum: [
      {
        day: '第一天',
        title: '数字化制面科学 (Digital Noodle Master)',
        items: ['通过数据复刻匠人手感', '低加水率高品质面条的稳定性控制', '全球小麦粉特性研究与适配']
      },
      {
        day: '第二天',
        title: '汤底DNA与风味架构 (Flavor DNA)',
        items: ['极致淡丽系与浓厚系的顶尖萃取', '自动化炖煮系统的标准化落地', '零损耗厨政流程设计']
      },
      {
        day: '第三天',
        title: '全球化经营与盈利逻辑 (Global Strategy)',
        items: ['日本总部的最新经营案例分享', '高坪效拉面店模型拆解', '全球供应链整合建议']
      }
    ]
  }
];

export const STUDENT_WORK = [
  {
    title: '浓厚豚骨拉面',
    student: '和田一平 (福冈)',
    image: 'https://imgur.com/WpbPNsF.jpg',
    desc: '完成了双汤头乳化实验，浓度达到12 Brix。'
  },
  {
    title: '淡丽地鸡酱油拉面',
    student: 'Kenji T. (Tokyo)',
    image: 'https://imgur.com/tEuAixe.jpg',
    desc: '探索了低温慢煮与清汤萃取的极致平衡。'
  },
  {
    title: '秘制赤味增拉面',
    student: 'soba (usa)',
    image: 'https://imgur.com/2BHmImi.jpg',
    desc: '将传统意大利食材与熟成味增成功融合。'
  },
  {
    title: '极致黑麻油豚骨',
    student: 'mr.li . (CHINA)',
    image: 'https://imgur.com/VBGdQhl.jpg',
    desc: '掌握了风味油的标准化生产流程。'
  },
  {
    title: '横滨家系拉面',
    student: 'Wang J. (GLOBLE)',
    image: 'https://imgur.com/B3sqeuL.jpg',
    desc: '鸡油与豚骨的高压乳化实验，口感浓厚平衡。'
  },
  {
    title: '松露盐味清汤拉面',
    student: 'DANBO. (GLOBLE)',
    image: 'https://imgur.com/NNqjR99.jpg',
    desc: '运用分子料理思维，打造极尽纯净的汤底。'
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'i1',
    name: 'Master Peter Kim',
    title: '创始教头 (Founding Sensei)',
    experience: '30年从业经验',
    language: '中文',
    bio: '曾任国内外高端日料集团总厨 30多年，传统拉面工艺与现代管理系统的集大成者。',
    image: 'https://imgur.com/bnB715C.jpg'
  },
  {
    id: 'i2',
    name: 'Master Jason Lin',
    title: '技术总监 (Technical Director)',
    experience: '大和制面学校前任资深讲师',
    language: '英语/中文',
    bio: '精通Yamato制面系统，专注于面条力学与汤底基因的标准化教学。',
    image: 'https://imgur.com/xWVnrEp.jpg'
  }
];

export const STUDENT_STORIES: (StudentStory & { region: string })[] = [
  {
    id: 's1',
    name: 'Cusack',
    region: '美国',
    businessName: 'Sendai Ramen Specialist',
    quote: '大和的经营讲座远远超出了我的预期，真是一场精彩绝伦的课程。导师关于餐厅选址、规模和业务规划的讲解对我未来的事业大有帮助。',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's2',
    name: 'Betz',
    region: '瑞士',
    businessName: 'Swiss Noodle Art',
    quote: '我认为大和面条学校是一家能够学习所有拉面业务知识的出色公司。每天的课程都令人眼前一亮，非常有意思，是一次内容丰富、信息量极大的宝贵经历。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's3',
    name: '小松',
    region: '日本 东京',
    businessName: 'Komatsu Ramen Lab',
    quote: '在实践课上，我学到了如何取出高品质的汤底。在制面过程中，我了解了不同种类的小麦粉会带来不同的效果，甚至1%的蛋白也会改变口感，操作比我想象中简单。',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's4',
    name: 'Thompson',
    region: '英国 伦敦',
    businessName: 'London Slurp',
    quote: '课程的深度让我惊讶。特别是关于加水率和面条延展性的实验，完全颠覆了我对传统制面的认知。数字化的管理让开店变得有据可依。',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's5',
    name: '王明',
    region: '中国 上海',
    businessName: '匠心拉面馆',
    quote: '感谢 Peter 老师的倾囊相授。实验室标准的汤底乳化技术让我现在的店日均营业额提升了40%，口感的一致性是吸引回头客的核心。',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's6',
    name: 'Gomez',
    region: '墨西哥',
    businessName: 'Taco-Ramen Fusion',
    quote: '将墨西哥本地食材与日式Tare酱结合是我此行最大的收获。大和的导师非常开放，鼓励我们进行跨文化的味觉实验。',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's7',
    name: 'Pierre',
    region: '法国 巴黎',
    businessName: 'L\'Art du Ramen',
    quote: '在巴黎，高品质的面条很难寻找，直到我学会了使用大和制面机。现在我可以每天为客人提供新鲜、富有弹性的手工感拉面。',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's8',
    name: 'Sato',
    region: '日本 福冈',
    businessName: 'Hakata Soul',
    quote: '即使是在拉面激战区博多，这里的数字化课程也让我获益匪浅。标准化不仅节省了人力，更保障了每一碗汤的高水准。',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's9',
    name: 'Lim',
    region: '新加坡',
    businessName: 'Umami Express',
    quote: '三天的特训班含金量极高！日本总部的经营逻辑拆解非常透彻，让我们在新加坡的扩张计划变得非常清晰且具有可操作性。',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's10',
    name: 'Elena',
    region: '意大利 罗马',
    businessName: 'Pasta & Ramen',
    quote: '作为一名意面厨师，我被日式拉面的科学体系深深吸引。折光仪测浓度的精准度让我意识到，这就是拉面职人的严谨性。',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's11',
    name: 'Chen',
    region: '澳大利亚 悉尼',
    businessName: 'Sydney Slurp',
    quote: '这里的课程非常实战，从设备选购到厨房动线设计，导师们给出了非常专业的建议，帮我们规避了大量的开店风险。',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's12',
    name: 'Niklas',
    region: '德国 柏林',
    businessName: 'Berlin Ramen Lab',
    quote: '拉面是一门精密学科。在大和面条学校，我找到了通往完美汤底的钥匙。老师对细节的执着是我们最需要学习的精神。',
    image: 'https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's13',
    name: 'Nguyen',
    region: '越南 胡志明',
    businessName: 'Saigon Ramen',
    quote: '即使是在炎热的东南亚，只要掌握了清爽型拉面的精髓，生意依然可以非常火爆。感谢 Jason 老师对当地口味调配的耐心指导。',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's14',
    name: 'Lee',
    region: '韩国 首尔',
    businessName: 'Seoul Noodle House',
    quote: '高阶宗师班的 Tare 酱发酵理论非常深奥。通过这次学习，我的店终于研发出了具备极强差异化的独门秘籍。',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 's15',
    name: 'Al-Sayed',
    region: '阿联酋 迪拜',
    businessName: 'Desert Umami',
    quote: '在迪拜开设高端拉面馆，品质的稳定性压倒一切。大和提供的自动化炖煮系统和数字化制面标准完美解决了我们的痛点。',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=200'
  }
];

export const STUDENT_LOCATIONS = [
  '美国', '加拿大', '英国', '意大利', '新加坡', 
  '马来西亚', '泰国', '中国', '澳大利亚', 
  '法国', '墨西哥', '日本', '韩国', '越南', '德国', '迪拜'
];
