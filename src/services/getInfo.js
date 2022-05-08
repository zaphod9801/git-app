const API_URL = "https://api.github.com";
const token = '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'


export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserByUsername(username) {
  try {
    
  
    const response = await fetch(`${API_URL}/users/${username}`, {
    
      headers: {
        Authorization: `token ${token}`
      }
    }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMailsByUsername() {
  try {
    
  
    const response = await fetch(`${API_URL}/user/emails`, {
    
      headers: {
        Authorization: `token ${token}`
      }
    }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getReposByUsername(username) {
  try {
    const response = await fetch(`${API_URL}/users/${username}/repos`
    , {
    
      headers: {
        Authorization: `token ${token}`
      }
    }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOrgsByUsername() {
  try {
    const response = await fetch(`${API_URL}/user/orgs`
    , {
    
      headers: {
        Authorization: `token ${token}`
      }
    }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}