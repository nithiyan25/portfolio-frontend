// API Service for Portfolio Backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

class PortfolioAPI {
  async fetchProfile() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/profile`);
      if (!response.ok) throw new Error('Failed to fetch profile');
      return await response.json();
    } catch (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
  }

  async fetchSkills() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/skills`);
      if (!response.ok) throw new Error('Failed to fetch skills');
      return await response.json();
    } catch (error) {
      console.error('Error fetching skills:', error);
      return [];
    }
  }

  async fetchProjects(category = null, featured = null) {
    try {
      let url = `${API_BASE_URL}/api/projects`;
      const params = new URLSearchParams();
      
      if (category) params.append('category', category);
      if (featured !== null) params.append('featured', featured);
      
      if (params.toString()) url += `?${params.toString()}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch projects');
      return await response.json();
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }

  async fetchProject(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);
      if (!response.ok) throw new Error('Failed to fetch project');
      return await response.json();
    } catch (error) {
      console.error('Error fetching project:', error);
      return null;
    }
  }

  async fetchExperience() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/experience`);
      if (!response.ok) throw new Error('Failed to fetch experience');
      return await response.json();
    } catch (error) {
      console.error('Error fetching experience:', error);
      return [];
    }
  }

  async sendContactMessage(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  async fetchStats() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/stats`);
      if (!response.ok) throw new Error('Failed to fetch stats');
      return await response.json();
    } catch (error) {
      console.error('Error fetching stats:', error);
      return null;
    }
  }
}

export default new PortfolioAPI();
