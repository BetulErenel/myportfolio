import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Admin() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  // Simple password - change this to your desired password
  const ADMIN_PASSWORD = 'admin123' // Change this to your secure password
  
  const [newPost, setNewPost] = useState({ 
    title: '', 
    content: '', 
    githubRepo: '' 
  })

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleAddPost = (e) => {
    e.preventDefault()
    if (newPost.title.trim() && newPost.content.trim()) {
      // Get existing posts from localStorage
      const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
      
      // Create new post
      const newPostData = {
        id: Date.now(),
        title: newPost.title,
        content: newPost.content,
        date: new Date().toLocaleDateString(),
        githubRepo: newPost.githubRepo || '',
        comments: []
      }
      
      // Add new post at the beginning
      const updatedPosts = [newPostData, ...existingPosts]
      
      // Save to localStorage
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
      
      alert('Post added successfully! Redirecting to blog...')
      
      // Reset form
      setNewPost({ title: '', content: '', githubRepo: '' })
      
      // Redirect to blog page
      setTimeout(() => {
        navigate('/blog')
      }, 1000)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="blog-page">
        <Container className="py-5 mt-5">
          <Row>
            <Col lg={6} className="mx-auto">
              <Card className="shadow-sm border-0">
                <Card.Header className="bg-dark text-white">
                  <h4 className="mb-0">
                    <i className="bi bi-shield-lock me-2"></i>
                    Admin Login
                  </h4>
                </Card.Header>
                <Card.Body className="p-4">
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter admin password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
                    <Button variant="primary" type="submit" className="w-100">
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  return (
    <div className="blog-page">
      <Container className="py-5 mt-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Add New Blog Post</h2>
              <Button variant="outline-secondary" onClick={() => navigate('/blog')}>
                <i className="bi bi-arrow-left me-2"></i>Back to Blog
              </Button>
            </div>

            <Card className="shadow-sm border-0">
              <Card.Header className="bg-dark text-white">
                <h4 className="mb-0">
                  <i className="bi bi-plus-circle me-2"></i>
                  Create New Post
                </h4>
              </Card.Header>
              <Card.Body className="p-4">
                <Form onSubmit={handleAddPost}>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter post title"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Share what you learned today..."
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>GitHub Repository URL (Optional)</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://github.com/yourusername/repo-name"
                      value={newPost.githubRepo}
                      onChange={(e) => setNewPost({ ...newPost, githubRepo: e.target.value })}
                    />
                    <Form.Text className="text-muted">
                      Link to the GitHub repository related to this post
                    </Form.Text>
                  </Form.Group>
                  <Alert variant="info" className="mb-3">
                    <strong>Note:</strong> Posts are saved automatically and will appear on the blog page immediately.
                  </Alert>
                  <Button variant="primary" type="submit" className="me-2">
                    <i className="bi bi-send me-2"></i>
                    Publish Post
                  </Button>
                  <Button variant="outline-secondary" onClick={() => setNewPost({ title: '', content: '', githubRepo: '' })}>
                    Clear
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Admin

