import Breadcrumb from "./components/breadcrumb";
import About from "./components/ui/About/about";
import News from "./components/ui/News/news";
import Novelty from "./components/ui/Novelty/novelty";
import Presentation from "./components/ui/Presentation/presentation";
import Share from "./components/ui/Share/share";
import Story from "./components/ui/Story/story";

export default function Home() {
  return (
    <main>
      <Breadcrumb items={["OWNDAYS眼鏡公司首頁","特集","OWNDAYS × NORITAKE"]}/>
      <div className="container">
        <Presentation />
        <Story />
        <News />
        <Novelty />
        <About />
        <Share />
      </div>
    </main>
  );
}
