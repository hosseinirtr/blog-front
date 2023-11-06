import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch("http://localhost:8085/api/posts");
  const data = await res.json();

  return (
    <main className={`${styles.main} bg-dark m-0 p-0 pt-md-5`}>
      <div>
        <h1 className="text-white pt-5">Blog</h1>
        <div className="text-white">
          There was no reason to continue, but I kept going.
        </div>
      </div>
    </main>
  );
}
