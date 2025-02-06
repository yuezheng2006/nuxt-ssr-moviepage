// 兜底数据
const fallbackData = {
  errcode: 200,
  errmsg: "服务正常",
  data: {
    singer_data: [
      {
        singerid: 115281,
        singername: "周杰伦",
        english_name: "Jay Chou",
        singerheader: "https://qnktv.ktvdaren.com/singer/115281.jpg",
        description:
          "华语流行乐坛的重要代表人物，音乐才子，擅长R&B、rap、爵士乐等多种音乐风格。",
        birth_date: "1979-01-18",
        age: 46,
        representative_works: ["晴天", "稻香", "七里香", "青花瓷"],
        awards: ["金曲奖最佳男歌手", "世界音乐大奖最受欢迎亚洲艺人"],
        birthplace: "台湾省新北市",
        wiki_url: "https://zh.wikipedia.org/wiki/周杰伦",
      },
      {
        singerid: 102141,
        singername: "陈奕迅",
        english_name: "Eason Chan",
        singerheader: "https://qnktv.ktvdaren.com/singer/102141.jpg",
        description:
          "香港著名歌手、演员，被誉为华语乐坛的'歌神'，以情感细腻的演绎著称。",
        birth_date: "1974-07-27",
        age: 51,
        representative_works: ["十年", "浮夸", "富士山下", "孤勇者"],
        awards: ["金曲奖最佳男歌手", "叱咤乐坛男歌手金奖"],
        birthplace: "香港",
        wiki_url: "https://zh.wikipedia.org/wiki/陈奕迅",
      },
      {
        singerid: 106927,
        singername: "林俊杰",
        english_name: "JJ Lin",
        singerheader: "https://qnktv.ktvdaren.com/singer/106927.jpg",
        description:
          "新加坡著名歌手、音乐人，以完美音准和细腻情感著称，被誉为'行走的CD'。",
        birth_date: "1981-03-27",
        age: 44,
        representative_works: [
          "江南",
          "可惜没如果",
          "修炼爱情",
          "不为谁而作的歌",
        ],
        awards: ["金曲奖最佳男歌手", "新加坡金曲奖最受欢迎男歌手"],
        birthplace: "新加坡",
        wiki_url: "https://zh.wikipedia.org/wiki/林俊杰",
      },
      {
        singerid: 103264,
        singername: "凤凰传奇",
        english_name: "Phoenix Legend",
        singerheader: "https://qnktv.ktvdaren.com/singer/103264.jpg",
        description:
          "中国内地流行组合，由曾毅和玲花组成，以民族风格结合流行音乐著称。",
        birth_date: "2004-09-01",
        representative_works: [
          "月亮之上",
          "荷塘月色",
          "最炫民族风",
          "奢香夫人",
        ],
        awards: ["年度最受欢迎组合", "最佳民族音乐奖"],
        birthplace: "内蒙古",
        wiki_url:
          "https://zh.wikipedia.org/wiki/凤凰传奇",
      },
      {
        singerid: 111741,
        singername: "伍佰",
        english_name: "Wu Bai",
        singerheader: "https://qnktv.ktvdaren.com/singer/111741.jpg",
        description: "台湾著名摇滚歌手，以独特的嗓音和热情的舞台表现力闻名。",
        birth_date: "1968-01-14",
        representative_works: [
          "挪威的森林",
          "突然的自我",
          "浪人情歌",
          "Last Dance",
        ],
        awards: ["金曲奖最佳摇滚专辑", "最佳现场演出奖"],
        birthplace: "台湾省高雄市",
        wiki_url: "https://zh.wikipedia.org/wiki/伍佰",
      },
      {
        singerid: 102570,
        singername: "刀郎",
        english_name: "Dao Lang",
        singerheader: "https://qnktv.ktvdaren.com/singer/102570.jpg",
        description:
          "中国内地民谣歌手，以质朴真诚的歌声和富有生活气息的歌词著称。",
        birth_date: "1971-07-22",
        representative_works: [
          "冲动的惩罚",
          "2002年的第一场雪",
          "披着羊皮的狼",
          "西海情歌",
        ],
        awards: ["最受欢迎民谣歌手", "年度最佳作词人"],
        birthplace: "新疆维吾尔自治区",
        wiki_url: "https://zh.wikipedia.org/wiki/刀郎",
      },
      {
        singerid: 100106,
        singername: "Beyond",
        english_name: "Beyond",
        singerheader: "https://qnktv.ktvdaren.com/singer/100106.jpg",
        description:
          "香港著名摇滚乐队，对华语乐坛影响深远，以反叛精神和社会关怀著称。",
        birth_date: "1983-01-01",
        representative_works: ["海阔天空", "光辉岁月", "真的爱你", "喜欢你"],
        awards: ["十大劲歌金曲奖", "最受欢迎摇滚乐队"],
        birthplace: "香港",
        wiki_url: "https://zh.wikipedia.org/wiki/Beyond",
      },
      {
        singerid: 114578,
        singername: "张信哲",
        english_name: "Jeff Chang",
        singerheader: "https://qnktv.ktvdaren.com/singer/114578.jpg",
        description: "台湾著名情歌王子，以温柔磁性的嗓音和细腻的情歌演绎著称。",
        birth_date: "1967-03-26",
        representative_works: ["过火", "别怕我伤心", "信仰", "白月光"],
        awards: ["金曲奖最佳男歌手", "最受欢迎男歌手"],
        birthplace: "台湾省台北市",
        wiki_url: "https://zh.wikipedia.org/wiki/张信哲",
      },
      {
        singerid: 112767,
        singername: "薛之谦",
        english_name: "Joker Xue",
        singerheader: "https://qnktv.ktvdaren.com/singer/112767.jpg",
        description:
          "中国内地流行歌手、音乐制作人，以幽默感和创新的音乐风格著称。",
        birth_date: "1983-07-17",
        representative_works: ["演员", "绅士", "刚刚好", "天外来物"],
        awards: ["年度最佳男歌手", "最佳词曲创作"],
        birthplace: "上海市",
        wiki_url: "https://zh.wikipedia.org/wiki/薛之谦",
      },
      {
        singerid: 107419,
        singername: "刘若英",
        english_name: "Rene Liu",
        singerheader: "https://qnktv.ktvdaren.com/singer/107419.jpg",
        description:
          "台湾著名创作歌手、演员，以温暖的声音和真挚的情感表达著称。",
        birth_date: "1970-06-01",
        representative_works: ["后来", "为爱痴狂", "很爱很爱你", "当爱在靠近"],
        awards: ["金曲奖最佳女歌手", "最佳国语专辑"],
        birthplace: "台湾省台北市",
        wiki_url: "https://zh.wikipedia.org/wiki/刘若英",
      },
      {
        singerid: 107210,
        singername: "刘德华",
        english_name: "Andy Lau",
        singerheader: "https://qnktv.ktvdaren.com/singer/107210.jpg",
        description:
          "香港著名歌手、演员，华人娱乐圈的标志性人物，以敬业精神和多才多艺著称。",
        birth_date: "1961-09-27",
        representative_works: ["忘情水", "天意", "爱你一万年", "冰雨"],
        awards: ["香港电影金像奖影帝", "十大劲歌金曲最受欢迎男歌手"],
        birthplace: "香港",
        wiki_url: "https://zh.wikipedia.org/wiki/刘德华",
      },
      {
        singerid: 114841,
        singername: "赵雷",
        english_name: "Zhao Lei",
        singerheader: "https://qnktv.ktvdaren.com/singer/114841.jpg",
        description:
          "中国内地民谣歌手，以朴实无华的创作风格和真诚的生活态度著称。",
        birth_date: "1986-07-20",
        representative_works: ["成都", "画", "南方姑娘", "理想"],
        awards: ["年度最佳民谣歌手", "最佳作词作曲"],
        birthplace: "北京市",
        wiki_url:
          "https://zh.wikipedia.org/wiki/赵雷",
      },
      {
        singerid: 103361,
        singername: "高安",
        english_name: "Gao An",
        singerheader: "https://qnktv.ktvdaren.com/singer/103361.jpg",
        description: "中国内地流行歌手，以独特的嗓音和深情的演绎风格著称。",
        birth_date: "1980-10-23",
        representative_works: ["红尘情歌", "一生无悔", "流浪的情人", "老父亲"],
        awards: ["最受欢迎男歌手", "年度金曲奖"],
        birthplace: "江西省高安市",
        wiki_url:
          "https://zh.wikipedia.org/wiki/高安",
      },
      {
        singerid: 110804,
        singername: "王杰",
        english_name: "Dave Wang",
        singerheader: "https://qnktv.ktvdaren.com/singer/110804.jpg",
        description: "台湾著名歌手，以沙哑独特的嗓音和情感深沉的歌曲著称。",
        birth_date: "1963-08-01",
        representative_works: [
          "一场游戏一场梦",
          "说谎",
          "忘记你不如忘记自己",
          "安妮",
        ],
        awards: ["十大中文金曲奖", "最受欢迎男歌手"],
        birthplace: "台湾省台北市",
        wiki_url: "https://zh.wikipedia.org/wiki/王杰",
      },
      {
        singerid: 110639,
        singername: "汪苏泷",
        english_name: "Silence Wang",
        singerheader: "https://qnktv.ktvdaren.com/singer/110639.jpg",
        description:
          "中国内地创作型歌手，以清新温暖的音乐风格和才华横溢的创作能力著称。",
        birth_date: "1990-10-07",
        representative_works: [
          "万有引力",
          "不分手的恋爱",
          "一笑倾城",
          "有点甜",
        ],
        awards: ["年度最佳创作歌手", "最受欢迎网络歌手"],
        birthplace: "黑龙江省哈尔滨市",
        wiki_url: "https://zh.wikipedia.org/wiki/汪苏泷",
      },
      {
        singerid: 115642,
        singername: "卓依婷",
        english_name: "Timi Zhuo",
        singerheader: "https://qnktv.ktvdaren.com/singer/115642.jpg",
        description:
          "台湾著名女歌手，以甜美的嗓音和清新的演绎风格著称，被誉为'校园民歌天后'。",
        birth_date: "1969-08-02",
        representative_works: [
          "恰似你的温柔",
          "爱的箴言",
          "祝你一路顺风",
          "月亮代表我的心",
        ],
        awards: ["最受欢迎女歌手", "校园民歌金曲奖"],
        birthplace: "台湾省台北市",
        wiki_url: "https://zh.wikipedia.org/wiki/卓依婷",
      },
      {
        singerid: 115253,
        singername: "周传雄",
        english_name: "Steve Chou",
        singerheader: "https://qnktv.ktvdaren.com/singer/115253.jpg",
        description:
          "台湾著名创作歌手，以深情的嗓音和细腻的情感表达著称，被誉为'情歌教父'。",
        birth_date: "1967-11-22",
        representative_works: [
          "黄昏",
          "寂寞沙洲冷",
          "有多少爱可以重来",
          "青花",
        ],
        awards: ["最佳作词作曲奖", "最受欢迎男歌手"],
        birthplace: "台湾省台北市",
        wiki_url: "https://zh.wikipedia.org/wiki/周传雄",
      },
      {
        singerid: 114593,
        singername: "张学友",
        english_name: "Jacky Cheung",
        singerheader: "https://qnktv.ktvdaren.com/singer/114593.jpg",
        description:
          "香港著名歌手、演员，被誉为'歌神'，以高亢圆润的嗓音和深厚的唱功著称。",
        birth_date: "1961-07-10",
        representative_works: [
          "吻别",
          "李香兰",
          "我等到花儿也谢了",
          "遥远的她",
        ],
        awards: ["金像奖最佳男主角", "十大劲歌金曲最受欢迎男歌手"],
        birthplace: "香港",
        wiki_url: "https://zh.wikipedia.org/wiki/张学友",
      },
      {
        singerid: 102659,
        singername: "邓紫棋",
        english_name: "G.E.M.",
        singerheader: "https://qnktv.ktvdaren.com/singer/102659.jpg",
        description: "香港著名创作型歌手，以强劲的唱功和独特的个人风格著称。",
        birth_date: "1991-08-16",
        representative_works: ["泡沫", "光年之外", "多远都要在一起", "再见"],
        awards: ["叱咤乐坛女歌手金奖", "最受欢迎女歌手"],
        birthplace: "香港",
        wiki_url: "https://zh.wikipedia.org/wiki/邓紫棋",
      },
      {
        singerid: 112695,
        singername: "许嵩",
        english_name: "Vae Xu",
        singerheader: "https://qnktv.ktvdaren.com/singer/112695.jpg",
        description:
          "中国内地创作型歌手，以独特的音乐创作风格和文艺气息的词作著称。",
        birth_date: "1986-05-14",
        representative_works: ["素颜", "有何不可", "庐州月", "雅俗共赏"],
        awards: ["年度最佳创作歌手", "最受欢迎男歌手"],
        birthplace: "安徽省合肥市",
        wiki_url: "https://zh.wikipedia.org/wiki/许嵩",
      },
    ],
  },
};

export default defineEventHandler(async (event) => {
  // 延时300ms，返回fallbackData
  await new Promise((resolve) => setTimeout(resolve, 300));
  return fallbackData;
});
