const API_URL = "https://desafio-backend-dmjz.onrender.com";

export async function login(email, password) {
  if (!email || !password) {
      throw new Error("Email and password are required");
  }

  if (typeof email !== 'string' || typeof password !== 'string') {
      throw new Error("Invalid input type");
  }

  try {
      const response = await fetch(`${API_URL}/auth/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              email,
              password,
          }),
      });

      if (!response.ok) {
          if (response.status === 409) {
              throw new Error("Email or password incorrect. Please try again.");
          } else {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
      }

      const json = await response.json();
      const { token } = json.data;
      return token;
  } catch (error) {
      if (error instanceof TypeError || error.message.includes('failed to fetch')) {
          throw new Error("Failed to connect to server. Please check your internet connection.");
      } else {
          throw new Error("An unexpected error occurred. Please try again later.");
      }
  }
}



export async function create(username, email, password) {
  if (!username || !email || !password) {
    throw new Error("Username, email, and password are required");
  }

  if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    throw new Error("Invalid input type");
  }

  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      if (response.status === 409) {
        throw new Error(errorResponse.message || "Username or email already exists");
      } else if (response.status === 500) {
        console.log(response)
        throw new Error("Internal server error. Please try again later.");
      } else {
        throw new Error(errorResponse.message || 'Failed to create user');
      }
    }

    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}


export async function getPosts() {
  try {
      const response = await fetch(`${API_URL}/posts`);
      
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const json = await response.json();
      
      if (json.success) {
          return json.data.posts;
      } else {
          throw new Error(json.error || 'Failed to fetch posts');
      }
  } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
  }
}

export async function getPost(id) {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    console.log('Respuesta JSON:', json);

    if (json.success) {
      return json.data.post; // Ajusta según la estructura de tu respuesta JSON
    } else {
      throw new Error(json.error || 'Failed to fetch post');
    }

  } catch (error) {
    console.error('Error fetching post:', error);
    throw error; // Re-lanza el error para manejarlo en un nivel superior si es necesario
  }
}


// Función para crear un nuevo post en la API
export async function createPost(title, body, hashtags) {
  const token = getAuthToken(); 
  
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title,
        body,
        hashtags
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create post");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

export function getAuthToken() {
  return localStorage.getItem('token');
}

