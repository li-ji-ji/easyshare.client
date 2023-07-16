import Files from "@/components/files";
import Texts from "@/components/texts";

export default function Page() {

  return (
    <div className="md:container md:mx-auto py-4 flex justify-around items-start h-screen">
      <div className="card w-full bg-base-100 shadow-sm mx-2 py-2 h-full">
        <figure>
          <Files></Files>
        </figure>
      </div>
      <div className="card w-full bg-base-100 shadow-xl mx-2 py-2 h-full">
        <figure>
          <Texts></Texts>
        </figure>
      </div>
    </div>
  );
}
