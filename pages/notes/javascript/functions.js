import Image from "next/image";

export default function Functions() {
  return (
    <>
      <h1>Hello from Functions</h1>
      <Image
        src="/javascript_2.svg"
        width={30}
        height={30}
        alt="JavaScript logo"
      />
    </>
  );
}
