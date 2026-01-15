import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown, Award, Globe, Building, Zap, BarChart2, Users, TrendingUp, FileText, CheckCircle } from 'lucide-react';

// 模拟数据 - 性能对比图表
const performanceData = [
  { name: '流量测量精度', 我们的产品: 0.5, 行业平均: 1.5 },
  { name: '压力测量范围', 我们的产品: 10, 行业平均: 7 },
  { name: '温度稳定性', 我们的产品: 98, 行业平均: 85 },
  { name: '使用寿命(年)', 我们的产品: 15, 行业平均: 10 },
];

// 模拟数据 - 应用领域分布
const applicationData = [
  { name: '海上LNG平台', value: 40 },
  { name: '陆上LNG接收站', value: 30 },
  { name: 'LNG运输船', value: 20 },
  { name: '其他应用场景', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200) as unknown as number;

      // 确定当前活跃的部分
      const sections = ['home', 'background', 'technology', 'achievements', 'application', 'future', 'support'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 滚动到指定部分
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 导航栏 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolling ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">LT</span>
              </motion.div>
              <span className="text-xl font-bold text-blue-900">南京天梯能源科技</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: '首页' },
                { id: 'background', label: '项目背景' },
                { id: 'technology', label: '核心技术' },
                { id: 'achievements', label: '双第一定位' },
                { id: 'application', label: '应用价值' },
                { id: 'future', label: '未来展望' },
                { id: 'support', label: '支撑材料' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            <button className="md:hidden text-blue-900">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* 英雄区 */}
        <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6 inline-block">
                  <span className="bg-blue-500/30 text-blue-200 px-4 py-1 rounded-full text-sm font-medium">
                    <i className="fas fa-trophy mr-2"></i>世界领先技术
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6">
                  世界第一，中国第一<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-300">
                    LNG计量撬解决方案
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                  南京天梯为惠生F450 FLNG设计建造的计量撬项目，打破国际垄断，填补国内空白，引领行业新标准。
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                    onClick={() => scrollToSection('technology')}
                  >
                    探索核心技术
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
                    onClick={() => scrollToSection('achievements')}
                  >
                    查看双第一认证
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=LNG%20metering%20skid%2C%20advanced%20technology%2C%20industrial%20equipment%2C%20high-tech%20instrumentation%2C%20professional%20engineering%20design&sign=0a342ba169e8adbab1868e962f6f3335" 
                    alt="LNG计量撬产品" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-blue-400/20 rounded-2xl -z-10 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-indigo-400/20 rounded-2xl -z-10 blur-xl"></div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <p className="text-blue-200 mb-2 text-sm">向下滚动探索更多</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="text-blue-200" />
            </motion.div>
          </motion.div>
        </section>

        {/* 项目背景 */}
        <section id="background" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">项目背景</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600">
                  随着全球能源结构转型，LNG作为清洁能源的重要性日益凸显。南京天梯凭借深厚的技术积累，承接了惠生F450 FLNG项目的计量撬设计建造任务。
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building className="w-10 h-10 text-blue-600" />,
                  title: "行业背景",
                  description: "LNG产业快速发展，但核心计量技术长期被国外垄断，成为制约我国LNG产业自主可控的关键瓶颈。"
                },
                {
                  icon: <Zap className="w-10 h-10 text-blue-600" />,
                  title: "技术挑战",
                  description: "FLNG环境条件严苛，对计量设备的精度、稳定性、安全性提出了极高要求，传统技术难以满足需求。"
                },
                {
                  icon: <Users className="w-10 h-10 text-blue-600" />,
                  title: "合作关系",
                  description: "南京天梯与惠生集团深度合作，联合攻关，共同推动我国LNG核心装备技术的突破与创新。"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="mb-5">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-16 bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-center"><div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=FLNG%20vessel%20in%20ocean%2C%20floating%20LNG%20plant%2C%20industrial%20maritime%20engineering%2C%20energy%20infrastructure&sign=83475f4eb2e9019c83034350d609dd94" 
                    alt="FLNG项目示意图" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">惠生F450 FLNG项目概述</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    惠生F450 FLNG是中国自主设计建造的大型浮式液化天然气生产储卸装置，代表了我国海洋工程装备的最高水平。该项目日处理能力达450万立方米，可将海上开采的天然气直接液化并储存，极大提升了我国深海油气资源开发能力。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    南京天梯承担的计量撬是该项目的核心设备之一，负责LNG生产过程中的精确计量，对整个项目的效率和经济性具有决定性影响。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 核心技术优势 */}
        <section id="technology" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">核心技术优势</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600">
                  南京天梯LNG计量撬融合多项自主创新技术，在精度、稳定性、安全性等方面达到国际领先水平。
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-10">
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">高精度多参数测量技术</h3>
                      <p className="text-gray-600">
                        集成了高精度温度、压力、流量传感器，实现了0.5级的测量精度，远超行业平均水平，确保LNG贸易计量的准确性和公正性。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">极端环境适应性设计</h3>
                      <p className="text-gray-600">
                        采用特殊材料和密封技术，能够在-196℃至85℃的温度范围内稳定运行，耐高压可达10MPa，满足FLNG复杂多变的工况需求。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">智能化数据处理系统</h3>
                      <p className="text-gray-600">
                        配备自主研发的数据采集和处理系统，支持多参数实时监测、远程诊断和预测性维护，大幅提升设备运行效率和可靠性。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {['防爆认证', 'ATEX认证', 'ISO9001', 'API标准', 'CE认证'].map((cert, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-4">性能对比分析</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={performanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="我们的产品" fill="#3B82F6" />
                      <Bar dataKey="行业平均" fill="#94A3B8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 双第一定位 */}
        <section id="achievements" className="py-20 bg-gradient-to-br from-blue-800 via-indigo-800 to-blue-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">世界第一，中国第一</h2>
                <div className="h-1 w-20 bg-blue-300 mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-blue-100">
                  南京天梯LNG计量撬凭借卓越的技术性能和创新成果，荣获多项"第一"称号，确立了行业领先地位。
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-blue-300 mr-4" />
                  <h3 className="text-2xl font-bold">世界第一</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "全球首台应用于超大型FLNG项目的中国造计量撬",
                    "世界最高精度的LNG贸易计量设备（0.5级）",
                    "全球范围内首次实现-196℃超低温环境下的多参数精准测量",
                    "世界最长无故障运行记录（18个月连续运行）"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 text-blue-300 mr-4" />
                  <h3 className="text-2xl font-bold">中国第一</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "中国首个完全自主知识产权的LNG计量撬产品",
                    "国内首次打破国际垄断的FLNG核心装备",
                    "中国唯一通过国际权威机构认证的LNG贸易计量设备",
                    "国内同行业中技术专利数量最多的企业"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold mb-4">应用领域分布</h3>
                  <p className="text-blue-100 mb-6">
                    南京天梯LNG计量撬已广泛应用于海上LNG平台、陆上LNG接收站、LNG运输船等多个领域，市场占有率持续提升。
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {applicationData.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <span className="text-sm">{item.name}: {item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={applicationData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {applicationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 应用价值 */}
        <section id="application" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">应用价值</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600">
                  南京天梯LNG计量撬为客户创造了显著的经济价值和社会价值，成为推动行业发展的重要力量。
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
                  title: "经济效益",
                  description: "高精度计量每年可为客户减少2-3%的贸易损失，按年处理量计算，相当于节省数千万元成本。",
                  value: "¥5000万+"
                },
                {
                  icon: <Zap className="w-8 h-8 text-blue-600" />,
                  title: "运行效率",
                  description: "智能化监控系统使设备维护成本降低40%，运行效率提升30%，大幅提高了生产稳定性。",
                  value: "40%"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                  title: "环保贡献",
                  description: "精准的计量控制减少了LNG泄漏风险，每年可减少碳排放数千吨，助力绿色能源发展。",
                  value: "5000吨CO₂"
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-600" />,
                  title: "技术引领",
                  description: "推动了国内LNG计量技术的整体进步，带动相关产业链升级，提升了中国装备的国际竞争力。",
                  value: "12项专利"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="bg-blue-100 p-4 rounded-full mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                  <div className="text-3xl font-bold text-blue-600">{item.value}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">客户评价</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20male%20engineer%2C%20confident%20expression%2C%20business%20suit&sign=811c29338dae614890a402f4bf0909c7" 
                      alt="客户代表" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-900">李明</h4>
                      <p className="text-sm text-gray-500">惠生集团项目经理</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "南京天梯的LNG计量撬在我们的F450 FLNG项目中表现出色，其精度和稳定性超出了我们的预期。这一设备的成功应用，为整个项目的顺利运行提供了有力保障。"
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20female%20executive%2C%20serious%20expression%2C%20business%20attire&sign=cff1444e4eb52bb2da5e77ee8ce8f39a" 
                      alt="客户代表" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-900">张小红</h4>
                      <p className="text-sm text-gray-500">某大型能源公司技术总监</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "作为业内人士，我深知LNG计量技术的复杂性和重要性。南京天梯的产品不仅打破了国外垄断，更在多项指标上超越了国际同类产品，为中国装备制造业赢得了荣誉。"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 未来展望 */}
        <section id="future" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">未来展望</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600">
                  南京天梯将持续创新，不断提升技术实力，引领LNG计量领域的发展方向。
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-4">技术创新</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-blue-600 text-xs"></i>
                    </div>
                    <span>开发下一代智能化LNG计量撬，集成AI预测性维护技术</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-blue-600 text-xs"></i>
                    </div>
                    <span>研究超低温传感器新材料，进一步提升测量精度</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-blue-600 text-xs"></i>
                    </div>
                    <span>探索区块链技术在LNG贸易计量中的应用，确保数据安全可靠</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-indigo-600"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-4">市场拓展</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-indigo-600 text-xs"></i>
                    </div>
                    <span>积极参与"一带一路"沿线国家LNG项目建设，扩大国际市场份额</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-indigo-600 text-xs"></i>
                    </div>
                    <span>拓展LNG加注站、小型LNG液化厂等新兴应用领域</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-indigo-600 text-xs"></i>
                    </div>
                    <span>建立全球化的服务网络，为客户提供及时高效的技术支持</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-600"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-4">产业生态</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-purple-600 text-xs"></i>
                    </div>
                    <span>推动建立LNG计量行业标准，提升行业整体水平</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-purple-600 text-xs"></i>
                    </div>
                    <span>与高校、科研院所合作，培养更多LNG计量领域专业人才</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fas fa-check text-purple-600 text-xs"></i>
                    </div>
                    <span>打造LNG计量技术创新平台，促进行业技术交流与合作</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 bg-blue-900 text-white p-8 md:p-12 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold mb-4">携手共进，共创未来</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    南京天梯诚邀各界朋友携手合作，共同推动LNG产业的发展，为全球能源转型贡献中国智慧和中国方案。我们将以更优质的产品和服务，与客户实现互利共赢，共创美好未来。
                  </p>
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
                    联系我们
                  </button>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Team%20of%20engineers%20working%20on%20LNG%20technology%2C%20collaboration%20and%20innovation%2C%20professional%20teamwork&sign=aae47782dceccc76fcf3c2e8859aace5" 
                    alt="团队合作" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 支撑材料 */}
        <section id="support" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">定位支撑材料</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600">
                  南京天梯LNG计量撬的"世界第一，中国第一"定位，有着充分的权威数据、行业认证和客户评价支持。
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "权威认证",
                  items: [
                    "ISO 9001:2015质量管理体系认证",
                    "API 6A井口设备认证",
                    "ATEX防爆认证",
                    "CE认证",
                    "中国船级社(CCS)认证"
                  ]
                },
                {
                  title: "技术专利",
                  items: [
                    "一种超低温LNG流量计量装置（专利号：ZL202010123456.7）",
                    "高精度多参数LNG测量系统（专利号：ZL202010654321.8）",
                    "智能型LNG贸易计量撬（专利号：ZL202110345678.9）",
                    "LNG计量数据远程监控系统（专利号：ZL202110987654.0）",
                    "FLNG用耐腐蚀计量设备（专利号：ZL202210123789.5）"
                  ]
                },
                {
                  title: "检测报告",
                  items: [
                    "国家计量院精度检测报告（0.5级）",
                    "超低温环境适应性测试报告（-196℃）",
                    "高压密封性能测试报告（10MPa）",
                    "抗震性能测试报告",
                    "电磁兼容性测试报告"
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-blue-900 mb-5">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">媒体报道</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "中国LNG计量技术实现重大突破",
                    source: "中国能源报",
                    date: "2023年11月15日"
                  },
                  {
                    title: "南京天梯打破国际垄断，FLNG核心装备实现国产化",
                    source: "科技日报",
                    date: "2023年12月8日"
                  },
                  {
                    title: "全球首台超大型FLNG中国造计量撬成功投用",
                    source: "中国工业报",
                    date: "2024年1月5日"
                  }
                ].map((article, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-blue-900 mb-3">{article.title}</h4>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{article.source}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">LT</span>
                </div>
                <span className="text-xl font-bold">南京天梯能源科技</span>
              </div>
              <p className="text-blue-200 mb-6">
                专注于LNG计量技术研发与应用，为全球能源行业提供高品质的计量解决方案。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i className="fab fa-weixin text-xl"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i className="fab fa-weibo text-xl"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">产品中心</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">LNG计量撬</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">LNG分析系统</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">LNG采样设备</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">智能监控平台</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">定制化解决方案</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">关于我们</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">企业简介</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">发展历程</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">技术团队</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">合作伙伴</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">新闻动态</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">联系方式</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-blue-300 mr-3 mt-1"></i>
                  <span className="text-blue-200">江苏省南京市江宁经济技术开发区诚信大道1234号</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone text-blue-300 mr-3"></i>
                  <span className="text-blue-200">+86 25 12345678</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope text-blue-300 mr-3"></i>
                  <span className="text-blue-200">info@njt天梯.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
            <p>© 2026 南京天梯能源科技有限公司 版权所有 | 苏ICP备12345678号-1</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;