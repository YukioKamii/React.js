import Counter from "@/components/Counter";
import Welcome from "@/components/Welcome";

export default function Home(){
  return (
    <main>
      <Welcome name="Yoann"/>
      <Counter/>
    </main>
  );
}
