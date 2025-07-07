import type { ButtonItem } from "@/types/types"

// بيانات الدروس
export const lessons: {
lesson_one: ButtonItem[];
lesson_two: ButtonItem[];
lesson_three: ButtonItem[];
lesson_four: ButtonItem[];
lesson_five: ButtonItem[];
lesson_six: ButtonItem[];
lesson_seven: ButtonItem[];
lesson_eight: ButtonItem[];
lesson_nine: ButtonItem[];
lesson_ten: ButtonItem[];
lesson_eleven: ButtonItem[];
lesson_twelve: ButtonItem[];
lesson_thirteen: ButtonItem[];
lesson_fourteen: ButtonItem[];
lesson_fifteen: ButtonItem[];
lesson_sixteen: ButtonItem[];
lesson_seventeen: ButtonItem[];
lesson_eighteen: ButtonItem[];
lesson_nineteen: ButtonItem[];
} = {
  lesson_one: [
    { type: "button", id: "1vid0", text: "الأهداف", icon: "intro", time: "" },
    { type: "button", id: "1intro", text: "تمهيد", icon: "intro" },
    { type: "button", id: "1act1", text: "نشاط", icon: "activity" },
    { type: "button", id: "1vid1", text: "مفهوم التخطيط", icon: "video" },
    { type: "button", id: "1vid2", text: " أهمية التخطيط", icon: "video" },
    { type: "button", id: "1act2", text: "نشاط", icon: "activity" },
    { type: "button", id: "1vid3", text: "مستويات التخطيط", icon: "video" },
    { type: "button", id: "1vid4", text: "تقسيم التخطيط حسب الزمن", icon: "video" },
    { type: "button", id: "1act3", text: "محكات الأداء الخاصة بمهارة التخطيط", icon: "activity" },
    { type: "button", id: "1act4", text: "التقويم", icon: "quiz" },
    { type: "button", id: "1act5", text: "النشاط الإثرائي", icon: "activity" },

  ],
  lesson_two: [
    { type: "button", id: "2vid0", text: "الأهداف", icon: "video" },
    { type: "button", id: "2act1", text: "تمهيد", icon: "activity" },
    { type: "button", id: "2act2", text: "مفهوم مهارة تحليل المحتوى", icon: "activity" },
    { type: "button", id: "2vid1", text: "مفهوم تحليل المحتوى ", icon: "video" },
    { type: "button", id: "2vid2", text: "أهمية تحليل المحتوى", icon: "video" },
    { type: "button", id: "2act3", text: "مراحل وجوانب تحليل المحتوى", icon: "activity" },
    { type: "button", id: "2vid3", text: "مراحل وجوانب تحليل المحتوى", icon: "video" },
    { type: "button", id: "2vid4", text: "المفاهيم", icon: "video" },
    { type: "button", id: "2vid5", text: "الحقائق", icon: "video" },
    { type: "button", id: "2vid6", text: "القيم", icon: "video" },
    { type: "button", id: "2vid7", text: "التعميمات والمبادئ", icon: "video" },
    { type: "button", id: "2vid8", text: "النظريات والفروض", icon: "video" },
    { type: "button", id: "2vid9", text: "المهارات", icon: "video" },
    { type: "button", id: "2act4", text: "مثال ", icon: "activity" },
    { type: "button", id: "2act5", text: "محكات الأداء", icon: "activity" },
    { type: "button", id: "2act6", text: "التقويم", icon: "activity" },
    { type: "button", id: "2act7", text: "النشاط الأثرائي", icon: "activity" },
  ],
  lesson_three: [
    { type: "button", id: "3vid0", text: "الأهداف", icon: "video" },
    { type: "button", id: "3act1", text: "تمهيد", icon: "activity" },
    { type: "button", id: "3act2", text: "الأهداف مفهومها ومصادر اشتقاقها", icon: "activity" },
    { type: "button", id: "3vid1", text: "مفهوم الأهداف التعليمية ", icon: "video" },
    { type: "button", id: "3vid2", text: "مصادر اشتقاق الأهداف", icon: "video" },
    { type: "button", id: "3act3", text: "مستويات الأهداف حسب عموميتها", icon: "activity" },
    { type: "button", id: "3vid3", text: "أنواع الأهداف التربوية", icon: "video" },
    { type: "button", id: "3vid4", text: "أهمية تحديد الأهداف التعليمية", icon: "video" },
    { type: "button", id: "3vid5", text: "الأهداف السلوكية", icon: "video" },
    { type: "button", id: "3vid6", text: "شروط الهدف السلوكي", icon: "video" },
    { type: "button", id: "3vid7", text: "الأخطاء الشائعة في صياغة الأهداف السلوكية", icon: "video" },
    { type: "button", id: "3act4", text: "تصنيف الأهداف التعليمية ", icon: "activity" },
    { type: "button", id: "3vid8", text: "تصنيف الأهداف التعليمية", icon: "video" },
    { type: "button", id: "3vid9", text: "المجال الوجداني", icon: "video" },
    { type: "button", id: "3vid10", text: "المجال الحركي", icon: "video" },
    { type: "button", id: "3act5", text: "محكات الأداء", icon: "activity" },
    { type: "button", id: "3act6", text: "التقويم", icon: "activity" },
    { type: "button", id: "3act7", text: "النشاط الأثرائي", icon: "activity" },
  ],
lesson_four: [
    { type: "button", id: "4vid0", text: "الأهداف", icon: "video" },
    { type: "button", id: "4act1", text: "تمهيد", icon: "activity" },
    { type: "button", id: "4act2", text: "مفهوم خطة الدرس", icon: "activity" },
    { type: "button", id: "4vid1", text: "تعريف خطة الدرس ", icon: "video" },
    { type: "button", id: "4vid2", text: "مبادئ التخطيط للتدريس", icon: "video" },
    { type: "button", id: "4act3", text: "نشاط أنواع التخطيط", icon: "activity" },
    { type: "button", id: "4vid3", text: "أنواع مهارات التخطيط للتدريس", icon: "video" },
    { type: "button", id: "4vid4", text: "الخطة التدريسية السنوية", icon: "video" },
    { type: "button", id: "4vid5", text: "الخطة التدريسية اليومية", icon: "video" },
    { type: "button", id: "4vid6", text: "أخطاء شائعة", icon: "video" },
    { type: "button", id: "4act4", text: "محكات الأداء", icon: "activity" },
    { type: "button", id: "4act5", text: "التقويم", icon: "activity" },
    { type: "button", id: "4act6", text: "النشاط الأثرائي", icon: "activity" },
], lesson_five: [], lesson_six: [],lesson_seven: [], lesson_eight: [], lesson_nine: [], lesson_ten: [], lesson_eleven: [], lesson_twelve: [],
lesson_thirteen: [], lesson_fourteen: [], lesson_fifteen: [], lesson_sixteen: [], lesson_seventeen: [], lesson_eighteen: [], lesson_nineteen: [],
}


