import styles from "./page.module.css";

export default function Home() {
  const puzzlePosts = [
    {
      title: "Puzzle Challenge #1",
      author: "John Doe",
      date: "October 10, 2023",
      imageUrl: "/puzzle1.jpg",
      description: "Solve this challenging puzzle and test your skills.",
    },
    {
      title: "Puzzle Challenge #1",
      author: "John Doe",
      date: "October 10, 2023",
      imageUrl: "/puzzle1.jpg",
      description: "Solve this challenging puzzle and test your skills.",
    },
    {
      title: "Puzzle Challenge #1",
      author: "John Doe",
      date: "October 10, 2023",
      imageUrl: "/puzzle1.jpg",
      description: "Solve this challenging puzzle and test your skills.",
    },
    {
      title: "Puzzle Challenge #1",
      author: "John Doe",
      date: "October 10, 2023",
      imageUrl: "/puzzle1.jpg",
      description: "Solve this challenging puzzle and test your skills.",
    },
    {
      title: "Puzzle Challenge #1",
      author: "John Doe",
      date: "October 10, 2023",
      imageUrl: "/puzzle1.jpg",
      description: "Solve this challenging puzzle and test your skills.",
    },
    {
      title: "Puzzle Challenge #1",
      author: "John Doe",
      date: "October 10, 2023",
      imageUrl: "/puzzle1.jpg",
      description: "Solve this challenging puzzle and test your skills.",
    },
    {
      title: "Puzzle Challenge #1",
      author: "John Doe",
      date: "October 10, 2023",
      imageUrl: "/puzzle1.jpg",
      description: "Solve this challenging puzzle and test your skills.",
    },

    // Add more puzzle posts
  ];

  return (
    <main className={`${styles.main} bg-dark m-0 p-0 pt-md-5`}>
      <h1 className="text-white pt-5">Blog</h1>
      <div className="container">
        <div className="row">
          {puzzlePosts.map((post, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4">
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
