// import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
// import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css'
import SiteLayout from "containers/Donation/Layout/SiteLayout";
import styled from "styled-components";



export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 py-28 lg:flex flex-col lg:justify-center items-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:rounded-lg lg:h-full"
              style={{
                backgroundImage:
                  `url(${postData.image})`
              }}
            />
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              {postData.title}{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                {postData.specialchar}
              </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {postData.desc}
            </p>
          </div>
        </div>

        <div className="pt-20 lg:pl-40 lg:pr-40 md:pl-10 md:pr-10 pl-8 pr-8 text-left">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </section>
    </div>
  );
}
