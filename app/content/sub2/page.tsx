
import VideoGallery2 from "@/components/content/mainitems/MainVideo2";
import Header from "@/components/layoutcomp/Header";

export default async function ContentPage() {


  return (

    <div className="w-full h-full overflow-hidden">
        <Header courseTitle="الممارسات التدريسية " />
        <VideoGallery2 />
    </div>
  );
}
