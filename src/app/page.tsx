import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image src={"/menu.jpg"} alt="Menu By, Stormi" fill objectFit="contain" />
    </div>
  );
}
