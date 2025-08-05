import { Title } from "@solidjs/meta";
import Chessboard from "~/cc-comp/Chessboard";

export default function Home() {
  return (
    <main class="min-h-screen flex flex-col items-center justify-center bg-amber-50">
      <Title>LL-CC</Title>
      <div class="w-full max-w-2xl p-4">
        <Chessboard />
      </div>
    </main>
  );
}
