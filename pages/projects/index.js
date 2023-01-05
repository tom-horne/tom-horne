import React from 'react'
import Link from 'next/link';
import { request } from '../../utils/graphql-client';


export default function Projects({data}) {
  console.log(data);
  return (
    <div>
      <div>projects</div>
      <hr></hr>
      <div>
        {data.allProjects.map(project => (
          <Link href={`projects/${project.slug}`}>
            <p>{project.projectTitle}</p>
          </Link>
        ))}
      </div>
    </div>


  )

}

const PROJECT_QUERY = `
  query MyQuery {
    allProjects {
      id
      slug
      projectTitle
    }
  }
`;

export async function getStaticProps(context) {
  const data = await request({
    query: PROJECT_QUERY,
    preview: context.preview
  });
  return {
    props: { data }
  };
}

