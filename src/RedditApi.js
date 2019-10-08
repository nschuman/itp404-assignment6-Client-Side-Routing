const API_URL = 'https://www.reddit.com';
export async function fetchThreads(animal) {
  let response = await fetch(`${API_URL}/r/${animal}.json`);
  return response.json();
} 

export async function fetchUserThreads(author){
	let response = await fetch(`${API_URL}/user/${author}.json`);
	return response.json();
}