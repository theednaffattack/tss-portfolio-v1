import { seo } from "@/lib/seo";
import { postsSortedByDate } from "@/lib/sorted-posts";
import { formatDate } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      ...seo({
        title: "Blog | TSS Blog Starter",
      }),
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <h3 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight font-heading">
        My Blog
      </h3>
      <ul className="gap-4 my-8">
        {postsSortedByDate.map((post) => (
          <Link
            to="/blog/$slug"
            params={{ slug: post._meta.path }}
            key={post._meta.path}
            className="flex flex-col space-y-1 mb-4"
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="tabular-nums text-muted-foreground">
                {formatDate(post.publishedAt.toString())}
              </p>
              <p className="tracking-tight">{post.title}</p>
            </div>
          </Link>
        ))}
      </ul>
    </section>
  );
}
