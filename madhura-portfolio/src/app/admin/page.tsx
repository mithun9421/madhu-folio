'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  createdAt: string;
  isTopPost: boolean;
  isPublished: boolean;
  tags: string[];
}

// Mock data for demonstration
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Data Protection Laws in India',
    excerpt: 'A comprehensive guide to navigating India\'s evolving data protection landscape and compliance requirements for businesses.',
    content: '# Understanding Data Protection Laws in India\n\nData protection has become increasingly important...',
    category: 'Privacy Law',
    readTime: '5 min read',
    createdAt: '2024-01-15',
    isTopPost: true,
    isPublished: true,
    tags: ['privacy', 'data protection', 'india', 'compliance']
  },
  {
    id: '2',
    title: 'Intellectual Property Rights in the Digital Age',
    excerpt: 'Exploring how traditional IP laws adapt to modern digital challenges and emerging technologies.',
    content: '# Intellectual Property Rights in the Digital Age\n\nThe digital revolution has transformed...',
    category: 'Intellectual Property',
    readTime: '7 min read',
    createdAt: '2024-01-10',
    isTopPost: true,
    isPublished: true,
    tags: ['ip', 'digital', 'technology', 'rights']
  },
  {
    id: '3',
    title: 'Commercial Contract Essentials for Tech Startups',
    excerpt: 'Key legal considerations and contract clauses that every technology startup should understand.',
    content: '# Commercial Contract Essentials for Tech Startups\n\nStarting a tech company involves...',
    category: 'Commercial Law',
    readTime: '6 min read',
    createdAt: '2024-01-05',
    isTopPost: true,
    isPublished: true,
    tags: ['contracts', 'startups', 'technology', 'commercial']
  },
  {
    id: '4',
    title: 'GDPR Compliance for Indian Companies',
    excerpt: 'How Indian businesses can ensure GDPR compliance when dealing with European customers.',
    content: '# GDPR Compliance for Indian Companies\n\nWith the globalization of business...',
    category: 'Privacy Law',
    readTime: '8 min read',
    createdAt: '2024-01-02',
    isTopPost: false,
    isPublished: false,
    tags: ['gdpr', 'compliance', 'european', 'privacy']
  }
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>(mockPosts);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    readTime: '',
    tags: [],
    isTopPost: false,
    isPublished: false
  });

  // Simple authentication (in real app, use proper auth)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Demo password
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleCreatePost = () => {
    const post: BlogPost = {
      id: Date.now().toString(),
      title: newPost.title || '',
      excerpt: newPost.excerpt || '',
      content: newPost.content || '',
      category: newPost.category || '',
      readTime: newPost.readTime || '',
      createdAt: new Date().toISOString().split('T')[0],
      isTopPost: newPost.isTopPost || false,
      isPublished: newPost.isPublished || false,
      tags: newPost.tags || []
    };

    setPosts([post, ...posts]);
    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      readTime: '',
      tags: [],
      isTopPost: false,
      isPublished: false
    });
    setShowNewPostForm(false);
  };

  const handleUpdatePost = () => {
    if (editingPost) {
      setPosts(posts.map(post => 
        post.id === editingPost.id ? editingPost : post
      ));
      setEditingPost(null);
    }
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const toggleTopPost = (id: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, isTopPost: !post.isTopPost } : post
    ));
  };

  const togglePublished = (id: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, isPublished: !post.isPublished } : post
    ));
  };

  const topPosts = posts.filter(post => post.isTopPost).slice(0, 3);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-golden-50 to-white flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-golden-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔐</span>
            </div>
            <h1 className="text-2xl font-bold text-secondary">Admin Access</h1>
            <p className="text-gray-600">Enter password to access dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-golden-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-primary hover:text-golden-600 text-sm">
              ← Back to Website
            </Link>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center">
            Demo password: admin123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-golden-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Manage blog posts and content</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-primary hover:text-golden-600">
                View Website
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-red-600 hover:text-red-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-primary">{posts.length}</div>
            <div className="text-gray-600">Total Posts</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-green-600">{posts.filter(p => p.isPublished).length}</div>
            <div className="text-gray-600">Published</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-yellow-600">{posts.filter(p => !p.isPublished).length}</div>
            <div className="text-gray-600">Drafts</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-purple-600">{topPosts.length}</div>
            <div className="text-gray-600">Top Posts</div>
          </div>
        </div>

        {/* Top Posts Management */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-secondary mb-4">Top 3 Posts (Featured on Homepage)</h2>
          {topPosts.length === 0 ? (
            <p className="text-gray-600">No top posts selected</p>
          ) : (
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={post.id} className="flex items-center justify-between bg-golden-50 rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">{post.title}</h3>
                      <p className="text-sm text-gray-600">{post.category} • {post.readTime}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleTopPost(post.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove from Top
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-secondary">All Posts</h2>
          <button
            onClick={() => setShowNewPostForm(true)}
            className="btn-primary"
          >
            + New Post
          </button>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        <div className="text-sm text-gray-500">{post.excerpt.substring(0, 100)}...</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-golden-100 text-secondary rounded-full">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          post.isPublished 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.isPublished ? 'Published' : 'Draft'}
                        </span>
                        {post.isTopPost && (
                          <span className="block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                            Top Post
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => setEditingPost(post)}
                        className="text-primary hover:text-golden-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => togglePublished(post.id)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {post.isPublished ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        onClick={() => toggleTopPost(post.id)}
                        className="text-purple-600 hover:text-purple-800"
                      >
                        {post.isTopPost ? 'Remove Top' : 'Make Top'}
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Post Modal */}
        {showNewPostForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-bold text-secondary mb-6">Create New Post</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt</label>
                  <textarea
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content (Markdown)</label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    rows={10}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary font-mono text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Read Time</label>
                    <input
                      type="text"
                      value={newPost.readTime}
                      onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
                      placeholder="5 min read"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newPost.isTopPost}
                      onChange={(e) => setNewPost({...newPost, isTopPost: e.target.checked})}
                      className="mr-2"
                    />
                    Top Post
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newPost.isPublished}
                      onChange={(e) => setNewPost({...newPost, isPublished: e.target.checked})}
                      className="mr-2"
                    />
                    Published
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button onClick={handleCreatePost} className="btn-primary">
                  Create Post
                </button>
                <button
                  onClick={() => setShowNewPostForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Post Modal */}
        {editingPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-bold text-secondary mb-6">Edit Post</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt</label>
                  <textarea
                    value={editingPost.excerpt}
                    onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content (Markdown)</label>
                  <textarea
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                    rows={10}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary font-mono text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      value={editingPost.category}
                      onChange={(e) => setEditingPost({...editingPost, category: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Read Time</label>
                    <input
                      type="text"
                      value={editingPost.readTime}
                      onChange={(e) => setEditingPost({...editingPost, readTime: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingPost.isTopPost}
                      onChange={(e) => setEditingPost({...editingPost, isTopPost: e.target.checked})}
                      className="mr-2"
                    />
                    Top Post
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingPost.isPublished}
                      onChange={(e) => setEditingPost({...editingPost, isPublished: e.target.checked})}
                      className="mr-2"
                    />
                    Published
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button onClick={handleUpdatePost} className="btn-primary">
                  Update Post
                </button>
                <button
                  onClick={() => setEditingPost(null)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}