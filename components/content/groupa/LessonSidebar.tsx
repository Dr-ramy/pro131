"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import LessonDropdown from "../mainitems/LessonDropdown";
import CustomAccordion from "../mainitems/CustomAccordion";
import { Button } from "@/components/ui/button";
import { ButtonItem, VideoItem } from "@/types/types";
import { lessons } from "./LessonData";
import { useState } from "react";
import { FaChevronCircleLeft, FaPlus, FaCog } from "react-icons/fa";
import { useRouter } from 'next/navigation';

type Props = {
  currentVideo?: VideoItem;
  visitedIds?: Set<string>;
  onSelect: (item: ButtonItem) => void;
  buttonHeight: number;
};

export default function LessonSidebar({
  currentVideo,
  visitedIds,
  onSelect,
  buttonHeight,
}: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const lessonname = [
    "التخطيط",
    "تحليل محتوى الدرس",
    "الأهداف التربوية",
    "خطة الدرس",
    "التهيئة والتمهيد للدرس",
    "التعزيز",
    "التنوع في طرق التدريس",
    "استخدام الوسائل التعليمية",
    "طرح الأسئلة الصفية",
    "إدارة الصف",
    "غلق الدرس",
    "تعريف التقويم التربوي",
    "الفرق بين التقويم والتقييم والقياس",
    "أهداف التقويم التربوي",
    "أهمية التقويم التربوي",
    "خصائص التقويم الفعال",
    "أنواع التقويم التربوي",
    "اتجاهات في التقويم التربوي",
    "شروط الواجب المنزلي الفعال",
  ];

  return (
    <>
      {/* زر فتح الشريط الجانبي */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => setOpen(true)}
            className="fixed top-[80px] right-0 flex items-center justify-center rounded-none bg-transparent p-0"
            style={{ width: "60px", height: `${buttonHeight}px` }}
          >
            <FaChevronCircleLeft
              style={{ width: "25px", height: "25px", color: "#4B5563", opacity: 0.3 }}
            />
          </Button>
        </SheetTrigger>

        {/* محتوى الشريط الجانبي */}
  <SheetContent side="right" dir="rtl" className="overflow-y-auto overflow-x-hidden p-4 w-80 text-right">
          <SheetHeader className="mb-4">
            <SheetTitle className="text-lg font-semibold">الوحدات الدراسية</SheetTitle>
            <SheetDescription className="text-lg font-semibold"> </SheetDescription>
          </SheetHeader>

          {/* إعداد التعلم */}
          <CustomAccordion
            title="إعداد التعلم"
            icon={<FaCog className="text-lg" />}
            items={[
              {
                id: 'extra1',
                text: 'الاختبار القبلي',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => window.open('https://forms.gle/Un8GEsKoS5r79nGBA', '_blank'),
              },
              {
                id: 'extra2',
                text: 'غرفة المحادثة',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => router.push('/chat'),
              },
              {
                id: 'extra3',
                text: 'Canva',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => window.open('https://www.canva.com/', '_blank'),
              },
              {
                id: 'extra4',
                text: 'Microsoft Teams',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () =>
                  window.open('https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', '_blank'),
              },
            ]}
          />

          <hr className="my-1 border-t-2 border-gray-300" />

          {/* الوحدة الأولى */}
          <div className="text-lg font-bold text-blue-700">الوحدة الأولى: مهارات التخطيط للدرس</div>
          <div className="space-y-2">
            {Object.entries(lessons).slice(0, 4).map(([, items], i) => (
              <LessonDropdown
                key={i}
                title={` ${lessonname[i]}`}
                items={items}
                currentVideo={currentVideo}
                visitedIds={visitedIds}
                onSelect={onSelect}
              />
            ))}
          </div>

          {/* الوحدة الثانية */}
          <div className="text-lg font-bold text-blue-700 mt-4">الوحدة الثانية: مهارات تنفيذ الدرس</div>
          <div className="space-y-2">
            {Object.entries(lessons).slice(4, 11).map(([, items], i) => (
              <LessonDropdown
                key={i}
                title={` ${lessonname[i + 4]}`}
                items={items}
                currentVideo={currentVideo}
                visitedIds={visitedIds}
                onSelect={onSelect}
              />
            ))}
          </div>

          {/* الوحدة الثالثة */}
          <div className="text-lg font-bold text-blue-700 mt-4">الوحدة الثالثة: التقويم التربوي</div>
          <div className="space-y-2">
            {Object.entries(lessons).slice(11, 19).map(([, items], i) => (
              <LessonDropdown
                key={i}
                title={` ${lessonname[i + 11]}`}
                items={items}
                currentVideo={currentVideo}
                visitedIds={visitedIds}
                onSelect={onSelect}
              />
            ))}
          </div>

          <hr className="my-1 border-t-2 border-gray-300" />

          {/* تثبيت التعلم */}
          <CustomAccordion
            title="تثبيت التعلم"
            icon={<FaCog className="text-lg" />}
            items={[
              {
                id: 'extra5',
                text: 'الاختبار البعدي',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => window.open('https://forms.gle/HvTvkCdmucT7ezha6', '_blank'),
              },
              {
                id: 'extra6',
                text: '',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => console.log("ضغطت على زر إضافي 2"),
              },
            ]}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}
