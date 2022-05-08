const API_URL = "https://api.github.com";
const token = import.meta.env.VITE_REACT_APP_GITTOKEN;  //Needed authentication token for using the Github API, it gets it from a .env file

//This functions try to get the needed info in the Github API and converts it to a valid format
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

export async function getBranchesByRepo(repo, username) {
  try {
    const response = await fetch(`${API_URL}/repos/${username}/${repo}/branches`
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
