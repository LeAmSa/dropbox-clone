import { Dropzone } from "@/components/dropzone";
import { auth } from "@clerk/nextjs/server";

export default function Dashboard() {
  const { userId } = auth();

  return (
    <div>
      <Dropzone />
    </div>
  );
}
