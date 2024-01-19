import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return(
     <div className="flex w-full  h-screen flex-col background">
       <h1 className="rounded-md text-center bg-white p-1 font-bold mt-4 ml-3 mr-3 w-[96%] text-xl">RANDOM GIFS</h1>
       <div className="flex  flex-col justify-center items-center"> 
        <Random/>
        <Tag/>
       </div>
     </div>
     );
  
}
