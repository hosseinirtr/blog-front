async function getPost(id) {
  const res = await fetch(`http://localhost:8085/api/posts/${id}`);
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  console.log(post);
  return post;
}

export default async function page({ params }) {
  const [data] = await Promise.all([getPost(params.id)]);
  return (
    <div className="p-2 container align-content-center d-flex flex-column bg-dark">
      <h2>{data.title}</h2>
      <img
        src={
          data?.image
            ? `http://localhost/media/${data?.image}`
            : "/not_image.jpg"
        }
        width={500}
        alt="Picture of the author"
      />
      <p>{data.content}</p>
      {data.detail && (
        <div className="d-flex justify-content-center align-content-center">
          <p>Data Not found</p>
        </div>
      )}
    </div>
  );
}
