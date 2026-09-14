import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileQuestion,
  Cpu,
  GraduationCap,
  Users2,
  Building,
  CheckCheck,
  ArrowRight
} from 'lucide-react';

export const HowItWorks = () => {
  const { t, lang, setActiveTab } = useApp();

  const steps = [
    {
      num: "01",
      title: t('step_1'),
      desc: lang === 'hi' 
        ? "नागरिक अपने इलाके की समस्या (जैसे जलभराव, खराब सड़कें, कृषि संकट) फोटो और स्थान के साथ 2 मिनट में दर्ज करते हैं।"
        : "Citizens submit local grassroots issues with geolocation, affected headcount, and photographic evidence.",
      icon: <FileQuestion className="w-6 h-6 text-brand-700" />,
      tag: "Citizen Front"
    },
    {
      num: "02",
      title: t('step_2'),
      desc: lang === 'hi'
        ? "एआई कंटेंट गुणवत्ता, स्पैम, डुप्लिकेट रिपोर्ट्स और गंभीरता का विश्लेषण कर चुनौती को तुरंत मान्यता देता है।"
        : "Automated engine filters duplicates, scores urgency, maps SDG classification, and crafts a public challenge.",
      icon: <Cpu className="w-6 h-6 text-brand-700" />,
      tag: "AI Orchestration"
    },
    {
      num: "03",
      title: t('step_3'),
      desc: lang === 'hi'
        ? "एआई चुनौती के तकनीकी क्षेत्र के आधार पर निकटतम उपयुक्त इंजीनियरिंग कॉलेज (जैसे BIT, NIT) से 90%+ मैच करता है।"
        : "Algorithms match domain requirements with specialized college faculty labs (Civil, IoT, AgriTech).",
      icon: <GraduationCap className="w-6 h-6 text-brand-700" />,
      tag: "Smart Match"
    },
    {
      num: "04",
      title: t('step_4'),
      desc: lang === 'hi'
        ? "संबंधित प्राध्यापक (Mentor) और विभिन्न विभागों के प्रतिभाशाली छात्र मिलकर समाधान का दल गठित करते हैं।"
        : "Lead professors form multi-disciplinary teams (embedded systems, mechanical CAD, data science).",
      icon: <Users2 className="w-6 h-6 text-brand-700" />,
      tag: "Team Mobilization"
    },
    {
      num: "05",
      title: t('step_5'),
      desc: lang === 'hi'
        ? "टाटा स्टील, सेल, सीसीएल जैसे औद्योगिक और सीएसआर भागीदार प्रोटोटाइप के लिए अनुदान और उपकरण उपलब्ध कराते हैं।"
        : "CSR sponsors & MSMEs provide seed capital, testing rigs, and pilot manufacturing support.",
      icon: <Building className="w-6 h-6 text-brand-700" />,
      tag: "CSR & Industry"
    },
    {
      num: "06",
      title: t('step_6'),
      desc: lang === 'hi'
        ? "सत्यापित प्रोटोटाइप को उसी वार्ड या गाँव में पायलट के रूप में स्थापित किया जाता है और प्रभाव मापा जाता है।"
        : "Prototypes are field-deployed directly in the reporting community, creating transparent public ROI.",
      icon: <CheckCheck className="w-6 h-6 text-emerald-600" />,
      tag: "Verified Impact"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            Civic Pipeline Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('how_it_works_title')}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {t('how_it_works_subtitle')}
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-brand-50 border border-brand-200 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-amber-400 transition-colors">
                    {step.num}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-800 transition-colors mt-2">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-brand-700">
                <span>Phase {step.num} of 06</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActiveTab('report');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition-all"
          >
            <span>Ready to initiate Phase 01? Report a Problem</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
