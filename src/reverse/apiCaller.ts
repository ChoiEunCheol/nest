export async function getUser(id: number) {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const data = await response.json();
    return data;
  }
  