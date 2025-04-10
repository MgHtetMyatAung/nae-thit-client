import React from "react";

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How Our Food Drive Impacted 500+ Families",
      excerpt:
        "Learn how our annual food drive provided meals to over 500 families in underserved communities this winter season.",
      date: "May 15, 2023",
      category: "Community",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 2,
      title: "Volunteer Spotlight: Meet Maria Gonzalez",
      excerpt:
        "Discover how Maria has dedicated 200+ hours to tutoring children in our education program.",
      date: "April 28, 2023",
      category: "Volunteers",
      readTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 3,
      title: "5 Ways to Get Involved This Summer",
      excerpt:
        "Explore meaningful ways you can support our causes during the summer months when need is highest.",
      date: "April 10, 2023",
      category: "Get Involved",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 4,
      title: "Annual Report: Our Impact in 2022",
      excerpt:
        "See the measurable difference we made together last year through our various programs and initiatives.",
      date: "March 22, 2023",
      category: "News",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 5,
      title: "Partnering with Local Businesses for Change",
      excerpt:
        "How our corporate partnerships are creating sustainable solutions to community challenges.",
      date: "March 5, 2023",
      category: "Partnerships",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 6,
      title: "The Science Behind Effective Charity",
      excerpt:
        "Research-backed strategies that make our programs more impactful than traditional approaches.",
      date: "February 18, 2023",
      category: "Research",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    },
  ];

  const categories = [
    { name: "All", count: 12 },
    { name: "Community", count: 4 },
    { name: "Volunteers", count: 3 },
    { name: "News", count: 2 },
    { name: "Research", count: 2 },
    { name: "Partnerships", count: 1 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl">
            Stay updated with our latest stories, news, and insights from the
            field.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Donation",
                    "Events",
                    "Impact",
                    "Stories",
                    "Education",
                    "Food Drive",
                  ].map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Subscribe to Newsletter
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Get our latest posts delivered to your inbox
                  </p>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <a
                        href="#"
                        className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded mb-3"
                      >
                        {post.category}
                      </a>
                      <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                        <a href="#">{post.title}</a>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md bg-blue-600 text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    3
                  </a>
                  <span className="px-3 py-1">...</span>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Next
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
