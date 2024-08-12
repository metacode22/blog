export async function increaseViews(slug: string): Promise<{ views: number }> {
  const response = await fetch(`/views?slug=${slug}`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to increase view');
  }

  return await response.json();
}
