import { content } from "@/data/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: content.blog.subtitle,
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-background pt-10">
      <div className="container mx-auto px-4 md:px-6 py-20">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            {content.blog.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {content.blog.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.blog.posts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              direction="up"
              delay={index * 0.1}
              className="group bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-2 text-sm text-accent font-medium mb-4">
                <Calendar size={16} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('es-PE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground mb-8 flex-1">
                {post.excerpt}
              </p>
              
              <Link
                href={`#`} // Note: A real implementation would link to `/blog/${post.slug}`
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent mt-auto group-hover:gap-3 transition-all"
              >
                Leer artículo <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
