// 兜底数据
const fallbackData = {
  errcode: 200,
  errmsg: "服务正常",
  data: {
    singer_data: [
      {
        singerid: 115281,
        singername: "周杰伦",
        singerheader: "https://qnktv.ktvdaren.com/singer/115281.jpg"
      },
      {
        singerid: 102141,
        singername: "陈奕迅",
        singerheader: "https://qnktv.ktvdaren.com/singer/102141.jpg"
      },
      {
        singerid: 106927,
        singername: "林俊杰",
        singerheader: "https://qnktv.ktvdaren.com/singer/106927.jpg"
      },
      {
        singerid: 103264,
        singername: "凤凰传奇",
        singerheader: "https://qnktv.ktvdaren.com/singer/103264.jpg"
      },
      {
        singerid: 111741,
        singername: "伍佰",
        singerheader: "https://qnktv.ktvdaren.com/singer/111741.jpg"
      },
      {
        singerid: 102570,
        singername: "刀郎",
        singerheader: "https://qnktv.ktvdaren.com/singer/102570.jpg"
      },
      {
        singerid: 100106,
        singername: "Beyond",
        singerheader: "https://qnktv.ktvdaren.com/singer/100106.jpg"
      },
      {
        singerid: 114578,
        singername: "张信哲",
        singerheader: "https://qnktv.ktvdaren.com/singer/114578.jpg"
      },
      {
        singerid: 112767,
        singername: "薛之谦",
        singerheader: "https://qnktv.ktvdaren.com/singer/112767.jpg"
      },
      {
        singerid: 107419,
        singername: "刘若英",
        singerheader: "https://qnktv.ktvdaren.com/singer/107419.jpg"
      },
      {
        singerid: 107210,
        singername: "刘德华",
        singerheader: "https://qnktv.ktvdaren.com/singer/107210.jpg"
      },
      {
        singerid: 114841,
        singername: "赵雷",
        singerheader: "https://qnktv.ktvdaren.com/singer/114841.jpg"
      },
      {
        singerid: 103361,
        singername: "高安",
        singerheader: "https://qnktv.ktvdaren.com/singer/103361.jpg"
      },
      {
        singerid: 110804,
        singername: "王杰",
        singerheader: "https://qnktv.ktvdaren.com/singer/110804.jpg"
      },
      {
        singerid: 110639,
        singername: "汪苏泷",
        singerheader: "https://qnktv.ktvdaren.com/singer/110639.jpg"
      },
      {
        singerid: 115642,
        singername: "卓依婷",
        singerheader: "https://qnktv.ktvdaren.com/singer/115642.jpg"
      },
      {
        singerid: 115253,
        singername: "周传雄",
        singerheader: "https://qnktv.ktvdaren.com/singer/115253.jpg"
      },
      {
        singerid: 114593,
        singername: "张学友",
        singerheader: "https://qnktv.ktvdaren.com/singer/114593.jpg"
      },
      {
        singerid: 102659,
        singername: "邓紫棋",
        singerheader: "https://qnktv.ktvdaren.com/singer/102659.jpg"
      },
      {
        singerid: 112695,
        singername: "许嵩",
        singerheader: "https://qnktv.ktvdaren.com/singer/112695.jpg"
      }
    ]
  }
};

export default defineEventHandler(async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return fallbackData;
});