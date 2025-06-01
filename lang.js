
const langData = {
  th: {
    profile:"ประวัติส่วนตัว",
    back:"กลับหน้าแรก",
    title: "เกี่ยวกับฉัน",
    aboutBtn: "เกี่ยวกับฉัน",
    workBtn: "ผลงาน",
    homeBtn: "หน้าแรก",
    homeLink: "หน้าแรก",
    aboutLink: "เกี่ยวกับฉัน",
    workLink: "ผลงาน",
    intro: "สวัสดี! ผมชื่อ นาย กวินท์ สุนทา ครับ!",
    school: "ผมเป็นนักเรียนมาจาก โรงเรียนเทพศิรินทร์ร่มเกล้า",
    moreBtn: "ดูเพิ่มเติม",
    backBtn: "กลับหน้าแรก",
    project1: "โปรเจกต์",
    desc1: "ทำ web ตารางภาพอาหาร",
    project2: "ผลงาน",
    desc2: "ประกวดแข่งศิลปะหัตกรรม",
    project3: "ผลงาน",
    desc3: "เกียรติบัตรเข้ารวมสัปดาห์คณิตศาสตร์"
  },
  en: {
    profile:"personal history",
    back:"Back to home",
    title: "About Me",
    aboutBtn: "About Me",
    workBtn: "Works",
    homeBtn: "Home",
    homeLink: "Home",
    aboutLink: "About",
    workLink: "Works",
    intro: "Hello! My name is Kawin Soonta!",
    school: "I study at Debsirinromklao School.",
    moreBtn: "Show More",
    backBtn: "Back to Home",
    project1: "Project",
    desc1: "Created a food table web project",
    project2: "Work",
    desc2: "Art & Craft Competition",
    project3: "Work",
    desc3: "Math Week Participation Certificate"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

function applyLang() {
  const lang = localStorage.getItem("lang") || "th";
  const text = langData[lang];

  for (const id in text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text[id];
  }
}

window.onload = applyLang;

  