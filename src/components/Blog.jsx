import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap'

function Blog() {
  const navigate = useNavigate()
  
  // Default posts
  const defaultPosts = [
    {
      id: 1,
      title: "Learning React Hooks",
      content: "Today I learned about React Hooks and how they can simplify state management in functional components. The useState and useEffect hooks are incredibly powerful!",
      date: new Date().toLocaleDateString(),
      githubRepo: "https://github.com/yourusername/react-hooks-project",
      comments: [
        { id: 1, author: "John Doe", text: "Great post! Hooks are indeed game-changers.", date: new Date().toLocaleDateString() }
      ]
    },
    {
      id: 2,
      title: "Understanding Bootstrap Grid System",
      content: "The Bootstrap grid system is built with flexbox and allows up to 12 columns across the page. It's responsive and mobile-first, which makes it perfect for modern web development.",
      date: new Date().toLocaleDateString(),
      githubRepo: "https://github.com/yourusername/bootstrap-project",
      comments: []
    }
  ]

  // Load posts from localStorage or use defaults
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts')
    return savedPosts ? JSON.parse(savedPosts) : defaultPosts
  })

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts))
  }, [posts])


  return (
    <div className="blog-page">
      <Container className="py-5 mt-5">
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3">What I Learn Today</h1>
              <p className="lead text-muted">Sharing my daily learning journey and insights</p>
            </div>

            {/* Blog Posts */}
            {posts.length === 0 ? (
              <Alert variant="info" className="text-center">
                No blog posts yet. Be the first to share what you learned today!
              </Alert>
            ) : (
              posts.map(post => {
                // Truncate content for preview (first 200 characters)
                const previewContent = post.content.length > 200 
                  ? post.content.substring(0, 200) + '...' 
                  : post.content
                
                return (
                <Card 
                  key={post.id} 
                  className="mb-4 shadow-sm border-0 blog-post"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h3 className="mb-2">{post.title}</h3>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <Badge bg="secondary">
                            {post.date}
                          </Badge>
                          {post.githubRepo && (
                            <a 
                              href={post.githubRepo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-decoration-none"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Badge bg="dark" style={{ cursor: 'pointer' }}>
                                <i className="bi bi-github me-1"></i>
                                View on GitHub
                              </Badge>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mb-4" style={{ whiteSpace: 'pre-wrap' }}>
                      {previewContent}
                    </p>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/blog/${post.id}`)
                      }}
                    >
                      Read More <i className="bi bi-arrow-right ms-1"></i>
                    </Button>

                    {/* Comments Count - Click to view full post for comments */}
                    <div className="mt-3 pt-3 border-top">
                      <small className="text-muted">
                        <i className="bi bi-chat-dots me-1"></i>
                        {post.comments.length} comment{post.comments.length !== 1 ? 's' : ''} • Click to read full post and comment
                      </small>
                    </div>
                  </Card.Body>
                </Card>
                )
              })
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog

