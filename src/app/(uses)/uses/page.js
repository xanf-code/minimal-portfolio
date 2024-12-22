import HeaderWrapper from "@/app/header-wrapper";
import RootLayout from "@/app/layout";
import Image from "next/legacy/image";

const tools = [
  {
    name: "Notion",
    description: "Productivity and Todo-List",
    image: "/images/notion.png",
    uri: "https://notion.so/",
    type: "software",
  },
  {
    name: "iTerm2",
    description: "Terminal of choice",
    image: "/images/iterm.png",
    uri: "https://iterm2.com/",
    type: "software",
  },
  {
    name: "Vercel",
    description: "Deploy preview and ship",
    image: "/images/vercel.png",
    uri: "https://vercel.com/",
    type: "code",
  },
  {
    name: "VS Code",
    description: "Code editor",
    image: "/images/vs.png",
    uri: "https://code.visualstudio.com/",
    type: "code",
  },
  {
    name: "Spotify",
    description: "Music Player",
    image: "/images/spotify.png",
    uri: "https://www.spotify.com/",
    type: "music",
  },
  {
    name: "Github",
    description: "Repository Management",
    image: "/images/github.png",
    uri: "https://github.com/",
    type: "software",
  },
  {
    name: "15'' MacBook Pro (2017)",
    description: "Primary Workstation",
    image: "/images/apple.jpeg",
    uri: "",
    type: "work",
  },
  {
    name: "27'' Asus ProArt",
    description: "Monitor",
    image: "/images/asus.jpeg",
    uri: "",
    type: "work",
  },
  {
    name: "Redragon Fizz K-617",
    description: "Keyboard",
    image: "/images/red.png",
    uri: "",
    type: "work",
  },
  {
    name: "Dassai Mochi 2",
    description: "Desk Accessories",
    image: "/images/dasai.png",
    uri: "",
    type: "work",
  },
  {
    name: "Nothing Ear (2)",
    description: "Primary Audio Device",
    image: "/images/nothing.png",
    uri: "",
    type: "things",
  },
  {
    name: "Skullcandy Cassette",
    description: "Secondary Audio Device",
    image: "/images/skull.png",
    uri: "",
    type: "things",
  },
  {
    name: "Sony A6400",
    description: "Primary Camera",
    image: "/images/sony.png",
    uri: "",
    type: "things",
  },
  {
    name: "Instax Mini 90",
    description: "Secondary Camera (Polaroid)",
    image: "/images/instax.jpeg",
    uri: "",
    type: "things",
  },
];

const renderToolType = (type) => {
  return tools
    .filter((tool) => tool.type === type)
    .map((tool) => (
      <div className="p-3" key={tool.name}>
        <a href={tool.uri} target="__blank">
          <div className="flex items-center">
            <div className="items-center flex bg-[#fcf7f7] p-1.5 rounded-md">
              <Image
                src={tool.image}
                alt={tool.name}
                width={40}
                height={40}
                className="rounded-md"
                priority
              />
            </div>
            <div className="flex flex-col pl-4">
              <h1 className="font-[450]">{tool.name}</h1>
              <p className="font-Quattro text-sm text-gray-600 dark:text-gray-200">
                {tool.description}
              </p>
            </div>
          </div>
        </a>
      </div>
    ));
};

const Uses = () => {
  return (
    <HeaderWrapper>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-4">
        <h1 className="font-bold text-3xl md:text-4xl pb-3">Uses</h1>
        <div className="space-y-2">
          <p className="pb-2 text-sm text-gray-600 dark:text-gray-200">
            This is the Collection of tools, devices and softwares that i use in
            my projects and my day to day life that helps me to build a better
            website and increase my productivity.
          </p>
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-3"></hr>
        <div className="w-full">
          <h1 className="font-bold text-xl mt-0 mb-1">Code</h1>
          {renderToolType("code")}
          <h1 className="font-bold text-xl mt-4 mb-1">Software</h1>
          {renderToolType("software")}
          <h1 className="font-bold text-xl mt-4 mb-1">Work</h1>
          {renderToolType("work")}
          <h1 className="font-bold text-xl mt-4 mb-1">Music</h1>
          {renderToolType("music")}
          <h1 className="font-bold text-xl mt-4 mb-1">Things</h1>
          {renderToolType("things")}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Uses;
