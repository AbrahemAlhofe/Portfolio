export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';

export interface SystemCaseStudy {
  id?: string;
  tag: string;
  title: string;
  text: string;
  stats: string;
  service: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export interface TimelineEntry {
  id: string;
  step: string;
  title: string;
  summary: string;
  achievements: string[];
}

export interface ServiceItem {
  title: string;
  text: string;
  service: string;
  caseId: string;
}

export const content = {
  en: {
    meta: {
      siteTitle: 'Ibrahim Elhofy — Business Solutions Developer',
      siteDescription: 'Self-driven engineer leading business growth through AI, automation, and internal systems.',
      servicesTitle: 'Services — Ibrahim Elhofy',
      servicesDescription: 'Operational systems and AI-enabled workflows shaped by real production environments.',
    },
    nav: {
      logo: 'IE',
      logoTag: 'Solutions',
      switchLangText: 'النسخة العربية',
      consultation: 'Free consultation',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Ibrahim Elhofy`,
      downloadCv: 'Download CV',
      tagline: 'Business systems · AI · Automation',
    },
    hero: {
      badge: 'Business Solutions Developer · Cairo',
      title: 'I build systems that make businesses',
      titleHighlight: 'move.',
      bio: 'Self-driven engineer leading business growth through AI, automation, and internal systems—connecting operational reality with the right technology.',
      cta: 'Get a quote →',
    },
    photos: [
      { src: '/hero-photos/keynote.jpeg', alt: 'Ibrahim Elhofy speaking at an event', position: 'left-0 top-0 z-30 w-[66%] -rotate-3' },
      { src: '/hero-photos/team.jpeg', alt: 'Ibrahim Elhofy with collaborators', position: 'right-0 top-[15%] z-20 w-[62%] rotate-3' },
      { src: '/hero-photos/meeting.jpeg', alt: 'Ibrahim Elhofy at a professional meeting', position: 'bottom-0 left-[14%] z-10 w-[64%] -rotate-1' },
    ],
    systemsSection: {
      title: 'Services.',
      subtitle: 'Operational systems and AI-enabled workflows shaped by real production environments.',
      cardCta: 'Get a quote for a similar system',
      privacyNotice: 'Data in screenshots has been replaced with dummy data in respect of our clients\' privacy.',
    },
    systems: [
      {
        id: 'operations',
        tag: 'Operations transformation',
        title: 'Centralized production management',
        text: 'Replaced fragmented spreadsheets with a unified environment for production tracking, workflow coordination, permissions, and reporting.',
        stats: '81,051 rows · 5+ databases · 40+ employees',
        service: 'Internal operations system',
        images: [
          { src: '/services/povo-centralized-production-management.png', alt: 'Povo Studios centralized production-management control panel', caption: 'Centralized production-management control panel' },
          { src: '/services/povo-production-record-detail.png', alt: 'Production record detail view & audit trail', caption: 'Production record detail view & audit trail' },
          { src: '/services/povo-queue-versions.png', alt: 'Queue versioning & stage transitions', caption: 'Queue versioning & stage transitions' },
        ],
      },
      {
        id: 'ai-books',
        tag: 'AI & automation',
        title: 'AI-powered book production',
        text: 'A repeatable operation combining structured AI writing, production tracking, automated PDF creation, and employee workflows.',
        stats: '50+ books · 250–320 pages · ~$3 per book',
        service: 'AI production and automation',
        images: [
          { src: '/services/povo-ai-workflow-automation.png', alt: 'Automated textbook generation workflow pipeline in n8n', caption: 'Automated generation & export pipeline' },
          { src: '/services/povo-ai-textbooks-dashboard.png', alt: 'Anova Textbooks production management dashboard', caption: 'Textbooks tracking & review dashboard' },
        ],
      },
      {
        id: 'echo',
        tag: 'Platform & QA',
        title: 'Custom PDF proofing & QA systems',
        text: 'Purpose-built collaborative document review and annotation platforms designed to eliminate comment loss, handle complex Arabic typography, and streamline high-volume editorial QA.',
        stats: '180,000+ annotations/yr · 0% data loss · AWS + Next.js + PostgreSQL',
        service: 'PDF proofing system',
        images: [
          { src: '/services/echo-pdf-proofing-workspace.png', alt: 'PDF proofing workspace with outlines and threaded review', caption: 'Document outlines, PDF text highlight, and threaded annotation panel' },
          { src: '/services/echo-pdf-comment-thread.png', alt: 'In-document contextual comment thread with error classification', caption: 'In-document feedback threads with color-coded classification tags' },
          { src: '/services/echo-pdf-share-dialog.png', alt: 'Document viewer link sharing and role-based access control', caption: 'Role-based viewer link sharing and document access control' },
        ],
      },
    ] as SystemCaseStudy[],
    timelineSection: {
      title: 'Professional experience.',
      subtitle: 'A chronological record of self-initiated operational transformation, AI operations, and technical leadership—measured by business outcomes.',
      company: 'Povo Studios',
      role: 'Business Solutions Developer · R&D Department',
      period: 'Aug 2023 – Present',
      milestonePrefix: 'Milestone',
    },
    timeline: [
      {
        id: 'operations',
        step: '01',
        title: 'Business process transformation & operational excellence',
        summary: 'Independently analyzed production operations, identified bottlenecks and fragmented workflows, and led process reengineering, digital adoption, and continuous optimization.',
        achievements: [
          'Increased monthly production output 92%, from 456 to 876 production hours.',
          'Improved QA productivity 40% and reduced reporting turnaround from 3 days to minutes.',
          'Led rollout, employee training, and iterative improvement for 40+ employees.',
          'Delivered scalable, cost-efficient digital operations with role-based access and version history.',
        ],
      },
      {
        id: 'ai-operations',
        step: '02',
        title: 'AI strategy, workflow automation & operations development',
        summary: 'Established a new AI-enabled production function from the ground up, defining operating procedures, training, performance tracking, and automated delivery workflows.',
        achievements: [
          'Produced and delivered 50+ AI-generated books published on Abjjad.',
          'Created structured AI instructions for 250-320 page long-form content.',
          'Integrated workflow automation and standardized PDF production.',
          'Reached approximately $3 variable production cost per book.',
        ],
      },
      {
        id: 'technical-leadership',
        step: '03',
        title: 'Technical leadership, product development & observability',
        summary: 'Led a technical team in translating operational feedback into reliable, scalable, and accessible product priorities for a high-volume production environment.',
        achievements: [
          'Established structured team workflows and pull-request reviews.',
          'Integrated AWS, Redis, PostgreSQL, and Sentry-based observability.',
          'Improved support for Arabic workflows, unstable connectivity, and modest hardware.',
          'Supported a QA environment handling approximately 180,000 annotations annually.',
        ],
      },
    ] as TimelineEntry[],
    bottomCta: {
      title: 'Have an operation that has outgrown spreadsheets?',
      consultation: 'Book a free 1-hour consultation',
      quote: 'Get a quote',
    },
    servicesPage: {
      badge: 'Services for growing operations',
      title: 'Your workflow should be an advantage—not a daily workaround.',
      description: 'I turn fragmented processes into reliable internal systems, from operational diagnosis through implementation and team adoption.',
      serviceLabel: 'Service',
      quoteBtn: 'Get a quote',
      relatedCase: 'Related case',
      items: [
        { title: 'Internal operations systems', text: 'Centralized production tracking, workflow coordination, permissions, dashboards, and reporting.', service: 'Internal operations system', caseId: 'operations' },
        { title: 'AI production & automation', text: 'Structured AI workflows, repeatable content pipelines, and human-in-the-loop operations.', service: 'AI production and automation', caseId: 'ai-books' },
        { title: 'PDF proofing & QA systems', text: 'Purpose-built document annotation, proofreading workflows, Arabic text handling, and zero-data-loss quality platforms.', service: 'PDF proofing system', caseId: 'echo' },
        { title: 'Business-critical platforms', text: 'Purpose-built internal software for real reliability, language, scale, and workflow needs.', service: 'Custom business platform', caseId: 'echo' },
        { title: 'QA workflow redesign', text: 'Error reporting, review flows, traceability, and a quality analytics foundation.', service: 'QA workflow redesign', caseId: 'echo' },
        { title: 'Process analysis & redesign', text: 'Operational mapping, bottleneck discovery, requirements definition, and transformation roadmaps.', service: 'Process analysis and redesign', caseId: 'operations' },
        { title: 'Training & change enablement', text: 'Practical rollout, training, documentation, and continuous optimization.', service: 'Training and change enablement', caseId: 'operations' },
      ] as ServiceItem[],
    },
  },
  ar: {
    meta: {
      siteTitle: 'إبراهيم الحوفي — مطور حلول وأنظمة الأعمال',
      siteDescription: 'أبني أنظمة تشغيل داخلية وأتمتة بالذكاء الاصطناعي تضاعف إنتاجية الشركات وتنهي فوضى العمل اليدوي.',
      servicesTitle: 'الخدمات والحلول — إبراهيم الحوفي',
      servicesDescription: 'حلول عملية للشركات المتنامية: من تشخيص اختناقات التشغيل إلى بناء الأنظمة الداخلية وأتمتة الذكاء الاصطناعي وتدريب الفريق.',
    },
    nav: {
      logo: 'IE',
      logoTag: 'حلول الأعمال',
      switchLangText: 'English',
      consultation: 'احجز استشارة مجانية',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} إبراهيم الحوفي`,
      downloadCv: 'تحميل السيرة الذاتية (CV)',
      tagline: 'أنظمة تشغيل · ذكاء اصطناعي · أتمتة',
    },
    hero: {
      badge: 'مطور حلول وأنظمة الأعمال · القاهرة',
      title: 'أبني أنظمة تحوّل فوضى التشغيل إلى',
      titleHighlight: 'نمو أسرع.',
      bio: 'أساعد الشركات على التخلص من العمل اليدوي المشتت ومضاعفة إنتاجيتها، عبر بناء أنظمة إدارة داخلية وأتمتة ذكية مصممة على مقاس احتياجات فريقك الفعلية.',
      cta: 'احصل على عرض سعر ←',
    },
    photos: [
      { src: '/hero-photos/keynote.jpeg', alt: 'إبراهيم الحوفي يتحدث في فعالية', position: 'right-0 top-0 z-30 w-[66%] rotate-3' },
      { src: '/hero-photos/team.jpeg', alt: 'إبراهيم الحوفي مع فريق العمل', position: 'left-0 top-[15%] z-20 w-[62%] -rotate-3' },
      { src: '/hero-photos/meeting.jpeg', alt: 'إبراهيم الحوفي في اجتماع عمل', position: 'bottom-0 right-[14%] z-10 w-[64%] rotate-1' },
    ],
    systemsSection: {
      title: 'حلول على أرض الواقع.',
      subtitle: 'أنظمة تشغيل داخلية ومسارات أتمتة بالذكاء الاصطناعي بُنيت داخل بيئات إنتاج حقيقية لتوفير الوقت، وخفض التكلفة، ومضاعفة الإنجاز.',
      cardCta: 'اطلب نظاماً مشابهاً لشركتك',
      privacyNotice: 'تم استبدال البيانات في لقطات الشاشة ببيانات افتراضية حفاظاً على سرية بيانات عملائنا.',
    },
    systems: [
      {
        id: 'operations',
        tag: 'تطوير العمليات والتشغيل',
        title: 'نظام مركزي لإدارة الإنتاج والتشغيل',
        text: 'استبدال جداول الإكسيل المتفرقة بنظام سحابي موحد تم بناؤه وإطلاقه في 3 أيام فقط؛ يربط فرق العمل، وينظم الصلاحيات، ويُصدر تقارير الإدارة في دقائق بدلاً من أيام—مما ضاعف الإنتاجية بنسبة 92%.',
        stats: '81,051 سجلاً · +5 قواعد بيانات مترابطة · +40 موظفاً · بتكلفة 40$/شهرياً فقط',
        service: 'نظام إدارة تشغيل داخلي',
        images: [
          { src: '/services/povo-centralized-production-management.png', alt: 'لوحة التحكم المركزية لإدارة الإنتاج', caption: 'لوحة تحكم مركزية لمتابعة سير الإنتاج لحظة بلحظة' },
          { src: '/services/povo-production-record-detail.png', alt: 'تفاصيل سجل الإنتاج وسجل التعديلات', caption: 'تفاصيل سجل الإنتاج مع تتبع كامل لتاريخ التعديلات' },
          { src: '/services/povo-queue-versions.png', alt: 'إدارة إصدارات الملفات ومراحل العمل', caption: 'تنظيم مراحل العمل وإصدارات الملفات ومنع تضارب النسخ' },
        ],
      },
      {
        id: 'ai-books',
        tag: 'الذكاء الاصطناعي والأتمتة',
        title: 'خطوط إنتاج المحتوى والكتب بالذكاء الاصطناعي',
        text: 'تأسيس منظومة إنتاج متكاملة تجمع بين هندسة الأوامر المتقدمة (Prompt Engineering)، ولوحة متابعة المهام، والأتمتة الكاملة لتحويل المخرجات إلى ملفات PDF منسقة وجاهزة للنشر بتكلفة لا تتجاوز 3$ للكتاب.',
        stats: '+50 كتاباً منشوراً على "أبجد" · 250–320 صفحة للكتاب · ~3$ تكلفة إنتاج الكتاب',
        service: 'الإنتاج والأتمتة بالذكاء الاصطناعي',
        images: [
          { src: '/services/povo-ai-workflow-automation.png', alt: 'مسار أتمتة وتوليد الكتب في n8n', caption: 'خط أتمتة متكامل لمعالجة المحتوى وتصدير ملفات PDF تلقائياً' },
          { src: '/services/povo-ai-textbooks-dashboard.png', alt: 'لوحة متابعة ومراجعة إنتاج الكتب', caption: 'لوحة تحكم مركزية لمتابعة الإنجاز ومراجعة تسليمات الفريق' },
        ],
      },
      {
        id: 'echo',
        tag: 'منصات مخصصة وضمان الجودة',
        title: 'منصة مخصصة لمراجعة وتدقيق ملفات PDF (Echo)',
        text: 'منصة داخلية صُممت خصيصاً للقضاء على مشاكل الأدوات الجاهزة؛ تدعم اللغة العربية بالكامل، وتمنع ضياع أي ملاحظة (0% فقدان بيانات)، وتعمل بكفاءة وسرعة حتى مع الإنترنت الضعيف والأجهزة المتواضعة.',
        stats: '+180,000 ملاحظة سنوياً · 0% فقدان بيانات · AWS + Next.js + PostgreSQL',
        service: 'منصة مراجعة وتدقيق PDF',
        images: [
          { src: '/services/echo-pdf-proofing-workspace.png', alt: 'بيئة عمل مراجعة وتدقيق ملفات PDF', caption: 'واجهة تدقيق متكاملة: فهرس المستند، وتحديد النصوص، وسلاسل الملاحظات' },
          { src: '/services/echo-pdf-comment-thread.png', alt: 'نظام الملاحظات السياقية وتصنيف الأخطاء', caption: 'ملاحظات مرتبطة بسياق النص مع تصنيف ذكي للأخطاء لتحليل الجودة' },
          { src: '/services/echo-pdf-share-dialog.png', alt: 'إدارة مشاركة المستندات وصلاحيات الفريق', caption: 'تحكم دقيق في صلاحيات العرض والتعديل ومشاركة الروابط حسب دور كل موظف' },
        ],
      },
    ] as SystemCaseStudy[],
    timelineSection: {
      title: 'خبرة تصنع فارقاً في الأرقام.',
      subtitle: 'سجل عملي من المبادرة بتحويل العمليات، وتأسيس خطوط إنتاج بالذكاء الاصطناعي، وقيادة الفرق التقنية لتحقيق نتائج أعمال ملموسة.',
      company: 'بوفو ستوديوز (Povo Studios)',
      role: 'مهندس برمجيات ومطور حلول أعمال (Full Stack) · قسم البحث والتطوير (R&D)',
      period: 'أغسطس 2023 – حتى الآن',
      milestonePrefix: 'المرحلة',
    },
    timeline: [
      {
        id: 'operations',
        step: '01',
        title: 'تطوير منظومة التشغيل ومضاعفة الإنتاجية',
        summary: 'بادرت بتحليل شامل لعمليات الإنتاج واكتشاف نقاط الاختناق وتشتت المهام، ثم قدت مبادرة تحول رقمي شاملة على مستوى الشركة—من بناء النظام في 3 أيام وحتى تدريب الفريق واعتماده بالكامل.',
        achievements: [
          'مضاعفة الإنتاج الشهري بنسبة 92% (من 456 إلى 876 ساعة إنتاج شهرياً).',
          'رفع إنتاجية قسم ضمان الجودة (QA) بنسبة 40%، وتقليص وقت إعداد تقارير الإدارة من 3 أيام إلى دقائق معدودة.',
          'بناء وإطلاق نظام مركزي في 3 أيام يربط +5 قواعد بيانات (+81,000 سجل) بتكلفة 40$ شهرياً مع استغلال +2.5 تيرابايت تخزين مجاني.',
          'قيادة التغيير وتدريب أكثر من 40 موظفاً من خلفيات غير تقنية، مع نظام صلاحيات دقيق وسجل استرجاع غير محدود للتعديلات.',
        ],
      },
      {
        id: 'ai-operations',
        step: '02',
        title: 'تأسيس وتوسيع قسم إنتاج الكتب بالذكاء الاصطناعي',
        summary: 'حولت فرصة عمل ناشئة إلى قسم إنتاج متكامل ومستدام من الصفر؛ شمل وضع إجراءات التشغيل القياسية (SOPs)، وتدريب الموظفين، وهندسة الأوامر، وأتمتة مسار النشر.',
        achievements: [
          'إنتاج وتسليم أكثر من 50 كتاباً كاملاً (250–320 صفحة للكتاب) تم نشرها على منصة "أبجد".',
          'الوصول بتكلفة الإنتاج المتغيرة إلى حوالي 3 دولارات فقط للكتاب الواحد.',
          'تصميم نظام كتابة ذكي متعدد المراحل عبر Google AI Studio مدمج بهيكلة HTML لتوحيد تنسيق المحتوى الطويل.',
          'أتمتة خط الإنتاج لتحويل محادثات الذكاء الاصطناعي تلقائياً إلى ملفات PDF منسقة ومدمجة بالأغلفة مع لوحة متابعة مركزية.',
        ],
      },
      {
        id: 'technical-leadership',
        step: '03',
        title: 'القيادة التقنية وبناء منصة ضمان الجودة المخصصة (Echo)',
        summary: 'تطورت مسؤولياتي من العمل كمهندس البرمجيات الوحيد في الشركة إلى قيادة فريق تقني متخصص لبناء منصة "Echo" الداخلية، وتطويع التكنولوجيا لخدمة احتياجات الإنتاج الفعلية بدلاً من التكيف مع قصور البرامج الجاهزة.',
        achievements: [
          'القضاء نهائياً على مشكلة ضياع 5–6% من ملاحظات الجودة التي كانت تسببها الأدوات الخارجية وتؤدي لإعادة العمل.',
          'قيادة تطوير بنية تحتية عالية الاعتمادية (AWS, Next.js, Redis, PostgreSQL) تستوعب نحو 180,000 ملاحظة سنوياً (20–35 ملاحظة/ساعة للموظف).',
          'تحسين تجربة الاستخدام لتدعم النصوص العربية بالكامل وتعمل بكفاءة عالية مع الإنترنت غير المستقر والأجهزة المتواضعة.',
          'إرساء ممارسات هندسية احترافية تشمل مراجعات الكود (PR Reviews)، والرقابة اللحظية على الأخطاء عبر Sentry، وتأسيس قاعدة لتحليلات الجودة.',
        ],
      },
    ] as TimelineEntry[],
    bottomCta: {
      title: 'هل كبرت أعمالك وأصبحت جداول الإكسيل تعطّل فريقك؟',
      consultation: 'احجز استشارة مجانية لمدة ساعة',
      quote: 'احصل على عرض سعر',
    },
    servicesPage: {
      badge: 'حلول عملية للشركات المتنامية',
      title: 'نظام عملك يجب أن يكون نقطة قوتك، لا عبئاً يومياً على فريقك.',
      description: 'أحوّل العمليات المبعثرة والعمل اليدوي المرهق إلى أنظمة داخلية ذكية وموثوقة—بدايةً من تشخيص المشكلة على أرض الواقع وحتى بناء النظام وتدريب فريقك عليه.',
      serviceLabel: 'خدمة',
      quoteBtn: 'احصل على عرض سعر',
      relatedCase: 'شاهد دراسة الحالة',
      items: [
        { title: 'أنظمة إدارة التشغيل والإنتاج', text: 'بديل متكامل لجداول البيانات يجمع متابعة الإنتاج، وتوزيع المهام، والصلاحيات، ولوحات التحكم، وتقارير الإدارة اللحظية في مكان واحد.', service: 'نظام إدارة تشغيل داخلي', caseId: 'operations' },
        { title: 'أتمتة العمليات والإنتاج بالذكاء الاصطناعي', text: 'تحويل المهام المتكررة وإنتاج المحتوى إلى خطوط عمل ذكية ومؤتمتة بإشراف بشري، لتوفير الوقت وخفض التكاليف مع الحفاظ على الجودة.', service: 'الإنتاج والأتمتة بالذكاء الاصطناعي', caseId: 'ai-books' },
        { title: 'منصات مراجعة وتدقيق المستندات (PDF)', text: 'أنظمة تدقيق ومراجعة تفاعلية تدعم اللغة العربية بالكامل، وتمنع ضياع أي ملاحظة، وتسرّع التواصل بين فرق الإنتاج والجودة.', service: 'منصة مراجعة وتدقيق PDF', caseId: 'echo' },
        { title: 'تطوير منصات وأنظمة داخلية مخصصة', text: 'بناء برمجيات مصممة خصيصاً لطبيعة عملك عندما تعجز الأدوات الجاهزة عن تلبية متطلبات الاعتمادية، أو اللغة، أو حجم العمل.', service: 'منصة أعمال مخصصة', caseId: 'echo' },
        { title: 'تطوير منظومة ضمان الجودة (QA)', text: 'إعادة هيكلة دورة المراجعة واكتشاف الأخطاء، وبناء نظام تتبع وتصنيف دقيق يرفع كفاءة فرق الجودة ويمنع تكرار الأخطاء.', service: 'تطوير منظومة ضمان الجودة', caseId: 'echo' },
        { title: 'تحليل العمليات وإعادة هندستها', text: 'دراسة سير العمل الحالي على أرض الواقع، واكتشاف نقاط الاختناق وهدر الوقت، ووضع خارطة طريق عملية للتحول الرقمي بأفضل عائد على التكلفة.', service: 'تحليل العمليات وإعادة هندستها', caseId: 'operations' },
        { title: 'تدريب الفرق وإدارة التغيير', text: 'ضمان انتقال فريقك (بمن فيهم غير التقنيين) إلى الأنظمة الجديدة بسلاسة تامة، عبر التدريب العملي، والتوثيق الواضح، والتحسين المستمر.', service: 'تدريب الفرق وإدارة التغيير', caseId: 'operations' },
      ] as ServiceItem[],
    },
  },
} as const;

export function getTranslations(locale?: string) {
  const lang: Locale = locale === 'ar' ? 'ar' : 'en';
  return { lang, t: content[lang] };
}

export function getLocalePath(path: string, targetLocale: Locale): string {
  const cleanPath = path.replace(/^\/ar(\/|$)/, '/');
  if (targetLocale === 'ar') {
    return cleanPath === '/' ? '/ar/' : `/ar${cleanPath}`;
  }
  return cleanPath;
}
