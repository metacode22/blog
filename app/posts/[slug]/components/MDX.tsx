import { useMDXComponent } from 'next-contentlayer/hooks';

export default function MDX({ code }: { code: string }) {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent />;
}
