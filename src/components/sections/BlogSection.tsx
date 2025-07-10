import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Cool Things You Can Do With ROS (Robot Operating System)",
      excerpt: "From real-time SLAM to controlling healthcare robots, discover why ROS is the Swiss Army knife of robotics.",
      date: "2024-07-01",
      readTime: "6 min read",
      category: "Robotics",
      slug: "ros-cool-things"
    },
    {
      id: 2,
      title: "Being an Engineer Who Also Creates Content",
      excerpt: "You don't need a ring light to share your journey. How engineers can create meaningful content on LinkedIn, YouTube, or blogs without burnout.",
      date: "2024-06-20",
      readTime: "5 min read",
      category: "Lifestyle",
      slug: "engineer-content-creation"
    },
    {
      id: 3,
      title: "How to Find & Pitch for MSME-Funded Projects as a Student",
      excerpt: "A practical guide on securing MSME funding for innovative student projects, including how to apply, pitch, and deliver.",
      date: "2024-06-15",
      readTime: "7 min read",
      category: "Funding",
      slug: "msme-funding-student-project"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-6xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on web development, design, and technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-primary transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        
      </div>
    </div>
  );
};

export default BlogSection;
