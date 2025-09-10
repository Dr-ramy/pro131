
import VideoGallery3 from "@/components/content/mainitems/MainVideo3";
import Header from "@/components/layoutcomp/Header";

export default async function ContentPage() {


  return (

    <div className="w-full h-full overflow-hidden">
        <Header courseTitle="الممارسات التدريسية " />
        <VideoGallery3 />
    </div>
  );
}
