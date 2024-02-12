'use client';

import Giscus from '@giscus/react';

export function Comments() {
  return (
    <Giscus
      repo='metacode22/blog'
      repoId='R_kgDOKXhXFw'
      category='General'
      categoryId='DIC_kwDOKXhXF84CdJpp'
      mapping='pathname'
      strict='0'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='bottom'
      theme='preferred_color_scheme'
      lang='ko'
      loading='eager'
    />
  );
}
