export const patterns = [
  {
    id: "liver-qi-stagnation",
    name: "肝气郁结",
    patientCount: 133,
    percentage: 44.0,
    description: "梅核气最常见的证型，多与情志不遂有关。",
    keyFeatures: [
      { name: "咽中不适、如有异物梗阻，吐之不出，咽之不下", weight: 0.0787 },
      { name: "口干、口苦、口臭", weight: 0.0724 },
      { name: "咽干、咽痒、咽痛", weight: 0.0580 },
      { name: "舌绛", weight: 0.0577 },
      { name: "脉弦滑", weight: 0.0493 },
      { name: "纳差", weight: 0.0477 },
      { name: "咳嗽、咳痰", weight: 0.0431 },
      { name: "寐差", weight: 0.0412 },
      { name: "胸胁胀满、胀痛", weight: 0.0402 },
      { name: "恶心欲吐", weight: 0.0396 }
    ]
  },
  {
    id: "phlegm-qi-intertwinement",
    name: "痰气互结",
    patientCount: 125,
    percentage: 41.4,
    description: "痰与气交阻于咽喉，导致咽中异物感显著。",
    keyFeatures: [
      { name: "咽中不适、如有异物梗阻，吐之不出，咽之不下", weight: 0.1095 },
      { name: "与情志不遂有关的咽部异物", weight: 0.0601 },
      { name: "纳差", weight: 0.0593 },
      { name: "脉弦滑", weight: 0.0460 },
      { name: "苔白腻", weight: 0.0455 },
      { name: "口干、口苦、口臭", weight: 0.0451 },
      { name: "寐差", weight: 0.0439 },
      { name: "咳嗽、咳痰", weight: 0.0403 },
      { name: "舌淡白", weight: 0.0382 },
      { name: "胸胁胀满、胀痛", weight: 0.0375 }
    ]
  },
  {
    id: "phlegm-heat-congestion",
    name: "痰热郁结",
    patientCount: 74,
    percentage: 24.5,
    description: "痰郁化热，表现为口苦、苔黄腻等热象。",
    keyFeatures: [
      { name: "口干、口苦、口臭", weight: 0.0921 },
      { name: "咽干、咽痒、咽痛", weight: 0.0803 },
      { name: "恶心欲吐", weight: 0.0671 },
      { name: "舌绛", weight: 0.0622 },
      { name: "脉弦滑", weight: 0.0609 },
      { name: "咳嗽、咳痰", weight: 0.0533 },
      { name: "头昏、耳鸣", weight: 0.0478 },
      { name: "寐差", weight: 0.0465 },
      { name: "咽中不适、如有异物梗阻，吐之不出，咽之不下", weight: 0.0458 },
      { name: "舌红", weight: 0.0406 }
    ]
  },
  {
    id: "liver-spleen-deficiency",
    name: "肝郁脾虚",
    patientCount: 98,
    percentage: 32.5,
    description: "肝气郁结，横逆犯脾，兼见纳差、便溏等脾虚症状。",
    keyFeatures: [
      { name: "咽中不适、如有异物梗阻，吐之不出，咽之不下", weight: 0.0951 },
      { name: "纳差", weight: 0.0612 },
      { name: "大便溏烂", weight: 0.0560 },
      { name: "脉弦细", weight: 0.0499 },
      { name: "与情志不遂有关的咽部异物", weight: 0.0496 },
      { name: "寐差", weight: 0.0483 },
      { name: "苔白腻", weight: 0.0470 },
      { name: "舌绛", weight: 0.0431 },
      { name: "胸胁胀满、胀痛", weight: 0.0412 },
      { name: "神疲乏力", weight: 0.0405 }
    ]
  },
  {
    id: "yin-deficiency-fire",
    name: "阴虚火旺",
    patientCount: 47,
    percentage: 15.6,
    description: "阴液亏虚，虚火上炎，表现为咽干、五心烦热等。",
    keyFeatures: [
      { name: "咽干、咽痒、咽痛", weight: 0.1035 },
      { name: "头昏、耳鸣", weight: 0.0862 },
      { name: "口干、口苦、口臭", weight: 0.0739 },
      { name: "脉弦滑", weight: 0.0660 },
      { name: "身困乏力、嗜睡", weight: 0.0563 },
      { name: "舌淡红", weight: 0.0552 },
      { name: "大便秘结", weight: 0.0514 },
      { name: "咽中不适、如有异物梗阻，吐之不出，咽之不下", weight: 0.0496 },
      { name: "舌淡白", weight: 0.0438 },
      { name: "寐差", weight: 0.0420 }
    ]
  }
];

export const herbs = [
  { name: "茯苓", frequency: 59.8, category: "利水渗湿药" },
  { name: "半夏", frequency: 59.5, category: "化痰止咳平喘药" },
  { name: "厚朴", frequency: 52.2, category: "芳香化湿药" },
  { name: "甘草", frequency: 48.1, category: "补虚药" },
  { name: "苏梗", frequency: 45.0, category: "理气药" },
  // Top 20 data can be added here
];

export const models = [
  { name: "前馈神经网络 (FNN)", f1: 52.8, precision: 48.5, recall: 58.2 },
  { name: "随机森林 (RF)", f1: 49.1, precision: 46.2, recall: 52.4 },
  { name: "支持向量机 (SVM)", f1: 45.5, precision: 42.8, recall: 48.6 },
  { name: "逻辑回归 (LR)", f1: 42.3, precision: 40.1, recall: 44.7 }
];
