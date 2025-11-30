import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/recipes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ul>
        {allPosts.map((post) => (
          <li key={post._meta.fileName}>
            <a href={`/posts/${post._meta.path}`}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
