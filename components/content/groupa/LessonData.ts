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
    { type: "button", id: "1act1", text: "نشاط تمهيدي", icon: "activity" },
    { type: "button", id: "1vid1", text: " مفهوم الكفايات الرقمية", icon: "video" },
    { type: "button", id: "1act2", text: "مفهوم الشبكة العالمية", icon: "activity" },
    { type: "button", id: "1vid2", text: " المقصود بالشبكة العالمية", icon: "video" },
    { type: "button", id: "1act3", text: "أشهر محركات البحث", icon: "activity" },
    { type: "button", id: "1vid3", text: "محركات البحث ", icon: "video" },
    { type: "button", id: "1vid4", text: "الخطوات الأساسية للبحث", icon: "video" },
    { type: "button", id: "1act4", text: "تطبيق عملي", icon: "quiz" },
    { type: "button", id: "1act5", text: "نشاط البحث في الشبكة العالمية ", icon: "activity" },
    { type: "button", id: "1vid5", text: "دور البحث في الشبكة العالمية", icon: "video" },
    { type: "button", id: "1act6", text: "التقويم", icon: "quiz" },
    { type: "button", id: "1act7", text: "نشاط إثرائي ", icon: "activity" },
  ],
  lesson_two: [
    { type: "button", id: "2vid0", text: "الأهداف", icon: "intro", time: "" },
    { type: "button", id: "2act1", text: "نشاط تمهيدي", icon: "activity" },
    { type: "button", id: "2vid1", text: " الحوسبة السحابية", icon: "video" },
    { type: "button", id: "2act2", text: "نشاط التخزين السحابي", icon: "activity" },
    { type: "button", id: "2vid2", text: " مفهوم الحوسبة السحابية ", icon: "video" },
    { type: "button", id: "2vid3", text: "مميزات الحوسبة السحابية ", icon: "video" },
    { type: "button", id: "2vid4", text: "خصائص الحوسبة السحابية", icon: "video" },
    { type: "button", id: "2vid5", text: "أنواع الحوسبة السحابية", icon: "video" },
    { type: "button", id: "2act3", text: "نشاط طرق التخزين", icon: "activity" },
    { type: "button", id: "2vid6", text: "الأطراف المكونة لنظام", icon: "video" },
    { type: "button", id: "2vid7", text: "خطوات التخزين السحابي", icon: "video" },
    { type: "button", id: "2act4", text: "تطبيق عملي", icon: "quiz" },
    { type: "button", id: "2act5", text: "نشاط خدمات الحوسبة السحابية", icon: "activity" },
    { type: "button", id: "2vid8", text: "خدمات الحوسبة السحابية ", icon: "video" },
    { type: "button", id: "2vid9", text: "المؤسسات التعليمية والحوسبة السحابية", icon: "video" },
    { type: "button", id: "2vid10", text: "دور الحوسبة السحابية", icon: "video" },
    { type: "button", id: "2act6", text: "التقويم", icon: "quiz" },
    { type: "button", id: "2act7", text: "نشاط إثرائي ", icon: "activity" },

  ],
  lesson_three: [

  ],
lesson_four: [

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
  "1vid5": "/videos/vid1/vid5.mp4",
  /*******************************************************************/
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
  "2vid10": "/videos/vid2/vid10.mp4",
  /*******************************************************************/
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
  /*******************************************************************/

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
  "1act1": "https://forms.gle/JT8CDDzGvnyhkkUk7",
  "1act2": "https://forms.gle/mfw7GSqdR5p4C6Qw6",
  "1act3": "https://forms.gle/9eHqCV7FGVhkQNoAA",
  "1act4": "https://forms.gle/ePXSGU3Ve6SWDTEb6",
  "1act5": "https://forms.gle/mQ9KgjGSL3xMMpuZ8",
  "1act6": "https://forms.gle/t2AnYWPZ1XPRKSoy8",
  "1act7": "https://forms.gle/4Ah7VWGusYr9cUju9",

/*******************************************************************/
  "2act1": "https://forms.gle/LLte3yhT9ejUCF5j9",
  "2act2": "https://forms.gle/3Vm6csVX24tPEzQk8",
  "2act3": "https://forms.gle/kqxzJoSShVcMtnVQ9",
  "2act4": "https://forms.gle/jnrZc3ez7nz9u6Eh7",
  "2act5": "https://forms.gle/atj8yZDScUoPLAFE9",
  "2act6": "https://forms.gle/n6gmeGoXZiohJ96WA",
  "2act7": "https://forms.gle/9GipzLDP8HcwVBhZ6",

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
