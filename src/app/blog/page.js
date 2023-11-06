import Link from "next/link";
import styles from "./page.module.css";

export default async function page() {
  const res = await fetch("http://localhost:8085/api/posts");
  const data = await res.json();

  return (
    <main
      className={`${styles.main} text-reset text-decoration-none bg-dark m-0 p-0 pt-md-5`}
    >
      <h1 className="text-white pt-5">Blog</h1>
      <div className="container">
        <div className="row">
          {data.map((post, index) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="col-md-4">
              <div className="mb-3 bg-danger p-3">
                <img
                  src={post.imageUrl}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    {post.author} | {post.date}
                  </small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
