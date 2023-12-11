import Counter from "@/components/articles/Counter";
import Welcome from "@/components/Welcome";

export default function Home(){
  return (
    <main>
      <Welcome name="Yoann"/>
      <Counter/>
    </main>
  );
}
