import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { uniq, flatten } from "lodash";

import styles from "./page.module.scss";

import SEO from "../components/seo";
import Card from "../components/card/card";
import PageHeader from "../components/pageHeader/pageHeader";

export default () => {
  const [currentFilter, setCurrentFilter] = useState("");
  return (
    <StaticQuery
      query={graphql`
        query ResourcesQuery {
          allFile(filter: { absolutePath: { regex: "/\/resources\//" } }) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                    url
                    author
                    tags
                  }
                  html
                }
              }
            }
          }
        }
      `}
      render={data => {
        let allTags = [];

        data.allFile.edges.forEach(({ node }) => {
          const tag = node.childMarkdownRemark.frontmatter.tags;
          if (tag) allTags.push(tag);
        });

        allTags = flatten(allTags);
        allTags = uniq(allTags);
        allTags.sort();

        return (
          <>
            <SEO title="Resources" />

            <div data-filter={`filter-${currentFilter}`}>
              <PageHeader title="Resources">
                <p>
                  Articles about things related to Serverless, JAMstack, and the
                  whole ball of yarn.
                </p>

                <nav>
                  {allTags.map((tag, i) => {
                    return (
                      <button
                        key={tag}
                        className={`${styles.button} button-${tag}`}
                        onClick={() => setCurrentFilter(tag)}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </nav>
              </PageHeader>

              <main className={styles.grid}>
                {data.allFile.edges.map(({ node }, i) => {
                  const {
                    title,
                    url,
                    author,
                    tags
                  } = node.childMarkdownRemark.frontmatter;
                  return (
                    <Card
                      key={title}
                      title={title}
                      author={author}
                      tags={tags}
                      html={node.childMarkdownRemark.html}
                      url={url}
                      extraClasses="resource"
                    />
                  );
                })}
              </main>
            </div>
          </>
        );
      }}
    />
  );
};
