export async function getViews(slug: string): Promise<{ views: number }> {
  const response = await fetch(`http://localhost:3000/api/views?slug=${slug}`);

  if (!response.ok) {
    throw new Error('Failed to get views');
  }

  return await response.json();
}

export async function increaseViews(slug: string): Promise<{ views: number }> {
  const response = await fetch(`http://localhost:3000/api/views?slug=${slug}`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to increase view');
  }

  return await response.json();
}
