import React, { useState } from 'react';
import { request } from '../../utils/graphql-client';

export default function projectPost({ data }) {

  console.log(data);

  return (
    <div>
        <h1>{data.project.projectTitle}</h1>

        <br></br>
        <hr></hr>
        <br></br>
       

        <h1>use this video series, looks pretty good ➡️</h1>
    </div>
  );
};

const PATHS_QUERY = `
query MyQuery {
    allProjects {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const projects = await request({
    query: PATHS_QUERY,
  });

  const paths = projects.allProjects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }
}


const PROJECT_QUERY = `
query MyQuery($slug: String) {
    project(filter: {slug: {eq: $slug}}) {
      id
      projectTitle
      slug
    }
  }
`;

export async function getStaticProps(context) {
  const data = await request({
    query: PROJECT_QUERY,
    variables: { slug: context.params.slug },
    preview: context.preview
  });
  return {
    props: { data }
  };
}