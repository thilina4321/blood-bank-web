const dummy: string[] = [];

for (let i = 0; i < 50; i++) {
  dummy.push("Game");
}

export default function Home() {
  return (
    <div>
      {dummy.map((d: any, i: any) => (
        <p key={i}>{d}</p>
      ))}
    </div>
  );
}