// روابط الفيديوهات
export const videoMap: Record<string, string> = {
  "1vid0": "/videos/vid1/vid0.mp4",
  "1vid1": "/videos/vid1/vid1.mp4",
  "1vid2": "/videos/vid1/vid2.mp4",
  "1vid3": "/videos/vid1/vid3.mp4",
  "1vid4": "/videos/vid1/vid4.mp4",
  "2vid0": "/videos/vid2/vid0.mp4",
  "2vid1": "/videos/vid2/vid1.mp4",
  "2vid2": "/videos/vid2/vid2.mp4",
  "2vid3": "/videos/vid2/vid3.mp4",
  "2vid4": "/videos/vid2/vid4.mp4",
  "2vid5": "/videos/vid2/vid5.mp4",
  "2vid6": "/videos/vid2/vid6.mp4",
  "2vid7": "/videos/vid2/vid7.mp4",
  "2vid8": "/videos/vid2/vid8.mp4",
  "2vid9": "/videos/vid2/vid9.mp4",
  "3vid0": "/videos/vid3/vid0.mp4",
  "3vid1": "/videos/vid3/vid1.mp4",
  "3vid2": "/videos/vid3/vid2.mp4",
  "3vid3": "/videos/vid3/vid3.mp4",
  "3vid4": "/videos/vid3/vid4.mp4",
  "3vid5": "/videos/vid3/vid5.mp4",
  "3vid6": "/videos/vid3/vid6.mp4",
  "3vid7": "/videos/vid3/vid7.mp4",
  "3vid8": "/videos/vid3/vid8.mp4",
  "3vid9": "/videos/vid3/vid9.mp4",
  "3vid10": "/videos/vid3/vid10.mp4",
  "4vid0": "/videos/vid4/vid0.mp4",
  "4vid1": "/videos/vid4/vid1.mp4",
  "4vid2": "/videos/vid4/vid2.mp4",
  "4vid3": "/videos/vid4/vid3.mp4",
  "4vid4": "/videos/vid4/vid4.mp4",
  "4vid5": "/videos/vid4/vid5.mp4",
  "4vid6": "/videos/vid4/vid6.mp4",
}

// روابط النماذج
export const formLinks: Record<string, string> = {
  "1intro": "https://forms.gle/3f8eaQ51JqpgpEt2A",
  "1act1": "https://forms.gle/Pb1UgCKu6vJaxCFy8",
  "1act2": "https://forms.gle/bGHsiW5rhti2Xs516",
  "1act3": "https://forms.gle/ZTkr1xuzs5RHR2jF7",
  "1act4": "https://forms.gle/GHYQHqLqSxJ75CLQ7",
  "1act5": "https://forms.gle/ENpKfL43qacEA5h99",

/*******************************************************************/
  "2act1": "https://forms.gle/hSGUJWGp3kW5pp6d6",
  "2act2": "https://forms.gle/o2onQKwmkqyGFdaY6",
  "2act3": "https://forms.gle/JnESGgUuoxrtRTEo7",
  "2act4": "/files/file1.pdf",
  "2act5": "https://forms.gle/uGgiwevayDeP6YrTA",
  "2act6": "https://forms.gle/rwUjGL5rVdkiAMwY6",
  "2act7": "https://forms.gle/M4BeK6bcTeqHXNLb8",

/*******************************************************************/
  "3act1": "https://forms.gle/qvbo7QbPC3yXVmJ18",
  "3act2": "https://forms.gle/Mi88Se39JQF8zQUN7",
  "3act3": "https://forms.gle/eXY9Ri2rWyor2oZj7",
  "3act4": "https://forms.gle/Wjy3QJ52P85DSNjm8",
  "3act5": "https://forms.gle/M5ZgawBQ3HD4WA5bA",
  "3act6": "https://forms.gle/CuoihcWhJ2ApnRHx6",
  "3act7": "https://forms.gle/bgikgkggoNbtnYjp9",
  /*******************************************************************/
  "4act1": "https://forms.gle/VDy7J31WwF7srxRL8",
  "4act2": "https://forms.gle/pZj9xqQygJo78KC76",
  "4act3": "https://forms.gle/uHZfY5bXvmQ576wQ6",
  "4act4": "https://forms.gle/tGi6sL183yNTU8AXA",
  "4act5": "https://forms.gle/L7pvNHXFE3xnGVw69",
  "4act6": "https://forms.gle/4GpiRWYiuvfzpj4K6",

}
