import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Badge, Form, Alert } from 'react-bootstrap'

function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [commentData, setCommentData] = useState('')
  
  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
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
    
    const allPosts = savedPosts.length > 0 ? savedPosts : defaultPosts
    const foundPost = allPosts.find(p => p.id === parseInt(id))
    
    if (foundPost) {
      setPost(foundPost)
    }
  }, [id])

  const handleAddComment = (e) => {
    e.preventDefault()
    if (commentData.trim()) {
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
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
      
      const allPosts = savedPosts.length > 0 ? savedPosts : defaultPosts
      const updatedPosts = allPosts.map(p => {
        if (p.id === parseInt(id)) {
          return {
            ...p,
            comments: [
              ...p.comments,
              {
                id: Date.now(),
                author: "Anonymous",
                text: commentData,
                date: new Date().toLocaleDateString()
              }
            ]
          }
        }
        return p
      })
      
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
      setPost(updatedPosts.find(p => p.id === parseInt(id)))
      setCommentData('')
    }
  }

  if (!post) {
    return (
      <div className="blog-page">
        <Container className="py-5 mt-5">
          <Alert variant="warning">
            Post not found.
          </Alert>
          <Link to="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </Container>
      </div>
    )
  }

  return (
    <div className="blog-page">
      <Container className="py-5 mt-5">
        <Row>
          <Col lg={10} className="mx-auto">
            {/* Navigation Buttons */}
            <div className="mb-4">
              <Link to="/blog">
                <Button variant="outline-secondary" className="me-2">
                  <i className="bi bi-arrow-left me-2"></i>
                  Return to Blog
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline-primary">
                  <i className="bi bi-house me-2"></i>
                  Home
                </Button>
              </Link>
            </div>

            {/* Blog Post */}
            <Card className="shadow-sm border-0 blog-post">
              <Card.Body className="p-5">
                <div className="mb-4">
                  <h1 className="display-5 fw-bold mb-3">{post.title}</h1>
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <Badge bg="secondary">
                      {post.date}
                    </Badge>
                    {post.githubRepo && (
                      <a 
                        href={post.githubRepo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <Badge bg="dark" style={{ cursor: 'pointer' }}>
                          <i className="bi bi-github me-1"></i>
                          View on GitHub
                        </Badge>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="post-content mb-5">
                  <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                    {post.content}
                  </p>
                </div>

                {/* Comments Section */}
                <div className="comments-section mt-5 pt-5 border-top">
                  <h3 className="mb-4">
                    <i className="bi bi-chat-dots me-2" style={{ color: '#2c3e50' }}></i>
                    Comments ({post.comments.length})
                  </h3>

                  {/* Display Comments */}
                  {post.comments.length > 0 && (
                    <div className="mb-4">
                      {post.comments.map(comment => (
                        <div key={comment.id} className="comment mb-3 p-4 bg-light rounded">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <strong>{comment.author}</strong>
                            <small className="text-muted">{comment.date}</small>
                          </div>
                          <p className="mb-0">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Comment Form */}
                  <Form onSubmit={handleAddComment}>
                    <Form.Group className="mb-3">
                      <Form.Label><strong>Add a Comment</strong></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Share your thoughts..."
                        value={commentData}
                        onChange={(e) => setCommentData(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      <i className="bi bi-send me-2"></i>
                      Post Comment
                    </Button>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogPost

