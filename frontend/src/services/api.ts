const API_BASE_URL = import.meta.env.VITE_API_URL;

export const api = {
  async getBooks(search?: string, tag?: string) {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (tag) params.append('tag', tag);
    
    const url = `${API_BASE_URL}/books${params.toString() ? '?' + params.toString() : ''}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    
    return response.json();
  },

  async getBook(id: number) {
    const response = await fetch(`${API_BASE_URL}/books/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch book');
    }
    
    return response.json();
  },

  async getTags() {
    const response = await fetch(`${API_BASE_URL}/books/meta/tags`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch tags');
    }
    
    return response.json();
  }
};
